import { createContext, useState, useMemo } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: (token) => {},
});

function AuthContextProvider({ children }) {
  const [token, setToken] = useState("");

  function authenticate(token) {
    console.log("Authenticating and setting token");
    setToken(token);
  }

  function logout() {
    setToken(null);
  }

  const value = useMemo(() => {
    return {
      token: token,
      isAuthenticated: !!token,
      authenticate: authenticate,
      logout: logout,
    };
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;