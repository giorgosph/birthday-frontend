import { useContext } from "react";
import { AuthContext } from "../utils/context";

import Home from "../components/Home";
import LoggedHome from "../components/LoggedHome";

function HomeRoute() {
  const authContext = useContext(AuthContext)

  return (
    <>
      <h1>Welcome to the Birthday Celebrating Web App</h1>
      {authContext.isAuthenticated ? (
        <LoggedHome />
      ) : (
        <Home />
      )}
    </>
  );
}

export default HomeRoute;
