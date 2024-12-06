import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {

    // 전체 매장 조회
    const getStoreList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8111/stores`
        );
        setStores(response.data)
      } catch (error) {
        console.error("전체 매장 조회 오류 발생 : ", error);
      }
    };
    getStoreList();
  }, []);

  return (
    <>
      <h1>Store List</h1>
      <ul>
        {stores.map((store) => (
          <li key={store.storeNo}>
            <Link to={`/stores/${store.storeNo}`}>
              {store.storeName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StoreList;
