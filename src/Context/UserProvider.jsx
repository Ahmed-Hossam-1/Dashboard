import { createContext, useState } from "react";
import Cookies from "universal-cookie";

export const User = createContext({});
// cookie
const cookie = new Cookies();
const getTok = cookie.get("Bearer");

export default function UserProvider({ children }) {
  const [auth, setAuth] = useState({ token: getTok ? getTok : null });
  return <User.Provider value={{ auth, setAuth }}>{children}</User.Provider>;
}
