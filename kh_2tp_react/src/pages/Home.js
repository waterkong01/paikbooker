import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const HomeItemBlock = styled.div`
  .container {
    display: flex;
    flex-direction: column-reverse; /* 순서를 반대로 */
  }

  .brandWrapper {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .brand {
    width: 383px;
    height: 266px;
    margin-top: 50px;
    margin-left: 120px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #f1f1f1;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .brandLogo {
    width: 150px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  .stores {
    box-sizing: border-box;
    display: flex;
    gap: 50px;
  }

  .storeBox {
    width: 383px;
    height: 276px;
    margin-top: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .storeBoxUp {
    width: 100%;
    height: 215px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f1f1f1;
    border-radius: 30px;
  }

  .storeBoxDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-size: 14px;
  }

  .boxDTextUp {
    padding-top: 10px;
    font-size: 16px;
  }

  .boxDTextDown {
    font-size: 16px;
  }
`;

const Home = () => {

    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8111/api/stores/home"
        );
        setBrands(response.data);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HomeItemBlock>
        <div className="container">
          {brands.map(({ brand, stores }) => (
            <div key={brand.storeNo} className="brandWrapper">
              {/* 브랜드 로고 */}
              <div className="brand">
                <div
                  className="brandLogo"
                  style={{
                    backgroundImage: `url(${brand.brandLogo})`,
                  }}
                ></div>
              </div>

              {/* 매장 목록 */}
              <div className="stores">
                {stores.map((store) => (
                  <div key={store.storeNo} className="storeBoxDown">
                    <div className="storeBox">
                      <div
                        className="storeBoxUp"
                        style={{ backgroundImage: `url(${store.storeImg})` }}
                      ></div>
                      <div className="storeBoxDown">
                        <div className="boxDTextUp">{store.storeName}</div>
                        <div className="boxDTextDown">{store.storeAddr}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </HomeItemBlock>
    </>
  );
};

export default Home;
