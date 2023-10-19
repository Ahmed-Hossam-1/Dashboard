import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Layout from "./components/Layout";
import Login from "./Auth/Login";
import About from "./components/About";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./components/Home";
import Users from "./Dashboard/Users/Users";
import "./App.css";
import EditUser from "./Dashboard/Users/EditUser";
import AddUser from "./Dashboard/Users/AddUser";
import RequireAuth from "./Auth/RequireAuth";
import Persist from "./Auth/Persist";
import Products from "./Dashboard/Products/Products";
import NewProduct from "./Dashboard/Products/NewProduct";
import UpdateProduct from "./Dashboard/Products/UpdateProduct";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route element={<Persist />}>
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="users" element={<Outlet />}>
                <Route index element={<Users />} />
                <Route path=":userID" element={<EditUser />} />
              </Route>
              <Route path="addUser" element={<AddUser />} />
              <Route path="product" element={<Outlet />}>
                <Route index element={<Products />} />
                <Route path=":productId" element={<UpdateProduct />} />
              </Route>
              <Route path="addProduct" element={<NewProduct />} />
            </Route>
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
