import { Route, Routes } from 'react-router-dom';

import HomeRoute from './Routes/HomeRoute';
import AuthRoute from './Routes/AuthRoute';
import AuthContextProvider from './utils/context';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<HomeRoute />}/>
        <Route path="/auth" element={<AuthRoute />}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
