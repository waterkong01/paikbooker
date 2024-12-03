package com.kh.paikbooker.dao;

import com.kh.paikbooker.vo.ReservationVO;
import com.kh.paikbooker.vo.StoreVO;
import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Repository
public class StoreDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String SELECT_ALL_STORES = "SELECT * FROM STORE_TB ORDER BY STORE_NO ASC";
    private static final String SELECT_STORE_BY_STORE_NO = "SELECT * FROM STORE_TB WHERE STORE_NO = ?";
    private static final String SELECT_RESERVED_TIMES = "SELECT TO_CHAR(R_TIME, 'HH24:MI') FROM RESERVATION_TB WHERE STORE_NO = ? AND TRUNC(R_TIME) = TO_DATE(?, 'YYYY-MM-DD')";
    private static final String REFER_STOREINFO = "SELECT STORE_NO, STORE_NAME, STORE_PHONE, BRAND_NAME FROM STORE_TB WHERE STORE_NO = ?";
    private static final String INSERT_RESERVATIONS = """
            INSERT INTO RESERVATION_TB 
            (USER_ID, USER_NAME, STORE_NO, STORE_NAME, STORE_PHONE, R_PERSON_CNT, R_TIME, BRAND_NAME)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """;

    // 전체 매장 조회
    public List<StoreVO> getAllStores() {
        return jdbcTemplate.query(SELECT_ALL_STORES, new BeanPropertyRowMapper<>(StoreVO.class));
    }

    // 특정 매장 조회
    public StoreVO getStoreByStoreNo(int storeNo) {
        return jdbcTemplate.queryForObject(SELECT_STORE_BY_STORE_NO, new Object[]{storeNo}, new BeanPropertyRowMapper<>(StoreVO.class));
    }

    // 예약 불가능 시간 조회
    public List<String> getReservedTimes(int storeNo, String date) {
        return jdbcTemplate.queryForList(SELECT_RESERVED_TIMES, new Object[]{storeNo, date}, String.class);
    }

    // 예약 가능 시간 조회
    public List<String> getAvailableTimes(int storeNo, String date, Date storeOpen, Date storeClose) {
        List<String> reservedTimes = jdbcTemplate.queryForList(SELECT_RESERVED_TIMES, new Object[]{storeNo, date}, String.class);
        List<String> allTimes = generateTimes(storeOpen, storeClose); // 모든 시간 생성
        allTimes.removeAll(reservedTimes); // 예약된 시간 제거
        return allTimes;
    }

    // 새로운 예약 생성
    public void addReservation(ReservationVO reservationVO, String userId, String userName, int storeNo) {
        Map<String, Object> storeInfo = jdbcTemplate.queryForMap(REFER_STOREINFO, storeNo);
        jdbcTemplate.update(INSERT_RESERVATIONS,
                userId,
                userName,
                storeInfo.get("STORE_NO"),
                storeInfo.get("STORE_NAME"),
                storeInfo.get("STORE_PHONE"),
                reservationVO.getRPersonCnt(),
                reservationVO.getRTime(),
                storeInfo.get("BRAND_NAME"));
    }

    // 영업 시간을 기준으로 1시간 간격의 시간 리스트 생성 (1시간 단위로 예약)
    private List<String> generateTimes(Date storeOpen, Date storeClose) {
        List<String> times = new ArrayList<>();
        Calendar cal = Calendar.getInstance();
        cal.setTime(storeOpen);
        while (cal.getTime().before(storeClose)) {
            times.add(new SimpleDateFormat("HH:mm").format(cal.getTime()));
            cal.add(Calendar.HOUR_OF_DAY, 1);
        }
        return times;
    }




    public List<StoreVO> searchStores(String region, String brandName, String reservationTime) {
        //기본 SQL 쿼리문 시작
        StringBuilder sql = new StringBuilder("SELECT STORE_NO, BRAND_NAME, STORE_HOUR, STORE_ADDR," +
                "STORE_MAP, STORE_PHONE FROM STORE WHERE 1=1");

        // 동적 파라미터 리스트
        List<Object> params = new ArrayList<>();

        // 조건 1: 지역(store_addr)
        if (region != null && !region.isEmpty()) {
            sql.append("AND STORE_ADDR LIKE ?");
            params.add("%" + region + "%"); // 부분 검색을 위해 '%'를 추가
        }

        // 조건 2: 브랜드명(brand_name) - IN 절을 사용하여 에러 값에 대한 조건 처리
        if (brandName != null && !brandName.isEmpty()) {
            sql.append(" AND BRAND_NAME IN(");
            String[] brandNames = brandName.split(","); // 다중선택된 브랜드명 처리
            for (int i = 0; i < brandNames.length; i++) {
                sql.append("?");
                if (i < brandNames.length -1) {
                    sql.append(", ");
                }
                params.add(brandNames[i]);
            }
            sql.append(")");
        }
        // 조건 3: 예약시간 (store_hour)
        if (reservationTime != null && !reservationTime.isEmpty()) {
            sql.append(" AND STORE_HOUR LIKE ?");
            params.add("%" + reservationTime + "%");  // 부분 검색을 위해 '%'를 추가
        }

        return jdbcTemplate.query(sql.toString(), params.toArray(), new StoreRowMapper());
    }

    // 카테고리 목록을 반환하는 메서드들
    public List<String> getRegions() {
        String sql = "SELECT DISTINCT STORE_ADDR FROM STORE";
        return jdbcTemplate.queryForList(sql, String.class);
    }

    public List<String> getBrandNames() {
        String sql = "SELECT DISTINCT BRAND_NAME FROM STORE";
        return jdbcTemplate.queryForList(sql, String.class);
    }

    public List<String> getReservationTime() {
        String sql = "SELECT DISTINCT STORE_HOUR FROM STORE";
        return jdbcTemplate.queryForList(sql, String.class);
    }

    public static class StoreRowMapper implements RowMapper<StoreVO> {
        @Override
        public StoreVO mapRow(ResultSet rs, int rowNum) throws SQLException {
            StoreVO storeVO = new StoreVO();
            storeVO.setStoreNo(rs.getInt("STORE_NO"));
            storeVO.setBrandName(rs.getString("BRAND_NAME"));
            storeVO.setStoreHour(rs.getString("STORE_HOUR"));
            storeVO.setStoreAddr(rs.getString("STORE_ADDR"));
            storeVO.setStoreMap(rs.getString("STORE_MAP"));
            storeVO.setStorePhone(rs.getString("STORE_PHONE"));
            return storeVO;
        }
    }

    // 모든 데이터 가져오기
    public List<StoreVO> getAllStores() {
        String sql = "SELECT * FROM STORE";
        return jdbcTemplate.query(sql, (rs, rowNum) -> new StoreVO(
                rs.getInt("STORE_NO"),
                rs.getString("BRAND_NAME"),
                rs.getString("BRAND_LOGO"),
                rs.getString("STORE_NAME"),
                rs.getString("STORE_IMG"),
                rs.getString("STORE_HOUR"),
                rs.getString("STORE_ADDR"),
                rs.getString("STORE_MAP"),
                rs.getString("STORE_PHONE")
        ));
    }


}

