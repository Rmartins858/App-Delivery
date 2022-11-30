import React from 'react';
import Routes from './routes/Route';
import UserProvider from './context/userProvider';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
