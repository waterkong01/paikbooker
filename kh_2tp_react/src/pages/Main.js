import FixHeader from "../styles/FixHeader";
import StoreList from "../components/StoreList";
import HomeItem from "../components/HomeItem";
import GlobalStyle from "../styles/GlobalStyle";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const Main = () => {
  return (
    <>
      <FixHeader />
      <div style={{ height: "260px" }}></div>
      <GlobalStyle />
      <HomeItem />
      {/* <StoreList /> */}
    </>
  );
};

export default Main;
