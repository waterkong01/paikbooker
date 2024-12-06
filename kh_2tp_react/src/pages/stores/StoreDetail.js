import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StoreDetailReservation from "./StoreDetailReservation";
import StoreDetailMap from "./StoreDetailMap";
import StoreDetailMenu from "./StoreDetailMenu";

const StoreDetail = () => {
  const { storeNo } = useParams();
  const [store, setStore] = useState(null);

  // 특정 매장 조회
  useEffect(() => {
    const getEachStore = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8111/stores/${storeNo}`
        );
        setStore(response.data);
      } catch (error) {
        console.error("특정 매장 조회 오류 발생 : ", error);
      }
    };
    getEachStore();
  }, [storeNo]);

  // 'store'가 null일 때 "Loading..." 출력
  if (!store) return <>Store Loading...</>;

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
