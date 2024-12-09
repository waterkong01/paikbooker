/* eslint-disable react/jsx-pascal-case */
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";

const Background = styled.div`
  width: 100%;
  height: 90px;
  top: 170px;
  left: 0;
  box-sizing: border-box;
  border: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1000;
  background-color: #fff;
`;

const BrandContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12.5px;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
`;

const ArrowButton = styled.button`
  position: fixed;
  top: calc(170px + 45px); /* Background의 높이와 절반 계산 */
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 10px;

  &.left-arrow {
    left: 10px;
  }

  &.right-arrow {
    right: 10px;
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
  const [brandLogos, setBrandLogos] = useState([]);
  const containerRef = useRef(null);

  // 브랜드 로고 가져오기
  useEffect(() => {
    const getBrandLogos = async () => {
      try {
        const response = await AxiosApi.getBrandLogos();
        setBrandLogos(response);
      } catch (error) {
        console.error("Error fetching brandLogos:", error);
      }
    };
    getBrandLogos();
  }, []);

  // 화살표 한번 클릭시 이동량
  const scrollAmount = 300;

  // 왼쪽 화살표 클릭
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
      });
    }
  };

  // 오른쪽 화살표 클릭
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
      });
    }
  };

  return (
    <>
      <Background>
        <ArrowButton className="left-arrow" onClick={scrollLeft}>
          ←
        </ArrowButton>
        <BrandContainer ref={containerRef}>
          {brandLogos.map((brandLogo, index) => (
            <EachBrand key={index}>
              <EachImage>
                <img src={brandLogo.brandLogo1} alt={`${brandLogo.brandName}`} />
              </EachImage>
              <EachText>{brandLogo.brandName}</EachText>
            </EachBrand>
          ))}
        </BrandContainer>
        <ArrowButton className="right-arrow" onClick={scrollRight}>
          →
        </ArrowButton>
      </Background>
    </>
  );
};

export default NavBar3;
