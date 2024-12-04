import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// 좌표로 동작하는 지도함수
const { kakao } = window;

const StoreDetailMapGPS = () => {
  const { storeNo, storeMap } = useParams();
  const [store, setStore] = useState(null); // 지점 정보

  const getMarkerImage = (brandName) => {
    switch (brandName) {
      case "빽보이피자":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_01.png?alt=media&token=9fd6776b-f1f3-43f9-a53e-118659aea335";
      case "역전우동":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_02.png?alt=media&token=118e0ae0-7927-4446-bff0-e06189dfde9e";
      case "빽다방":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_03.png?alt=media&token=1713a25a-b06f-4368-a159-403546d148b7";
      case "홍콩반점":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_04.png?alt=media&token=28497125-06e8-48c1-afa8-71194456c274";
      case "롤링파스타":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_05.png?alt=media&token=2e7553ee-2302-4355-8c58-7ee454344bd0";
      case "한신포차":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_06.png?alt=media&token=2a4eb939-131f-4449-8a17-59d004b78800";
      case "백스비어":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_07.png?alt=media&token=0e9aac5d-1a58-4f00-894d-a1886955b03b";
      case "새마을식당":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_08.png?alt=media&token=c69ce962-2d20-43b2-b46c-06eb2fbebaee";
      case "제순식당":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_09.png?alt=media&token=fb47644e-3d0c-4ba2-97a8-9dbebd4b3e1b";
      case "리춘시장":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_10.png?alt=media&token=9cf01424-e020-4303-a2d1-86ad0f90840a";
      case "고투웍":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_11.png?alt=media&token=2c123e53-4be6-4a3a-b1f3-2c33fad02503";
      case "홍콩분식":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_12.png?alt=media&token=e39c9e93-0ca7-468c-81b6-5ad670c702cf";
      case "백종원의쌈밥":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_13.png?alt=media&token=ae61693f-6810-49b8-8067-bf338cd6e455";
      case "본가":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_14.png?alt=media&token=be47ace5-be83-439f-a326-512e530d4017";
      case "인생설렁탕":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_15.png?alt=media&token=b187e8ee-1f92-4ccd-9e86-208a8bf5b0bb";
      case "막이오름":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_16.png?alt=media&token=f3910e03-288c-4a96-a44c-8a49bce7828e";
      case "연돈볼카츠":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_17.png?alt=media&token=19ae41d6-b456-4dc7-97b2-2d446596fadf";
      case "돌배기집":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_18.png?alt=media&token=f7571884-f52f-4a00-af60-abcc85cf62af";
      case "미정국수":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_19.png?alt=media&token=7ef8f026-1ad0-4f86-9f3d-238719689b44";
      case "백철판":
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_20.png?alt=media&token=6303b095-35e2-418e-998e-fa376bc4e845";
      default:
        return "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_00.png?alt=media&token=2836b9c5-9cfd-4823-9bc6-aeb09ce3d3ac";
    }
  };

  // 매장 정보를 받아오는 API 호출
  useEffect(() => {
    axios
      .get(`http://localhost:8111/stores/${storeNo}/mapgps`)
      .then((response) => setStore(response.data))
      .catch((error) =>
        console.error("store map 가져오기에서 오류 발생 : ", error)
      );

    const mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const mapOptions = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.49900095617105, 127.03286623287303), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

    const imageSize = new kakao.maps.Size(50, 50); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(27, 48) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    if (store) {
      const brandImageSrc = getMarkerImage(store.brandName);

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(
          brandImageSrc,
          imageSize,
          imageOption
        ),
        markerPosition = new kakao.maps.LatLng(
          37.49900095617105,
          127.03286623287303
        ); // 마커가 표시될 위치입니다

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
      });

      // 지도에 마커를 표시합니다
      marker.setMap(map);
    }
  }, [store]);

  return (
    <div
      id="map"
      style={{ width: "500px", height: "400px", marginTop: "20px" }}
    ></div>
  );
};

export default StoreDetailMapGPS;
