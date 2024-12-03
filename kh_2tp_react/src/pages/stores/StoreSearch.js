import axios from "axios";
import { useEffect, useState } from "react";

const StoreSearch = () => {
  const [region, setRegion] = useState("");
  const [brandName, setBrandName] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [stores, setStores] = useState([]); // 검색된 매장들
  const [categories, setCategories] = useState({
    region: [],
    brandName: [],
    reservationTime: [],
  });

  // 컴포넌트가 처음 레더링될 때 카테고리 목록을 가져옵니다.
  useEffect(() => {
    const fetchCategories = async () => {
      // 예외 발생시 그에 대한 대응 요구를 위해
      try {
        const rsp = await axios.get(
          "http://localhost:8111/api/stores/categories"
        );
        console.log("카테골 ㅣ목록 응답:", rsp.data);
        setCategories(rsp.data);
      } catch (error) {
        console.error("카테고리 목록 가져오기 실패: ", error);
      }
    };

    fetchCategories();
  }, []);

  // async는 비동기 함수를 정의할 때 사용하는 JavaScript 키워드입니다. async와 await는 비동기 작업을 동기처럼 작성할 수 있도록 도와줍니다.
  // 이 코드에서 사용된 async는 비동기적으로 데이터를 가져오는 API 요청을 처리하기 위해 사용됩니다.
  // 즉, 비동기 작업을 처리하는 함수에서 await와 함께 사용되어, 비동기 작업을 직관적이고 동기적인 방식처럼 처리할 수 있게 해줍니다.
  const handleSearch = async () => {
    try {
      // 내부 비동기 await, 요청이 완료될 때까지 기다린 후, 그 데이터를 response에 저장
      const rsp = await axios.get("http://localhost:8111/api/stores/search", {
        params: {
          region,
          brandName,
          reservationTime,
        },
      });
      setStores(rsp.data); // 검색 결과를 상태에 저장
    } catch (error) {
      console.error("검색 실패", error);
    }
  };

  return (
    <div>
      {/* 카테고리 선택 UI */}
      <div>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">지역 선택</option>
          {categories.region.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        >
          <option value="">브랜드 선택</option>
          {categories.brandName.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
        >
          <option value="">예약 시간 선택</option>
          {categories.reservationTime.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button onClick={handleSearch}>검색</button>
      </div>
      {/* 검색 결과 표시 */}
      <div>
        {stores.length > 0 ? (
          stores.map((store) => (
            <div key={store.storeNo}>
              <h3>{store.brandName}</h3>
              <p>{store.storeAddr}</p>
              <p>{store.storeHour}</p>
              <p>{store.storePhone}</p>
              <img src={store.storeMap} alt="" />
            </div>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default StoreSearch;
