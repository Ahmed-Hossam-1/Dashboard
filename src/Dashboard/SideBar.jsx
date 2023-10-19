import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <Link to="users" className="item-link">
        Users
      </Link>
      <Link to="addUser" className="item-link">
        Add User
      </Link>
      <Link to="product" className="item-link">
        Product
      </Link>
      <Link to="addProduct" className="item-link">
        Add Product
      </Link>
    </div>
  );
};

export default SideBar;
