import React from 'react';
import useSignUp from '../hooks/useSignUp';
import { PRIMARY_TEXT_COLOR } from '../utils/colors';

const SignUp = () => {
  const { handleSignup, set, response } = useSignUp();
  const { loading } = response;

  return (
    <div style={styles.container}>
      <div style={styles.inputView}>
        <input
          type="text"
          style={styles.inputText}
          placeholder="Name"
          onChange={event => set.name(event.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="text"
          style={styles.inputText}
          placeholder="Surname"
          onChange={event => set.surname(event.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="text"
          style={styles.inputText}
          placeholder="Username"
          onChange={event => set.username(event.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="date"
          style={styles.inputText}
          placeholder="Date of Birth"
          onChange={event => set.birthDate(event.target.value)}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="password"
          style={styles.inputText}
          placeholder="Password"
          onChange={event => set.password(event.target.value)}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="password"
          style={styles.inputText}
          placeholder="Confirm Password"
          onChange={event => set.confPassword(event.target.value)}
        />
      </div>
      <button
        disabled={loading}
        style={{ ...styles.signupBtn, opacity: loading ? 0.4 : 1 }}
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto'
  },
  inputView: {
    width: '45%',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 30,
  },
  inputText: {
    width: '100%',
    height: 20,
    fontSize: 14,
    backgroundColor: '#f2f2f2',
    color: '#000',
    border: 'none',
    outline: 'none',
  },
  signupBtn: {
    width: '45%',
    minHeight: '2.8rem',
    fontWeight: 500,
    fontSize: '1.2rem',
    color: PRIMARY_TEXT_COLOR,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: 10,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
};

export default SignUp;
