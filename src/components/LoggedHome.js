import { useContext } from "react";
import { AuthContext } from "../utils/context";
import useLoggedHome from "../hooks/useLoggedHome";
import { SECONDARY_TEXT_COLOR } from "../utils/colors";
import CustomButton from "./CustomButton";
import BirthdayCard from "./BirthdayCard";

function LoggedHome() {
  const authContext = useContext(AuthContext);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; 
  const day = today.getDate(); 

  const { response, sendWish } = useLoggedHome();
  const { data } = response;

  return (
    <>
      <p style={styles.text}>We are excited to have you here ready to wish for everyones birthday!</p>
      <h3>DATE: {day} / {month} / {year} </h3>
      <section style={styles.birthdayWrap}>
        {data.success && (
          data.birthDates.map((user) => {
            return <BirthdayCard user={user} sendWish={sendWish} />
          })
        )}
      </section>
      <CustomButton text={"Log out"} onClick={authContext.logout} />
    </>
  );
}

const styles = {
  text: {
    marginTop: '0.5rem',
    marginBottom: '1rem',
    color: SECONDARY_TEXT_COLOR,
  },
  birthdayWrap: {
    width: '100%',
    maxHeight: '55%',
    margin: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    oreflowY: 'auto',
  },
  date: {
    margin: 0
  },
};

export default LoggedHome;
