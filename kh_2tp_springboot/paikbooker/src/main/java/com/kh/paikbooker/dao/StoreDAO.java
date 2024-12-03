package com.kh.springpractice01.DAO;

import com.kh.springpractice01.VO.ReservationVO;
import com.kh.springpractice01.VO.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

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

    // 특정 매장 예약 시간 조회 메소드
    public List<String> getReservedTimes(int storeNo, String date) {
        String sql = "SELECT R_TIME FROM RESERVATION_TB WHERE STORE_NO = ? AND TRUNC(TO_DATE(R_TIME, 'YYYY-MM-DD HH24:MI:SS')) = TO_DATE(?, 'YYYY-MM-DD')";
        return jdbcTemplate.queryForList(sql, new Object[]{storeNo, date}, String.class);
    }

    // 특정 매장 예약 메소드
    // 실제로 사용자가 입력하는 값은 R_PERSON_CNT와 R_TIME 두개
    public void addReservation(ReservationVO reservationVO, String userId, String userName, int storeNo, String storeName, String storePhone, String brandName) {
        String sql = "INSERT INTO RESERVATION_TB (USER_ID, USER_NAME, STORE_NO, STORE_NAME, STORE_PHONE, R_PERSON_CNT, R_TIME, BRAND_NAME) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql,
                userId,
                userName,
                storeNo,
                storeName,
                storePhone,
                reservationVO.getRPersonCnt(),
                reservationVO.getRTime(),
                brandName);
    }

}
