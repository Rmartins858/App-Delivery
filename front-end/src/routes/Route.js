import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CustomerProducts from '../pages/CustomerProducts';
import CustomerOrders from '../pages/CustomerOrders';
import CustomerCheckout from '../pages/CustomerCheckout';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/orders" component={ CustomerOrders } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />

    </Switch>
  );
}
