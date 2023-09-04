import { useContext } from "react";
import { AuthContext } from "../utils/context";

import Home from "../components/Home";
import LoggedHome from "../components/LoggedHome";

function HomeRoute() {
  const authContext = useContext(AuthContext)

  return (
    <>
      <h1 style={styles.header}>Welcome to the Birthday Celebrating Web App</h1>
      {authContext.isAuthenticated ? (
        <LoggedHome />
      ) : (
        <Home />
      )}
    </>
  );
}

const styles = {
  header: {
    margin: 0,
  }
}

export default HomeRoute;
