import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoreDetailMenu = () => {
  const { storeNo } = useParams();
  const [menu, setMenu] = useState([]);

  // 메뉴 조회
  useEffect(() => {
    const getMenus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8111/stores/${storeNo}/menus`
        );
        setMenu(response.data);
      } catch (error) {
        console.error("메뉴 조회 오류 발생 : ", error);
      }
    };
    getMenus();
  }, []);

  // 'menu'가 null일 때 "Loading..." 출력
  if (!menu) return <>Loading...</>;

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
