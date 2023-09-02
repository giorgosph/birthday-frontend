import React from 'react';
import useLogIn from '../hooks/useLogIn';

const LogIn = () => {
  const { setUsername, setPassword, handleLogin, response } = useLogIn();
  const { error, loading } = response;
  
  return (
    <div style={styles.container}>
      <div style={styles.inputView}>
        <input
          type="text"
          style={styles.inputText}
          placeholder="Username"
          onChange={text => setUsername(text.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="password"
          style={styles.inputText}
          placeholder="Password"
          onChange={text => setPassword(text.target.value.trim())}
        />
      </div>
      <button
        disabled={loading}
        style={{ ...styles.loginBtn, opacity: loading ? 0.4 : 1 }}
        onClick={handleLogin}
      >
        LOGIN
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputView: {
    width: '60%',
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
    height: 50,
    backgroundColor: '#f2f2f2',
    color: '#000',
    border: 'none',
    outline: 'none',
    width: '100%',
  },
  loginBtn: {
    width: '60%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default LogIn;
