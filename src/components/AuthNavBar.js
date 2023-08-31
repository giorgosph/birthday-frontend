import React from 'react';

const AuthNavBar = (props) => {
  const { title, stylesBorder, color, onPress} = props;
  
  return (
    <div style={styles.container} onClick={onPress}>
      <div style={{ ...styles.navBar, ...stylesBorder, backgroundColor: color }}>
        <p style={styles.navText}>{title}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '30%',
    height: 45,
    marginTop: 40,
    marginBottom: 80
  },
  navBar: {
    height: 45,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
};

export default AuthNavBar;
