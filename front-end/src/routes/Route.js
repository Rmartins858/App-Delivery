import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

export default function Rout() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
    </Routes>
  );
}
