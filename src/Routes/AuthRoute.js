import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp';
import AuthNavBar from '../components/AuthNavBar';

const AuthRoute = () => {
  const [activeTab, setActiveTab] = useState('login');

  const animation = useSpring({
    transform: `translateX(-${activeTab === 'login' ? 0 : window.innerWidth}px)`,
  });

  const handleTabChange = tab => setActiveTab(tab);

  return (
    <div style={styles.container}>
      <Link to={"/"}><AiOutlineClose style={styles.close}/></Link>
      <div style={styles.navBarWrap}>
        <AuthNavBar
          title='Log In'
          stylesBorder={styles.leftBorder}
          active={activeTab === 'login' ? true : false}
          onPress={() => handleTabChange('login')}
        />
        <AuthNavBar
          title='Sign Up'
          stylesBorder={styles.rightBorder}
          active={activeTab === 'signup' ? true : false}
          onPress={() => handleTabChange('signup')}
        />
      </div>
      <animated.div style={{ ...styles.scrollView, ...animation }}>
        <div style={styles.inputWrap}>
          <LogIn />
        </div>
        <div style={styles.inputWrap}>
          <SignUp/>
        </div>
      </animated.div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  close: {
    fontSize: '1.4rem',
    color: 'white',
    position: 'absolute',
    left: '1rem',
    top: '1rem',
  },
  navBarWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBorder: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightBorder: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
  },
  inputWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default AuthRoute;
