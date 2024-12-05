package com.kh.paikbooker.dao;

import com.kh.paikbooker.vo.ReservationVO;
import com.kh.paikbooker.vo.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Repository
public class StoreDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 예약) 쿼리문
    private static final String SELECT_ALL_STORES = "SELECT * FROM STORE_TB ORDER BY STORE_NAME ASC";
    private static final String SELECT_STORE_BY_STORE_NO = "SELECT * FROM STORE_TB WHERE STORE_NO = ?";
    private static final String SELECT_RESERVED_TIMES = "SELECT R_TIME FROM RESERVATION_TB WHERE STORE_NO = ?";
    private static final String REFER_STOREINFO = "SELECT STORE_NO, STORE_NAME, STORE_PHONE, BRAND_NAME FROM STORE_TB WHERE STORE_NO = ?";
    private static final String INSERT_RESERVATIONS = """
            INSERT INTO RESERVATION_TB 
            (R_NO, R_TIME, R_PERSON_CNT, USER_ID, USER_NAME, STORE_NO, STORE_NAME, STORE_PHONE, BRAND_NAME)
            VALUES (R_NO_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?)
        """;
    private static final String SELECT_BRAND_BY_STORE_NO = "SELECT BRAND_NAME FROM STORE_TB WHERE STORE_NO = ?";
    private static final String SELECT_ADDR_AND_BRAND_BY_STORE_NO = "SELECT STORE_ADDR, BRAND_NAME FROM STORE_TB WHERE STORE_NO = ?";
    private static final String SELECT_STORE_HOURS = "SELECT BRAND_OPEN, BRAND_CLOSE FROM STORE_TB WHERE STORE_NO = ?";

    // 예약) 전체 매장 조회
    public List<StoreVO> getAllStores() {
        return jdbcTemplate.query(SELECT_ALL_STORES, new BeanPropertyRowMapper<>(StoreVO.class));
    }

    // 예약) 특정 매장 조회
    public StoreVO getStoreByStoreNo(int storeNo) {
        return jdbcTemplate.queryForObject(SELECT_STORE_BY_STORE_NO, new Object[]{storeNo}, new BeanPropertyRowMapper<>(StoreVO.class));
    }

    // 예약) 예약된 시간 리스트 반환
    public List<String> getReservedTimes(int storeNo) {
        return jdbcTemplate.queryForList(SELECT_RESERVED_TIMES, new Object[]{storeNo}, String.class);
    }

    // 예약) 영업시간 반환
    public Map<String, String> getStoreHours(int storeNo) {
        return jdbcTemplate.queryForObject(
                SELECT_STORE_HOURS,
                new Object[]{storeNo},
                (rs, rowNum) -> {
                    Map<String, String> storeHours = new HashMap<>();
                    storeHours.put("brandOpen", rs.getString("BRAND_OPEN"));
                    storeHours.put("brandClose", rs.getString("BRAND_CLOSE"));
                    return storeHours;
                }
        );
    }

    // 예약) 영업시간을 기준으로 1시간 단위의 시간 리스트 생성
    public List<String> generateAvailableTimes(String brandOpen, String brandClose) {
        List<String> availableTimes = new ArrayList<>();
        int openTime = Integer.parseInt(brandOpen); // 영업 시작 시간 (24시간 형식)
        int closeTime = Integer.parseInt(brandClose); // 영업 종료 시간 (24시간 형식)

        for (int hour = openTime; hour < closeTime; hour++) {
            String time = String.format("%02d", hour); // 두 자리 문자열 형식
            availableTimes.add(time);
        }
        return availableTimes;
    }

    // 예약) 새로운 예약 생성
    public void addReservation(ReservationVO reservationVO, int storeNo) {

        // 리액트에서 10:00 형태로 selectedTime(RTime)을 받아옴
        // 날짜 고정(2024-01-01) 및 DB Date 타입 삽입을 위해 앞에 날짜정보를 붙여줌
        String reservationTime = "2024-01-01 " + reservationVO.getRTime();  // 예: "2024-01-01 10:00"
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime localDateTime = LocalDateTime.parse(reservationTime, formatter);
        Date realRTime = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());

        Map<String, Object> storeInfo = jdbcTemplate.queryForMap(REFER_STOREINFO, storeNo);
        jdbcTemplate.update(INSERT_RESERVATIONS,
                realRTime,
                reservationVO.getRPersonCnt(),
                storeInfo.get(""),
                "hardname1",
                storeInfo.get("STORE_NO"),
                storeInfo.get("STORE_NAME"),
                storeInfo.get("STORE_PHONE"),
                storeInfo.get("BRAND_NAME"));
    }

//    // 지도) 좌표로 지도 위치 설정
//    public StoreVO getBrandByStoreNo(int storeNo) {
//        return jdbcTemplate.queryForObject(SELECT_BRAND_BY_STORE_NO, new Object[]{storeNo}, new BeanPropertyRowMapper<>(StoreVO.class));
//    }

    // 지도) 매장 주소로 지도 위치 설정
    public StoreVO getAddrAndBrandByStoreNo(int storeNo) {
        return jdbcTemplate.queryForObject(SELECT_ADDR_AND_BRAND_BY_STORE_NO, new Object[]{storeNo}, new BeanPropertyRowMapper<>(StoreVO.class));
    }

//    // 검색)
//    public List<StoreVO> searchStores(String region, String brandName, String reservationTime) {
//        //기본 SQL 쿼리문 시작
//        StringBuilder sql = new StringBuilder("SELECT STORE_NO, BRAND_NAME, BRAND_LOGO, STORE_NAME, STORE_IMG, STORE_HOUR, STORE_ADDR," +
//                "STORE_MAP, STORE_PHONE FROM STORE WHERE 1=1");
//        System.out.println(sql);
//
//        // 동적 파라미터 리스트
//        List<Object> params = new ArrayList<>();
//
//        // 조건 1: 지역(store_addr)
//        if (region != null && !region.isEmpty()) {
//            sql.append(" AND STORE_ADDR LIKE ?");
//            params.add("%" + region + "%"); // 부분 검색을 위해 '%'를 추가
//            System.out.println(sql);
//        }
//
//        // 조건 2: 브랜드명(brand_name) - IN 절을 사용하여 다중선택 처리
//        if (brandName != null && !brandName.isEmpty()) {
//            sql.append(" AND BRAND_NAME IN (");
//            String[] brandNames = brandName.split(","); // 다중선택된 브랜드명 처리
//
//            for (int i = 0; i < brandNames.length; i++) {
//                sql.append("?");
//                if (i < brandNames.length - 1) {
//                    sql.append(", ");
//                }
//                params.add(brandNames[i].trim()); // 앞뒤 공백 제거 후 추가
//            }
//            sql.append(")");
//            System.out.println(sql);
//        }
//        // 조건 3: 예약시간 (store_hour)
//        if (reservationTime != null && !reservationTime.isEmpty()) {
//            sql.append(" AND STORE_HOUR LIKE ?");
//            params.add("%" + reservationTime + "%");  // 부분 검색을 위해 '%'를 추가
//            System.out.println(sql);
//        }
//
//        return jdbcTemplate.query(sql.toString(), params.toArray(), new StoreRowMapper());
//    }
//
//    // 카테고리 목록을 반환하는 메서드들
//    public List<String> getRegions() {
//        String sql = "SELECT DISTINCT STORE_ADDR FROM STORE";
//        return jdbcTemplate.queryForList(sql, String.class);
//    }
//
//    public List<String> getBrandNames() {
//        String sql = "SELECT DISTINCT BRAND_NAME FROM STORE";
//        return jdbcTemplate.queryForList(sql, String.class);
//    }
//
//    public List<String> getReservationTime() {
//        String sql = "SELECT DISTINCT STORE_HOUR FROM STORE";
//        return jdbcTemplate.queryForList(sql, String.class);
//    }
//
//    public static class StoreRowMapper implements RowMapper<StoreVO> {
//        @Override
//        public StoreVO mapRow(ResultSet rs, int rowNum) throws SQLException {
//            StoreVO store = new StoreVO();
//            store.setStoreNo(rs.getInt("STORE_NO"));
//            store.setStoreName(rs.getString("STORE_NAME"));
//            store.setStorePhone(rs.getString("STORE_PHONE"));
//            store.setStoreAddr(rs.getString("STORE_ADDR"));
//            store.setStoreMap(rs.getString("STORE_MAP"));
//            store.setBrandName(rs.getString("BRAND_NAME"));
//            store.setBrandOpen(rs.getString("BRAND_OPEN"));
//            store.setBrandClose(rs.getString("BRAND_CLOSE"));
//            return store;
//        }
//    }

}

