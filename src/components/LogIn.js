import React from 'react';
import useLogIn from '../hooks/useLogIn';
import { PRIMARY_TEXT_COLOR } from '../utils/colors';

const LogIn = () => {
  const { setUsername, setPassword, handleLogin, response } = useLogIn();
  const { loading } = response;
  
  return (
    <div style={styles.container}>
      <div style={styles.inputView}>
        <input
          type="text"
          style={styles.inputText}
          placeholder="Username"
          onChange={event => setUsername(event.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="password"
          style={styles.inputText}
          placeholder="Password"
          onChange={event => setPassword(event.target.value.trim())}
        />
      </div>
      <button
        disabled={loading}
        style={{ ...styles.loginBtn, opacity: loading ? 0.4 : 1 }}
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    marginTop: '5rem',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 45,
    backgroundColor: '#f2f2f2',
    color: '#000',
    border: 'none',
    outline: 'none',
    width: '100%',
  },
  loginBtn: {
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
    marginTop: 40,
    marginBottom: 10,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
};

export default LogIn;
