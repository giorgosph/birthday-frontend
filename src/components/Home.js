import React from "react";
import { Link } from "react-router-dom";
import { SECONDARY_TEXT_COLOR } from "../utils/colors";
import CustomButton from "./CustomButton";

function Home() {

  return (
    <>
      <p style={styles.text}>Log in or create a new account to start celebrating with us</p>
      <Link to={"/auth"}><CustomButton text={"Log in/Sign up"} /></Link>
    </>
  );
}

const styles = {
  text: {
    margin: '4rem',
    marginTop: '0.5rem',
    color: SECONDARY_TEXT_COLOR,
  },
};

export default Home;
