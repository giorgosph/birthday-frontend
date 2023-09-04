import { Route, Routes } from 'react-router-dom';

import HomeRoute from './Routes/HomeRoute';
import AuthRoute from './Routes/AuthRoute';
import AuthContextProvider from './utils/context';
import { BACKGROUND_COLOR, CONTENT_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR } from './utils/colors';

function App() {
  return (
  <div style={styles.container}>
    <div style={styles.subContainer}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomeRoute />}/>
          <Route path="/auth" element={<AuthRoute />}/>
        </Routes>
      </AuthContextProvider>
    </div>
  </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    background: BACKGROUND_COLOR,
    zIndex: 0,
  },
  subContainer: {
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: CONTENT_BACKGROUND_COLOR,
    backdropFilter: 'blur(10)',
    color: PRIMARY_TEXT_COLOR,
    position: 'absolute',
    zIndex: 1,
  },
};

export default App;

