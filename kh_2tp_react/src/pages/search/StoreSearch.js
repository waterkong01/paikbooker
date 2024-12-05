import axios from "axios";
import { useEffect, useState } from "react";

const StoreSearch = ({ getDataFromServerAndUpdateStoreList }) => {
  const [categories, setCategories] = useState({
    region: [],
    brandName: [],
    reservationTime: [],
  });

  const [regionValue, setRegionValue] = useState("");
  const [brandNameValue, setBrandNameValue] = useState("");
  const [reservationTimeValue, setReservationTimeValue] = useState("");

  // 컴포넌트가 처음 레더링될 때 카테고리 목록을 가져옵니다.
  useEffect(() => {
    const fetchCategories = async () => {
      // 예외 발생시 그에 대한 대응 요구를 위해
      try {
        const rsp = await axios.get(
          "http://localhost:8111/stores/categories" // region: [],brandName: [], reservationTime: [] 데이터 받음
        );
        console.log("카테고리목록 응답:", rsp.data);
        setCategories(rsp.data);
      } catch (error) {
        console.error("카테고리 목록 가져오기 실패: ", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchButtonClick = () => {
    // 검색 버튼 클릭 시 onSearchButtonClick의 하위 동작 중 하나
    getDataFromServerAndUpdateStoreList(
      regionValue,
      brandNameValue,
      reservationTimeValue
    );
  };

  // // async는 비동기 함수를 정의할 때 사용하는 JavaScript 키워드입니다. async와 await는 비동기 작업을 동기처럼 작성할 수 있도록 도와줍니다.
  // // 이 코드에서 사용된 async는 비동기적으로 데이터를 가져오는 API 요청을 처리하기 위해 사용됩니다.
  // // 즉, 비동기 작업을 처리하는 함수에서 await와 함께 사용되어, 비동기 작업을 직관적이고 동기적인 방식처럼 처리할 수 있게 해줍니다.
  // const handleSearch = async () => {
  //   try {
  //     // 내부 비동기 await, 요청이 완료될 때까지 기다린 후, 그 데이터를 response에 저장
  //     const rsp = await axios.get("http://localhost:8111/api/stores/search", {
  //       params: {
  //         region,
  //         brandName,
  //         reservationTime,
  //       },
  //     });
  //     setStores(rsp.data); // 검색 결과를 상태에 저장
  //   } catch (error) {
  //     console.error("검색 실패", error);
  //   }
  // };

  return (
    <div>
      {/* 카테고리 선택 UI */}
      <div>
        <select
          value={regionValue}
          onChange={(e) => {
            setRegionValue(e.target.value);
          }}
        >
          <option value="">지역 선택</option>
          {categories.region.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={brandNameValue}
          onChange={(e) => {
            setBrandNameValue(e.target.value);
          }}
        >
          <option value="">브랜드 선택</option>
          {categories.brandName.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={reservationTimeValue}
          onChange={(e) => {
            setReservationTimeValue(e.target.value);
          }}
        >
          <option value="">예약 시간 선택</option>
          {categories.reservationTime.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button onClick={handleSearchButtonClick}>검색</button>
      </div>
    </div>
  );
};

export default StoreSearch;
