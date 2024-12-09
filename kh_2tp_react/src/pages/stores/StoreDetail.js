import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StoreDetailReservation from "./StoreDetailReservation";
import StoreDetailMap from "./StoreDetailMap";
import StoreDetailMenu from "./StoreDetailMenu";
import AxiosApi from "../../api/AxiosApi";

const StoreDetail = () => {
  const { storeNo } = useParams();
  const [store, setStore] = useState(null);

  // 특정 매장 조회
  useEffect(() => {
    const getEachStore = async () => {
      try {
        const response = await AxiosApi.getEachStore(storeNo);
        setStore(response);
      } catch (error) {
        console.error("특정 매장 조회 오류 : ", error);
      }
    };
    getEachStore();
  }, [storeNo]);

  return (
    <>
      <h1>{store.storeName}</h1>
      <p>브랜드명 : {store.brandName}</p>
      <p>
        영업 시간 : {`${store.brandOpen}:00`} ~ {`${store.brandClose}:00`}
      </p>
      <p>주소 : {store.storeAddr}</p>
      <p>연락처 : {store.storePhone}</p>
      <br />
      <br />
      <>
        <StoreDetailReservation />
        <br />
        <br />
      </>
      <>
        <StoreDetailMap />
        <br />
        <br />
      </>
      <>
        <StoreDetailMenu />
        <br />
        <br />
      </>
    </>
  );
};

export default StoreDetail;
