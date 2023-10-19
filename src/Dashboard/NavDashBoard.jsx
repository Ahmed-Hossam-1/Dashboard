import { Link } from "react-router-dom";

const NavDashBoard = () => {
  return (
    <nav>
      <div className="d-flex container">
        <h1>Store</h1>
        <Link to="/" className="btn-register">
          Go To Website
        </Link>
      </div>
    </nav>
  );
};

export default NavDashBoard;
