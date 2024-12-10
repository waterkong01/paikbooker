import axios from "axios";
import { useParams } from "react-router-dom";
const PAIKBOOKER_DOMAIN = "http://localhost:8111";

const AxiosApi = {

  // NavBar) 브랜드 로고 가져오기 (NavBar3)
  getBrandLogos: async () => {
    const response = await axios.get(PAIKBOOKER_DOMAIN + `/navbar`)
    return response.data;
  },

  // 매장) 전체 매장 조회 (StoreList)
  getStoreList: async () => {
    const response = await axios.get(PAIKBOOKER_DOMAIN + `/stores`);
    return response.data;
  },

  // 매장) 특정 매장 조회 (StoreDetail, StoreDetailReservation)
  getEachStore: async (storeNo) => {
    const response = await axios.get(PAIKBOOKER_DOMAIN + `/stores/${storeNo}`);
    return response.data;
  },

  // 예약) 예약 가능 및 불가능 시간 조회 (StoreDetailReservation)
  times: async (storeNo) => {
    const response = await axios.get(PAIKBOOKER_DOMAIN + `/stores/${storeNo}/times`);
    return response.data;
  },
  
  // 예약) 새로운 예약 생성 (StoreDetailReservation)
  createReservation: async (reservationData) => {
    const response = await axios.post(PAIKBOOKER_DOMAIN + `/stores/${reservationData.storeNo}/reservations`,
      reservationData
    );
    return reservationData;
  },

  // 메뉴) 메뉴 조회 (StoreDetailMenu)
  getMenus: async (storeNo) => {
    const response = await axios.get(PAIKBOOKER_DOMAIN + `/stores/${storeNo}/menus`);
    return response.data;
  },

  // 지도) 매장 정보 가져오기 (StoreDatailMap)
  getStoreAddrNameMarker: async (storeNo) => {
    const response = await axios.get(PAIKBOOKER_DOMAIN + `/stores/${storeNo}/map`);
    return response.data;
  },

  // 별점) 별점 정보 가져오기 (StoreDetailRating)
  getRatingResults: async (storeNo) => {
    const response = await axios.get(PAIKBOOKER_DOMAIN + `/stores/${storeNo}/rating`);
    return response.data;
  },

  // 전체 예약 조회
  reservationList: async () => {
    return await axios.get(PAIKBOOKER_DOMAIN + "/reservation");
  }, 

  // 전체 리뷰 조회
  reviewList: async () => {
    return await axios.get(PAIKBOOKER_DOMAIN + "/auth");
  },

  // 리뷰 추가
  reviewInsert: async (reviewData) => {
    return await axios.post(PAIKBOOKER_DOMAIN + `/auth/add`, reviewData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  // 리뷰 수정
  reviewUpdate: async (reviewData) => {
    return await axios.post(PAIKBOOKER_DOMAIN + `/auth/edit`, reviewData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 리뷰 삭제
  reviewDelete: async (rvNo) => {
    return await axios.delete(PAIKBOOKER_DOMAIN + `/auth/delete/${rvNo}`);
  },

};

export default AxiosApi;
