import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import DescriptionDesafio from "../../components/DescriptionDesafio";
import { Link } from "react-router-dom";
import { Buttom } from "../../components/Buttom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      <main>
        <DescriptionDesafio />
        <Link to={"before"}>
          <Buttom text="Começar" />
        </Link>
      </main>
    </>
  );
};

export default Home;
