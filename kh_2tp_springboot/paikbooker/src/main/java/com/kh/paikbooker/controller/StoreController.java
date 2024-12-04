package com.kh.paikbooker.controller;

import com.kh.paikbooker.dao.StoreDAO;
import com.kh.paikbooker.vo.ReservationVO;
import com.kh.paikbooker.vo.StoreVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/stores")
@CrossOrigin(origins = "http://localhost:3000")
public class StoreController {

    @Autowired
    private StoreDAO storeDAO;

    // 예약) 전체 매장 조회
    @GetMapping
    public List<StoreVO> getAllStores() {
        return storeDAO.getAllStores();
    }

    // 예약) 특정 매장 조회
    @GetMapping("/{storeNo}")
    public StoreVO getStoreByStoreNo(@PathVariable int storeNo) {
        return storeDAO.getStoreByStoreNo(storeNo);
    }

    // 예약) 예약 불가능 시간 조회
    @GetMapping("/{storeNo}/reserved-times")
    public List<String> getReservedTimes(@PathVariable int storeNo, @RequestParam String date) {
        return storeDAO.getReservedTimes(storeNo, date);
    }

    // 예약) 예약 가능 시간 조회
    @GetMapping("/{storeNo}/available-times")
    public List<String> getAvailableTimes(@PathVariable int storeNo, @RequestParam String date) {
        StoreVO store = storeDAO.getStoreByStoreNo(storeNo);
        return storeDAO.getAvailableTimes(storeNo, date, store.getBrandOpen(), store.getBrandClose());
    }

    // 예약) 새로운 예약 생성
    @PostMapping("/{storeNo}/reservations")
    public ResponseEntity<?> addReservation(
            @PathVariable int storeNo,
            @RequestParam String userId,
            @RequestParam String userName,
            @RequestBody ReservationVO reservationVO) {
        try {
            // 예약 생성
            storeDAO.addReservation(reservationVO, userId, userName, storeNo);
            return ResponseEntity.ok("예약 성공");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("예약 실패 : " + e.getMessage());
        }
    }

    // 지도) 브랜드별 마커 설정
    @GetMapping("/{storeNo}/map")
    public StoreVO getBrandByStoreNo(@PathVariable int storeNo) {
        return storeDAO.getBrandByStoreNo(storeNo);
    }

    // 지도테스트) 매장 주소 집어넣어서 해당 위치 지도 표시
    @GetMapping("/{storeNo}/maptest")
    public StoreVO getAddrAndBrandByStoreNo(@PathVariable int storeNo) {
        return storeDAO.getAddrAndBrandByStoreNo(storeNo);
    }

}
