import { createContext } from "react";

export const AuthContext = createContext({
  loggedinUser : null,
  resume: null,
  login: () => {},
  logoff: () => {},
});
