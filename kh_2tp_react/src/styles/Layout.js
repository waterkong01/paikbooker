import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar1 from "../components/NavBar1";
import NavBar2 from "../components/NavBar2";
import NavBar3 from "../components/NavBar3";

const StyledHeader = styled.header`
  width: 100%;
  height: 260px;
`;

const StyledMain = styled.main`
  height: calc(100vh - 260px);
`;

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <NavBar1 />
        <NavBar2 />
        <NavBar3 />
      </StyledHeader>

      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Layout;
