import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navegate = useNavigate();
  // cookie
  const cookie = new Cookies();
  const getTok = cookie.get("Bearer");

  async function handelSubmit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      // send data
      const res = await axios.post(
        "http://127.0.0.1:8000/api/user/create",
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
    <div style={{ width: "100%", padding: "30px 0px 0px 50px" }}>
      <h1>Create User</h1>
      <Form style={{ width: "100%" }} onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter User Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        {accept && emailError === 422 && (
          <p className="error">Email is Already been Taken</p>
        )}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        {password.length < 8 && accept && (
          <p className="error">Password Must be More Than 8 Char</p>
        )}
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="Enter Confirm Password"
          />
        </Form.Group>
        {confirmPassword !== password && accept && (
          <p className="error">Password does not Match</p>
        )}
        <Button variant="primary" type="submit">
          create
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
