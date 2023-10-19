import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
// import { useLocation } from "react-router-dom";

const Layout = () => {
  // const { pathname } = useLocation();
  return (
    <>
      <NavBar />
      <Outlet />
      {/* {pathname === "/dashboard" ? (

      ) : (
        <>
          
        </>
      )} */}
    </>
  );
};

export default Layout;
