import React from 'react';

const AuthNavBar = (props) => {
  const { title, stylesBorder, active, onPress} = props;

  const cursor = active ? 'default' : 'pointer';
  const color = active ? '#a31d1d' : '#333';

  return (
    <div style={{...styles.container, cursor: cursor}} onClick={onPress}>
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
    marginBottom: 80,
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
