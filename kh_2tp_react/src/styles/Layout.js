import { Outlet } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import NavBar1 from "../components/NavBar1";
import NavBar2 from "../components/NavBar2";
import NavBar3 from "../components/NavBar3";

const StyledHeader = styled.header`
  width: 100%;
  height: 260px;
`;

const StyledMain = styled.main`
  height: calc(100vh - 260px);
`;

const Layout = () => {

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
      <StyledHeader>
        <NavBar1 />
        <NavBar2
          getDataFromServerAndUpdateStoreList={
            getDataFromServerAndUpdateStoreList
          }
        />
        <NavBar3 />
      </StyledHeader>

      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Layout;
