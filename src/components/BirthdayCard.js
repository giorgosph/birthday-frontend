import React, { useRef, useState } from "react";
import { 
  SECONDARY_TEXT_COLOR, CARD_BACKGROUND_COLOR, PRIMARY_BUTTON_CARD_COLOR, PRIMARY_BUTTON_TEXT_CARD_COLOR 
} from "../utils/colors";

function BirthdayCard({ user, sendWish }) {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const buttonRef = useRef(null);

  const colors = ["red", "yellow", "green", "lightBlue", "pink"];

  const rotateColors = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const handleMouseOver = () => {
    rotateColors();
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = colors[currentColorIndex];
    }
  };

  const handleMouseOut = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = PRIMARY_BUTTON_CARD_COLOR;
    }
  };

  return (
    <section style={styles.container}>
      <h4 style={styles.header}>Today is {user.username}'s birthday!</h4>
      <button 
        style={styles.button} 
        onClick={() => sendWish(user.name)}
        ref={buttonRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Send Happy Birthday!
      </button>
    </section>
  );
}

const styles = {
  container: {
    minWidth: '25%',
    margin: '1rem',
    padding: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: CARD_BACKGROUND_COLOR,
    color: SECONDARY_TEXT_COLOR,
    backdropFilter: 'blur(10)',
    borderRadius: '25px',
    zIndex: 10,
  },
  header: {
    margin: 0
  },
  button: {
    minWidth: '2rem',
    minHeight: '1.6rem',
    marginTop: '0.5rem',
    padding: '0.6rem 0.4rem',
    fontSize: '1rem',
    border: '0',
    borderRadius: '6px',
    color: PRIMARY_BUTTON_TEXT_CARD_COLOR,
    backgroundColor: PRIMARY_BUTTON_CARD_COLOR,
    transition: 'all 0.5s ease',
    cursor: 'pointer',
  }
};

export default BirthdayCard;
