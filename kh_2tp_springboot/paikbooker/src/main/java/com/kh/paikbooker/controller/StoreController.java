package com.kh.paikbooker.controller;

import com.kh.paikbooker.dao.StoreDAO;
import com.kh.paikbooker.service.StoreService;
import com.kh.paikbooker.vo.ReservationVO;
import com.kh.paikbooker.vo.StoreVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/stores")
@CrossOrigin(origins = "http://localhost:3000")
public class StoreController {


    private final StoreService storeService;

    @Autowired
    private StoreDAO storeDAO;

    // 전체 매장 조회
    @GetMapping
    public List<StoreVO> getAllStores() {
        return storeDAO.getAllStores();
    }

    // 특정 매장 조회
    @GetMapping("/{storeNo}")
    public StoreVO getStoreByStoreNo(@PathVariable int storeNo) {
        return storeDAO.getStoreByStoreNo(storeNo);
    }

    // 예약 불가능 시간 조회
    @GetMapping("/{storeNo}/reserved-times")
    public List<String> getReservedTimes(@PathVariable int storeNo, @RequestParam String date) {
        return storeDAO.getReservedTimes(storeNo, date);
    }

    // 예약 가능 시간 조회
    @GetMapping("/{storeNo}/available-times")
    public List<String> getAvailableTimes(@PathVariable int storeNo, @RequestParam String date) {
        StoreVO store = storeDAO.getStoreByStoreNo(storeNo);
        return storeDAO.getAvailableTimes(storeNo, date, store.getStoreOpen(), store.getStoreClose());
    }

    // 새로운 예약 생성
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



    // 매장 검색 API
    @GetMapping("/search") // HTTP GET 메서드는 일반적으로 데이터를 조회하는 데 사용
    public ResponseEntity<List<StoreVO>> searchStores(
            // @RequestParam //HTTP 요청의 쿼리 파라미터를 메서드 매개변수로 매핑합니다.
            // 예: /search?=Seouregionl&brandName=Starbucks 요청 시 region은 "Seoul", brandName은 "Starbucks"가 됩니다.
            @RequestParam(required = false) String region,
            // **required = false**를 지정하면 파라미터가 선택적이 되며,
            // 요청에 해당 파라미터가 포함되지 않더라도 에러가 발생하지 않도록 처리됩니다.
            @RequestParam(required = false) String brandName,
            @RequestParam(required = false) String reservationTime) {

        // 디버깅용
        log.error("검색 조건 - 지역: {}, 브랜드명: {}, 예약시간: {}", region, brandName, reservationTime);

        // StoreDao를 사용하여 조건에 맞는 매장 리스트를 조회
        List<StoreVO> storeList = storeService.searchStores(region, brandName, reservationTime);

        return ResponseEntity.ok(storeList); // 매장 리스트 반환
    }

    // 카테고리 목록을 반환하는 API
    @GetMapping("/categories")
    public ResponseEntity<Map<String, List<String>>> getCategories() {
        Map<String, List<String>> categories = storeService.getCategories();
        return ResponseEntity.ok(categories);
    }

    // 브랜드와 지점 데이터를 반환
    @GetMapping ("/home")
    public List<Map<String, Object>> getBrandsWithStores() {
        return storeService.getBrandsWithStores();
    }

}
