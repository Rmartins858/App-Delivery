import React from 'react';

function OrdersCard() {
  return (
    <div>
      <p data-testid="customer_orders__element-order-id-<id>">
        pedido 0001
      </p>
      <p
        data-testid="customer_orders__element-delivery-status-<id>"
      >
        PENDENTE
      </p>
      <p data-testid="customer_orders__element-order-date-<id>">
        dd-mm-aaaa
      </p>
      <p data-testid="customer_orders__element-card-price-<id>">
        {'R$ 28,46 '}
      </p>
    </div>
  );
}

export default OrdersCard;
