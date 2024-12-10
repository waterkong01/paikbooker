import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreList from "./pages/stores/StoreList";
import StoreDetail from "./pages/stores/StoreDetail";
import Layout from "./styles/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import StoreSearch from "./pages/stores/StoreSearch";
import Reservation from "./pages/mypage/Reservation";
import AddReview from "./pages/mypage/AddReview";
import ReviewList from "./pages/mypage/ReviewList";
import EditReview from "./pages/mypage/EditReview";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/stores" element={<StoreList />} />
            <Route path="/stores/:storeNo" element={<StoreDetail />} />
            <Route path="/stores/categories" element={<StoreSearch />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route
              path="/AddReview?userId=:reservation.userId&storeName=:reservation.storeName&rTime=:reservation.rtime"
              element={<AddReview />}
            />
            <Route path="/auth" element={<ReviewList />} />
            <Route path="/auth/edit" element={<EditReview />} />
          </Route>
        </Routes>
      </Router>
      {/* <Main /> */}
    </>
  );
}

export default App;
