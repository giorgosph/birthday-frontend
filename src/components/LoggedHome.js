import { useContext } from "react";
import { AuthContext } from "../utils/context";
import useLoggedHome from "../hooks/useLoggedHome";

function LoggedHome() {
  const authContext = useContext(AuthContext);
  const today = new Date();
  const month = today.getMonth() + 1; 
  const day = today.getDate(); 

  const { response, sendWish } = useLoggedHome();
  const { data } = response;

  return (
    <>
      <p>We are excited to have you here ready to wish for everyones birthday!</p>
      <h3>DATE: {day}/{month}</h3>
      {data.success && (
        data.birthDates.map((item) => {
          return (
            <>
              <h4>{item.username} has birthday</h4>
              <button onClick={() => sendWish(item.name)}>Send Happy Birthday!</button>
            </>
          )
        })
      )}
      <button onClick={authContext.logout}>Log out</button>
    </>
  );
}

export default LoggedHome;
