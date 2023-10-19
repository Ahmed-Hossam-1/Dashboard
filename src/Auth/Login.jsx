import { useContext, useState } from "react";
import axios from "axios";
import { User } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { setAuth } = useContext(User);
  const navigate = useNavigate();

  // cookie
  const cookie = new Cookies();

  async function handelSubmit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      // send data
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      const token = res.data.data.token;
      cookie.set("Bearer", token);
      const userDetails = res.data.data.user;
      setAuth({ userDetails });
      navigate("/dashboard");
    } catch (error) {
      if (error.response.status === 422 || error.response.status === 401) {
        setEmailError(true);
      }
      setAccept(true);
    }
  }
  return (
    <div className="form-contianer">
      <div className="register">
        <form onSubmit={handelSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {accept && emailError && <p className="error">Email is not exist</p>}
          <label htmlFor="password">Password:</label>
          <input
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="error">Password Must be More Than 8 Char</p>
          )}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
