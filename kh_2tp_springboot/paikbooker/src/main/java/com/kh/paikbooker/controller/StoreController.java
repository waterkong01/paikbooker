package com.kh.springpractice01.CONTROLLER;

import com.kh.springpractice01.DAO.StoreDAO;
import com.kh.springpractice01.VO.ReservationVO;
import com.kh.springpractice01.VO.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stores")
@CrossOrigin(origins = "http://localhost:3000")
public class StoreController {

    @Autowired
    private StoreDAO storeDAO;

    // 전체 매장 리스트 조회 /stores
    @GetMapping
    public List<StoreVO> getAllStores() {
        return storeDAO.getAllStores();
    }

    // 특정 매장 조회 /stores/storeNo
    @GetMapping("/{storeNo}")
    public StoreVO getStoreByStoreNo(@PathVariable int storeNo) {
        return storeDAO.getStoreByStoreNo(storeNo);
    }

    // 특정 매장 예약 시간 조회 /stores/storeNo/reservations
    @GetMapping("/{storeNo}/reservations")
    public List<String> getReservedTimes(@PathVariable int storeNo, @RequestParam String date) {
        return storeDAO.getReservedTimes(storeNo, date);
    }

    // 특정 매장 예약 /stores/storeNo/reservations
    @PostMapping("/{storeNo}/reservations")
    public ResponseEntity<?> addReservation(@PathVariable int storeNo, @RequestBody ReservationVO reservationVO) {
        try {

            // 로그인 정보에서 사용자 ID와 이름 가져오기 (세션 또는 인증 토큰)
            String userId = "유저아이디";
            storeDAO.addReservation(reservationVO);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Reservation failed : " + e.getMessage());
        }
    }
}
