import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <UserProvider>
        <Route exact path="/" element={ <Login /> } />
      </UserProvider>
    </Routes>
  );
}

export default App;
