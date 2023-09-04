import React, { useRef } from "react";
import { PRIMARY_BUTTON_TEXT_COLOR, PRIMARY_BUTTON_COLOR, SECONDARY_TEXT_COLOR, SECONDARY_BUTTON_COLOR } from "../utils/colors";

function CustomButton({ text, onClick = () => 0 }) {
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
      <button
        ref={buttonRef}
        style={styles.button}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onClick}
      >
        {text}
      </button>
  );
}

const styles = {
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

export default CustomButton;
