/* eslint-disable react/jsx-pascal-case */
import styled from "styled-components";
import { useRef } from "react";

const Background = styled.div`
  width: 100%;
  height: 90px;
  top: 170px;
  left: 0;
  box-sizing: border-box;
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: left;
  align-items: center;
  position: fixed;
  z-index: 1000; /* 다른 요소들 위에 표시되도록 설정 */
  background-color: #fff; /* 배경 색 */
`;

const BrandContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: left;
  object-fit: cover;
  gap: 12.5px; /* 이미지 간의 간격 */
  overflow: hidden;
  position: relative;

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    z-index: 10;
    padding: 10px;
  }

  .left-arrow {
    left: 0;
  }

  .right-arrow {
    right: 0;
  }

`;

const EachBrand = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
`;

const EachImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  img {
    height: 100%;
  }
`;

const EachText = styled.div`
  width: 65px;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  color: #6c6c6c;
`;

const NavBar3 = () => {
  // BrandContainer에 접근할 ref 생성
  const containerRef = useRef(null);

  // 스크롤 이동 거리
  const scrollAmount = 100;

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const brands = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F01빽보이피자01.png?alt=media&token=73658b91-8b0f-4c8f-82e7-3acc11ef09ec",
      name: "빽보이피자",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F02역전우동01.png?alt=media&token=0c235c92-8e33-4e42-93ff-f0cf05867bd0",
      name: "역전우동",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F03빽다방01.png?alt=media&token=e3682b85-0916-49d5-8366-1a0563673eb1",
      name: "빽다방",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F04홍콩반점01.png?alt=media&token=21bfafba-f254-4f97-bfe4-cf29481cc210",
      name: "홍콩반점",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F05롤링파스타01.png?alt=media&token=9ce4e527-f189-4a25-8e84-dca500aac097",
      name: "롤링파스타",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F06한신포차01.png?alt=media&token=f1811a7a-92b8-4b06-aaab-b91320f6b156",
      name: "한신포차",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F07백스비어01.png?alt=media&token=fa3f5d61-6a25-417a-98b0-fefb4acdf981",
      name: "백스비어",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F08새마을식당01.png?alt=media&token=eddf31f9-0ed7-48f9-9468-97b71e920530",
      name: "새마을식당",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F09제순식당01.png?alt=media&token=60c400f6-ce3c-40f2-bc87-99fff289b1f0",
      name: "제순식당",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F10리춘시장01.png?alt=media&token=c852b849-de8e-4f72-ad97-31b510bdc99f",
      name: "리춘시장",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F11고투웍01.png?alt=media&token=ccef839c-ae1d-4d8f-88e5-f2ab63ee9f67",
      name: "고투웍",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F12홍콩분식01.png?alt=media&token=dd48f407-6319-430b-97ef-81c226f02ce5",
      name: "홍콩분식",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F13쌈밥01.png?alt=media&token=34e41297-8b89-4e59-817f-59a1260a3eaa",
      name: "쌈밥",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F14본가01.png?alt=media&token=a88b02d1-6e75-4e10-adc2-74d056d6c83b",
      name: "본가",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F15인생설렁탕01.png?alt=media&token=a5ab642d-c6cf-48df-9c4b-4220fc3a81cb",
      name: "인생설렁탕",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F16막이오름01.png?alt=media&token=dd7007af-8b39-4292-a1cd-3fdd7f0d7bf7",
      name: "막이오름",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F17연돈볼카츠01.png?alt=media&token=0c942129-57ba-4d59-84f0-59ee82e11b3e",
      name: "연돈볼카츠",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F18돌배기집01.png?alt=media&token=66a0822c-e593-4c1d-bfeb-44f34f76f3a2",
      name: "돌배기집",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F19미정국수01.png?alt=media&token=9cf1be65-71df-42e4-995f-c16fd81e4d5e",
      name: "미정국수",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F20백철판01.png?alt=media&token=67e1a85e-e2f0-4aaa-8efa-bd6f28ec7144",
      name: "백철판",
    },
  ];

  const ShowBrands = () => (
    <BrandContainer>
      <button className="arrow left-arrow" onClick={scrollLeft}>
        ←
      </button>
      {brands.map((brand, index) => (
        <EachBrand key={index}>
          <EachImage>
            <img src={brand.src} alt={`${brand.name}`} />
          </EachImage>
          <EachText>{brand.name}</EachText>
        </EachBrand>
      ))}
      <button className="arrow right-arrow" onClick={scrollRight}>
        →
      </button>
    </BrandContainer>
  );

  return (
    <>
      <Background>
        <ShowBrands />
      </Background>
    </>
  );
};

export default NavBar3;
