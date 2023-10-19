import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavDashBoard from "./NavDashBoard";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <>
      <NavDashBoard />
      <main className="main-site">
        <SideBar />
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
