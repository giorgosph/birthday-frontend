import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { PRIMARY_BUTTON_TEXT_COLOR, PRIMARY_BUTTON_COLOR, SECONDARY_TEXT_COLOR, SECONDARY_BUTTON_COLOR } from "../utils/colors";

function Home() {
  const buttonRef = useRef(null);

  const handleMouseOver = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = SECONDARY_BUTTON_COLOR;
      buttonRef.current.style.color = SECONDARY_TEXT_COLOR;
      buttonRef.current.style.cursor = "pointer";
    }
  };

  const handleMouseOut = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = PRIMARY_BUTTON_COLOR;
      buttonRef.current.style.color = PRIMARY_BUTTON_TEXT_COLOR;
      buttonRef.current.style.cursor = "default";
    }
  };

  return (
    <>
      <p style={styles.text}>Log in or create a new account to start celebrating with us</p>
      <Link to={"/auth"}>
        <button
          ref={buttonRef}
          style={styles.button}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Log in/Sign up
        </button>
      </Link>
    </>
  );
}

const styles = {
  text: {
    margin: '4rem',
    marginTop: '0.5rem',
    color: SECONDARY_TEXT_COLOR,
  },
  button: {
    minWidth: '3.5rem',
    minHeight: '2.5rem',
    padding: '0.6rem 1rem',
    fontSize: '1.3rem',
    border: '0',
    borderRadius: '6px',
    color: PRIMARY_BUTTON_TEXT_COLOR,
    backgroundColor: PRIMARY_BUTTON_COLOR,
    transition: 'all 0.5s ease',
  }
};

export default Home;
