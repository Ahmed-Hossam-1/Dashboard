import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { User } from "../Context/UserProvider";
import axios from "axios";
import Loading from "../components/Loading";
import Cookies from "universal-cookie";

const Persist = () => {
  const { auth, setAuth } = useContext(User);
  const token2 = auth.token;
  const [loading, setLoading] = useState(true);

  // cookie
  const cookie = new Cookies();
  const getTok = cookie.get("Bearer");

  useEffect(() => {
    async function refresh() {
      try {
        await axios
          .post(`http://127.0.0.1:8000/api/refresh`, null, {
            headers: {
              Authorization: "Bearer " + getTok,
              Accept: "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            const nextToken = res.data.token;
            cookie.set("Bearer", nextToken);
            setAuth({ token: nextToken, userDetails: res.data.user });
          });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    !token2 ? refresh() : setLoading(false);
  }, []);

  return loading ? <Loading /> : <Outlet />;
};

export default Persist;
