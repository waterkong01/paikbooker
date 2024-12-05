import HomeItem from "../components/HomeItems";
import GlobalStyle from "../styles/GlobalStyle";
import { useCallback, useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [region, setRegion] = useState("");
  const [brandName, setBrandName] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [stores, setStores] = useState([]); // 검색된 매장들

  // 컴포넌트가 처음 로드될 때, 기본적으로 모든 매장을 가져오는 검색
  useEffect(() => {
    getDataFromServerAndUpdateStoreList(region, brandName, reservationTime);
  }, []); // 빈 배열을 의존성으로 설정하면 컴포넌트가 처음 렌더링될 때만 호출됨

  const getDataFromServerAndUpdateStoreList = useCallback(
    async (region, brandName, reservationTime) => {
      try {
        console.log("검색 조건:", { region, brandName, reservationTime }); // 파라미터 확인
        // API 호출을 통해 조건에 맞는 데이터를 가져옵니다.
        const response = await axios.get(
          "http://localhost:8111/api/stores/search",
          {
            params: {
              region: region,
              brandName: brandName,
              reservationTime: reservationTime,
            },
          }
        );
        console.log(response.config.url);
        setStores(response.data); // 검색된 매장들 상태 업데이트
      } catch (error) {
        console.error("검색 실패:", error);
      }
    },
    []
  );

  return (
    <>
      <div style={{ height: "260px" }}></div>
      <GlobalStyle />

      {/* 디버깅용 상태 출력 */}
      {console.log("현재 stores 상태:", stores)}
      <HomeItem storeData={stores} />
    </>
  );
};

export default Main;
