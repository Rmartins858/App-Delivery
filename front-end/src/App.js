import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <UserProvider>
            <Login />
          </UserProvider>
        }
      />

    </Routes>
  );
}

export default App;
