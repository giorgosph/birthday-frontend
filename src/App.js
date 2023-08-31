import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomeRoute from './Routes/HomeRoute';
import AuthRoute from './Routes/AuthRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />}/>
      <Route path="/auth" element={<AuthRoute />}/>
    </Routes>
  );
}

export default App;
