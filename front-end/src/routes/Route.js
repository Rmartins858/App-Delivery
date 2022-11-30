import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

export default function Rout() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  );
}
