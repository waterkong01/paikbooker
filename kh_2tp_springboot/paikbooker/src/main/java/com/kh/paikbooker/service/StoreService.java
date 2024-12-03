package com.kh.paikbooker.service;

import com.kh.paikBookerMiniProjectJdbc.dao.StoreDao;
import com.kh.paikBookerMiniProjectJdbc.vo.StoreVo;
import com.kh.paikbooker.dao.StoreDAO;
import com.kh.paikbooker.vo.StoreVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StoreService {
    private final StoreDAO storeDAO;

    // 매장 검색
    public List<StoreVO> searchStores(String region, String brandName, String reservationTime) {
        return storeDAO.searchStores(region, brandName, reservationTime);
    }

    // 카테고리 목록을 가져오는 메서드
    public Map<String, List<String>> getCategories() {
        Map<String, List<String>> categories = new HashMap<>();

        categories.put("region", storeDAO.getRegions()); // 지역 목록
        categories.put("brandName", storeDAO.getBrandNames()); // 브랜명 목록
        categories.put("reservationTime", storeDAO.getReservationTime()); // 예약 시간 목록
        return categories;
    }

    // 브랜드와 지점 데이터를 가공하여 반환
    public List<Map<String, Object>> getBrandsWithStores() {
        List<StoreVO> stores = storeDAO.getAllStores();

        // 브랜드별로 그룹화
        Map<String, List<StoreVO>> groupedStores = stores.stream()
                .collect(Collectors.groupingBy(StoreVO::getBrandName));

        List<Map<String, Object>> result = new ArrayList<>();
        groupedStores.forEach((brandName, storeList) -> {
            Map<String, Object> brandWithStores = new HashMap<>();
            brandWithStores.put("brand", Map.of(
                    "brandName", brandName,
                    "brandLogo", storeList.get(0).getBrandLogo()
            ));
            brandWithStores.put("stores", storeList.stream().map(store -> Map.of(
                    "storeNo", store.getStoreNo(),
                    "storeName", store.getStoreName(),
                    "storeImg", store.getStoreImg(),
                    "storeAddr", store.getStoreAddr(),
                    "storeHour", store.getStoreHour(),
                    "storePhone", store.getStorePhone()
            )).collect(Collectors.toList()));

            result.add(brandWithStores);
        });

        return result;
    }
}
