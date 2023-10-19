import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const RequireAuth = () => {
  const location = useLocation();
  // cookie
  const cookie = new Cookies();
  const getTok = cookie.get("Bearer");

  return getTok ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} replace to="/login" />
  );
};

export default RequireAuth;
