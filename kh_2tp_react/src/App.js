import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoreList from "./pages/stores/StoreList";
import StoreDetail from "./pages/stores/StoreDetail";

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
    </>
  );
}

export default App;
