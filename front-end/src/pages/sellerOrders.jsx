import React from 'react';
import Header from '../components/Header';
import OrdersCard from '../components/OrdersCard';

function sellerOrders() {
  return (
    <div>
      <Header
        condition={ false }
      />
      <OrdersCard />
    </div>
  );
}

export default sellerOrders;
