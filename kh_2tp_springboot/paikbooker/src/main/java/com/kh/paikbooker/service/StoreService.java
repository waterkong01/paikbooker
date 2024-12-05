//package com.kh.paikbooker.service;
//
//import com.kh.paikbooker.dao.StoreDAO;
//import com.kh.paikbooker.vo.StoreVO;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@Service
//@RequiredArgsConstructor
//public class StoreService {
//    private final StoreDAO storeDao;
//
//    // 매장 검색
//    public List<StoreVO> searchStores(String region, String brandName, String reservationTime) {
//        return storeDao.searchStores(region, brandName, reservationTime);
//    }
//
//    // 카테고리 목록을 가져오는 메서드
//    public Map<String, List<String>> getCategories() {
//        Map<String, List<String>> categories = new HashMap<>();
//
//        categories.put("region", storeDao.getRegions()); // 지역 목록
//        categories.put("brandName", storeDao.getBrandNames()); // 브랜명 목록
//        categories.put("reservationTime", storeDao.getReservationTime()); // 예약 시간 목록
//        return categories;
//    }
//}
