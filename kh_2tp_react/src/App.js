import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoreList from "./pages/stores/StoreList";
import StoreDetail from "./pages/stores/StoreDetail";
import Main from "./pages/Main";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<StoreList />} />
            <Route path="/stores/:storeNo" element={<StoreDetail />} />
          </Routes>
        </Router>
        <Main />
    </>
  );
}

export default App;
