import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [run, setRun] = useState(0);

  const cookie = new Cookies();
  const getTok = cookie.get("Bearer");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/show", {
        headers: {
          Authorization: "Bearer " + getTok,
        },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [run]);

  async function deleteUser(userId) {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/user/delete/${userId}`,
        {
          headers: {
            Authorization: "Bearer " + getTok,
          },
        }
      );
      if (res.status === 200) {
        setRun((prev) => prev + 1);
      }
    } catch {
      console.log("none");
    }
  }

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h1>Users</h1>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`${user.id}`}>
                  <Button variant="success">Update</Button>
                </Link>
                <Button onClick={() => deleteUser(user.id)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
