import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Cookies from "universal-cookie";
import axios from "axios";

const NavBar = () => {
  const navigate = useNavigate();

  const logoutCookie = new Cookies();
  const token = logoutCookie.get("Bearer");

  async function handelLogout() {
    const res = await axios.post("http://127.0.0.1:8000/api/logout", null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    logoutCookie.remove("Bearer");
    navigate("/");
  }
  return (
    <nav>
      <div className="container">
        <div className="nav-bar">
          <div>
            <Link className="link-bar" to="/">
              Home
            </Link>
            <Link className="link-bar" to="/about">
              About
            </Link>
          </div>

          <div className="btn-bar">
            {token ? (
              <>
                <Link to="/dashboard" className="btn-register">
                  dashboard
                </Link>
                <div onClick={() => handelLogout()} className="btn-register">
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link to="/register" className="btn-register">
                  Register
                </Link>
                <Link to="/login" className="btn-register">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
