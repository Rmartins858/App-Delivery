import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
    </Switch>
  );
}
