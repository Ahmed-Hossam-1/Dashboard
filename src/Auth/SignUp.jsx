import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../Context/UserProvider";
import Cookies from "universal-cookie";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { setAuth } = useContext(User);
  const navegate = useNavigate();

  // cookie
  const cookie = new Cookies();

  async function handelSubmit(e) {
    e.preventDefault();
    setAccept(true);

    try {
      // send data
      const res = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      const token = res.data.data.token;
      const userDetails = res.data.data.user;
      cookie.set("Bearer", token);

      setAuth({ token, userDetails });
      navegate("/dashboard");
    } catch (error) {
      if (error.response.status === 422) {
        setEmailError(true);
      }
      setAccept(true);
    }
  }
  return (
    <div className="form-contianer">
      <div className="register">
        <form onSubmit={handelSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            required
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {accept && emailError === 422 && (
            <p className="error">Email is Already been Taken</p>
          )}
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
          <label htmlFor="name">Confirm Password:</label>
          <input
            required
            type="password"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword !== password && accept && (
            <p className="error">Password does not Match</p>
          )}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
