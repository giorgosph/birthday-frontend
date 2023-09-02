import React from 'react';
import useSignUp from '../hooks/useSignUp';

const SignUp = () => {
  const { handleSignup, set, response } = useSignUp();
  const { data, error, loading } = response;

  return (
    <div style={styles.container}>
      <div style={styles.inputView}>
        <input
          type="text"
          style={styles.inputText}
          placeholder="Name"
          onChange={text => set.name(text.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="text"
          style={styles.inputText}
          placeholder="Surname"
          onChange={text => set.surname(text.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="text"
          style={styles.inputText}
          placeholder="Username"
          onChange={text => set.username(text.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="password"
          style={styles.inputText}
          placeholder="Password"
          onChange={text => set.password(text.target.value)}
        />
      </div>
      <div style={styles.inputView}>
        <input
          type="password"
          style={styles.inputText}
          placeholder="Confirm Password"
          onChange={text => set.confPassword(text.target.value)}
        />
      </div>
      <button
        disabled={loading}
        style={{ ...styles.signupBtn, opacity: loading ? 0.4 : 1 }}
        onClick={handleSignup}
      >
        SIGN UP
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
    width: '60%',
    backgroundColor: '#003f5c',
    color: '#fff',
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
};

export default SignUp;
