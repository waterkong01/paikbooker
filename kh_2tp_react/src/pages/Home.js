import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <li>
        <Link to="/stores">Stores</Link>
      </li>
    </>
  );
};

export default Home;
