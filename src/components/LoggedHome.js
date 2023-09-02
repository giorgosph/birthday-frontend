import { useContext } from "react";
import { AuthContext } from "../utils/context";

function LoggedHome() {
  const authContext = useContext(AuthContext)

  return (
    <>
      <p>We are excited to have you here ready to wish for everyones birthday!</p>
      <button onClick={authContext.logout}>Log out</button>
    </>
  );
}

export default LoggedHome;
