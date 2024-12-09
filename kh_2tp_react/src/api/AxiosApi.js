import axios from "axios";
import { useParams } from "react-router-dom";
const PAIKBOOKER_DOMAIN = "http://localhost:8111";

const AxiosApi = {
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




};

export default AxiosApi;
