import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StoreDetailMap from "./StoreDetailMap";
import StoreDetailMapTest from "./StoreDetailMapTest";

const StoreDetail = () => {

  const { storeNo } = useParams();
  const [store, setStore] = useState(null);
  const [reservedTimes, setReservedTimes] = useState([]); // 예약된 시간 목록
  const [selectedTime, setSelectedTime] = useState(null); // 선택 시간
  const [reservationStatus, setReservationStatus] = useState(""); // 예약 상태 메시지
  const [selectedPersonCnt, setSelectedPersonCnt] = useState(null); // 선택된 인원 수 상태


  // 특정 매장 조회
  useEffect(() => {
    axios
      .get(`http://localhost:8111/stores/${storeNo}`)
      .then((response) => setStore(response.data))
      .catch((error) =>
        console.error("store 정보 가져오기에서 오류 발생 : ", error)
      );
  }, [storeNo]);

  // 예약 불가능 시간 조회
  useEffect(() => {
    const selectedDate = "2024-01-01"; // 고정된 날짜
    axios
      .get(`http://localhost:8111/stores/${storeNo}/reserved-times`, {
        params: { date: selectedDate },
      })
      .then((response) => setReservedTimes(response.data))
      .catch((error) =>
        console.error("예약된 시간 목록 가져오기에서 오류 발생 : ", error)
      );
  }, [storeNo]);

  // 'store'가 null일 때 "Loading..." 출력
  if (!store) return <>Loading...</>;

  // brandOpen과 brandClose를 시간 단위로 변환하여 배열로 반환
  const getAvailableTimes = () => {
    if (!store) return [];

    // 자정 넘어서까지 영업하는 매장 처리
    const brandOpenDate = new Date(store.brandOpen);
    const brandCloseDate = new Date(store.brandClose);

    const times = [];
    let start = brandOpenDate;

    // brandClose가 brandOpen 다음날이면, 시간을 24시간 순으로 추가
    while (start <= brandCloseDate) {
      const hours = String(start.getHours()).padStart(2, "0");
      const minutes = String(start.getMinutes()).padStart(2, "0");
      times.push(`${hours}:${minutes}`);
      start.setMinutes(start.getMinutes() + 60); // 1시간 단위로 시간 증가
    }
    return times;
  };

  const availableTimesList = getAvailableTimes();

  // 현재 시간 가져오기 (초 단위는 0으로 설정)
  const currentTime = new Date();
  currentTime.setSeconds(0, 0);

  // 두 배열을 합치고, 현재 시간 이후의 예약 시간만 필터링
  const allTimes = availableTimesList
    .map((time) => {
      const timeParts = time.split(":");
      const reservationTime = new Date();
      reservationTime.setHours(timeParts[0], timeParts[1], 0, 0); // 예약 시간을 설정
      return {
        time,
        status: reservedTimes.includes(time) ? "reserved" : "available",
        reservationTime, // 예약 시간을 추가
      };
    })
    .filter((timeObj) => timeObj.reservationTime > currentTime); // 현재 시간 이후의 예약 시간만 남김

  // 예약 시간 클릭시 선택 시간 저장
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // 인원 수 클릭시 personCnt 입력
  const handlePersonCntClick = (count) => {
    setSelectedPersonCnt(count);
  };

  // 예약
  const handleReservation = () => {
    if (!selectedTime || !selectedPersonCnt) {
      setReservationStatus("예약시간과 인원수를 모두 선택해주세요.");
      return;
    }

    // 새로운 예약 생성
    // 예약 정보 보내기
    const reservationData = {
      userId: "로그인 아이디", // 로그인 정보에서 가져와야 함
      userName: "로그인 이름", // 로그인 정보에서 가져와야 함
      storeNo,
      storeName: store.storeName,
      storePhone: store.storePhone,
      brandName: store.brandName,
      rTime: selectedTime,
      personCnt: selectedPersonCnt,
    };

    axios
      .post(
        `http://localhost:8111/stores/${storeNo}/reservations`,
        reservationData
      )
      .then((response) => {
        setReservationStatus("예약 완료");
      })
      .catch((error) => {
        console.error("예약 실패 : ", error);
        setReservationStatus("예약에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <>
      <h1>{store.storeName}</h1>
      <p>브랜드명 : {store.brandName}</p>
      <p>
        영업 시간 : {new Date(store.brandOpen).toLocaleTimeString()} ~{" "}
        {new Date(store.brandClose).toLocaleTimeString()}
      </p>
      <p>주소 : {store.storeAddr}</p>
      <p>연락처 : {store.storePhone}</p>
      <br />
      <br />
      {availableTimesList.length > 0 && (
        <>
          <h2>예약 가능 시간</h2>
          {allTimes.map((timeObj, index) => (
            <button
              key={index}
              style={{
                margin: "5px",
                backgroundColor:
                  timeObj.status === "reserved"
                    ? "lightgray"
                    : timeObj.status === "available" &&
                      selectedTime === timeObj.time
                    ? "blue"
                    : "gray",
                color:
                  timeObj.status === "reserved"
                    ? "white"
                    : timeObj.status === "available" &&
                      selectedTime === timeObj.time
                    ? "white"
                    : "black",
                cursor:
                  timeObj.status === "reserved" ? "not-allowed" : "pointer",
              }}
              onClick={() =>
                timeObj.status === "available" && handleTimeClick(timeObj.time)
              }
              disabled={timeObj.status === "reserved"} // 예약된 시간은 disabled 처리
            >
              {timeObj.time}
            </button>
          ))}
        </>
      )}
      <h3>인원 수 선택</h3>
      {[...Array(15)].map((_, index) => (
        <button
          key={index + 1}
          style={{
            margin: "5px",
            backgroundColor: selectedPersonCnt === index + 1 ? "blue" : "gray",
            color: selectedPersonCnt === index + 1 ? "white" : "black",
          }}
          onClick={() => handlePersonCntClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {reservationStatus && <p>{reservationStatus}</p>}
      <button onClick={handleReservation}>예약하기</button>
      <>
        {/* <StoreDetailMap /> */}
        <StoreDetailMapTest />
      </>
    </>
  );
};

export default StoreDetail;
