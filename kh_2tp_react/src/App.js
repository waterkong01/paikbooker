import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreList from "./pages/stores/StoreList";
import StoreDetail from "./pages/stores/StoreDetail";
import Layout from "./styles/Layout";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/stores" element={<StoreList />} />
            <Route path="/stores/:storeNo" element={<StoreDetail />} />
          </Route>
        </Routes>
      </Router>
      {/* <Main /> */}
    </>
  );
}

export default App;
