import HomeItem from "../components/HomeItems";
import GlobalStyle from "../styles/GlobalStyle";
import { useCallback, useState } from "react";
import StoreSearch from "./search/StoreSearch";
import axios from "axios";

const Main = () => {
  const [region, setRegion] = useState("all"); // setRegion을 호출해서 region 상태 변경
  const [brandName, setBrandName] = useState("all");
  const [reservationTime, setReservationTime] = useState("all");
  const [stores, setStores] = useState([]); // 검색된 매장들
  const onSelect = useCallback((category, value) => {
    if (category === "region") {
      setRegion(value);
    } else if (category === "brandName") {
      setBrandName(value);
    } else if (category === "revationTime") {
      setReservationTime(value);
    }
  }, []);
  const onSearch = useCallback(async (region, brandName, reservationTime) => {
    try {
      console.log("검색 조건:", { region, brandName, reservationTime }); // 파라미터 확인
      // API 호출을 통해 조건에 맞는 데이터를 가져옵니다.
      const response = await axios.get(
        "http://localhost:8111/api/stores/search",
        {
          params: {
            region: region || "",
            brandName: brandName || "",
            reservationTime: reservationTime || "",
          },
        }
      );
      console.log(response.config.url);
      setStores(response.data); // 검색된 매장들 상태 업데이트
    } catch (error) {
      console.error("검색 실패:", error);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* 하나의 onSelect 전달 */}
      <StoreSearch
        category={{ region, brandName, reservationTime }}
        onSelect={onSelect}
        onSearch={onSearch}
      />
      {/* 디버깅용 상태 출력 */}
      {console.log("현재 stores 상태:", stores)}
      <HomeItem storeData={stores} />

      {/* <StoreList /> */}
    </>
  );
};

export default Main;
