
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Search from "../../components/Search";

const Before = () => {
  return (
    <>
      <Header />
      <Outlet />

      <main>
        <Search/>
        
      </main>
    </>
  );
};

export default Before;
