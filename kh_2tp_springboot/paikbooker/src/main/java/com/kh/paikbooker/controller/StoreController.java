package com.kh.paikbooker.controller;

import com.kh.paikbooker.dao.StoreDAO;
import com.kh.paikbooker.vo.ReservationVO;
import com.kh.paikbooker.vo.StoreVO;
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

    // 예약 가능 시간 조회
    @GetMapping("/{storeNo}/available-times")
    public List<String> getAvailableTimes(@PathVariable int storeNo, @RequestParam String date) {
        StoreVO store = storeDAO.getStoreByStoreNo(storeNo);
        return storeDAO.getAvailableTimes(storeNo, date, store.getStoreOpen(), store.getStoreClose());
    }

    // 새로운 예약 생성
    @PostMapping("/{storeNo}/reservations")
    public ResponseEntity<?> addReservation(@PathVariable int storeNo, @RequestBody ReservationVO reservationVO) {
        try {
            // 예약 생성
            storeDAO.addReservation(reservationVO);
            return ResponseEntity.ok("Reservation added successfully.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Reservation failed : " + e.getMessage());
        }
    }

}
