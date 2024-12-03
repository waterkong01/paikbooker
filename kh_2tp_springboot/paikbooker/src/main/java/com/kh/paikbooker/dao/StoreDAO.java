package com.kh.paikbooker.dao;

import com.kh.paikbooker.vo.ReservationVO;
import com.kh.paikbooker.vo.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Repository
public class StoreDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 전체 매장 리스트 조회 메소드
    public List<StoreVO> getAllStores() {
        String sql = "SELECT * FROM STORE_TB ORDER BY STORE_NO ASC";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(StoreVO.class));
    }

    // 특정 매장 조회 메소드
    public StoreVO getStoreByStoreNo(int storeNo) {
        String sql = "SELECT * FROM STORE_TB WHERE STORE_NO = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{storeNo}, new BeanPropertyRowMapper<>(StoreVO.class));
    }

    // 특정 매장의 예약 가능 시간 조회 메서드
    public List<String> getAvailableTimes(int storeNo, String date, Date storeOpen, Date storeClose) {
        // Step 1: 이미 예약된 시간 조회
        String reservedTimesSql = "SELECT TO_CHAR(R_TIME, 'HH24:MI') FROM RESERVATION_TB WHERE STORE_NO = ? AND TRUNC(R_TIME) = TO_DATE(?, 'YYYY-MM-DD')";
        List<String> reservedTimes = jdbcTemplate.queryForList(reservedTimesSql, new Object[]{storeNo, date}, String.class);

        // Step 2: 영업 시간 기준 예약 가능 시간 계산
        List<String> allTimes = generateTimes(storeOpen, storeClose); // 모든 시간 생성
        allTimes.removeAll(reservedTimes); // 예약된 시간 제거
        return allTimes;
    }

    // 영업 시간을 기준으로 1시간 간격의 시간 리스트 생성
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

    // 새로운 예약 삽입 메서드 (수정)
    public void addReservation(ReservationVO reservationVO) {
        String sql = "INSERT INTO RESERVATION_TB (USER_ID, USER_NAME, STORE_NO, STORE_NAME, STORE_PHONE, R_PERSON_CNT, R_TIME, BRAND_NAME) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql,
                reservationVO.getUserId(),
                reservationVO.getUserName(),
                reservationVO.getStoreNo(),
                reservationVO.getStoreName(),
                reservationVO.getStorePhone(),
                reservationVO.getRPersonCnt(),
                reservationVO.getRTime(),
                reservationVO.getBrandName());
    }
}
