import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import Header from '../components/Header';
import TableOrders from '../components/TableOrders';

function CustomerCheckout() {
  return (
    <div>
      <Header />
      <TableOrders />
      <CheckoutForm />
    </div>
  );
}

export default CustomerCheckout;
