import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";

const StoreDetailMenu = () => {
  const { storeNo } = useParams();
  const [menu, setMenu] = useState([]);

  // 메뉴 조회
  useEffect(() => {
    const getMenus = async () => {
      try {
        const response = await AxiosApi.getMenus(storeNo);
        setMenu(response);
      } catch (error) {
        console.error("메뉴 조회 오류 발생 : ", error);
      }
    };
    getMenus();
  }, []);

  return (
    <>
      <h2>메뉴</h2>
      <br />
      {menu.map((item, index) => (
        <div key={index}>
          <p>{item.menu.menuName}</p>
          <img
            src={item.menu.menuImg}
            alt={item.menu.menuName}
            style={{ width: "300px", height: "300px" }}
          />
          <br />
          <br />
        </div>
      ))}
    </>
  );
};

export default StoreDetailMenu;
