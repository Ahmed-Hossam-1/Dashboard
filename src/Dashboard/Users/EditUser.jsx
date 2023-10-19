import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navegate = useNavigate();
  const { userID } = useParams();

  const cookie = new Cookies();
  const getTok = cookie.get("Bearer");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user/showbyid/${userID}`, {
        headers: {
          Authorization: "Bearer " + getTok,
        },
      })
      .then((res) => {
        setName(res.data[0].name);
        setEmail(res.data[0].email);
      });
  }, []);

  async function handelSubmit(e) {
    e.preventDefault();
    setAccept(true);

    try {
      // send data
      const res = await axios.post(
        `http://127.0.0.1:8000/api/user/update/${userID}`,
        {
          name,
          email,
          password,
          password_confirmation: confirmPassword,
        },
        {
          headers: {
            Authorization: "Bearer " + getTok,
          },
        }
      );
      navegate("/dashboard/users");
    } catch (error) {
      if (error.response.status === 422) setEmailError(true);
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
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
