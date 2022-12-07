import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiGet } from '../services/requests';
import getToken from '../utils/getToken';
import convertDate from '../utils/converteDate';

function OrdersCard() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    apiGet('/orders', getToken()).then((res) => setOrders(res));
  }, []);

  console.log(orders);
  return (
    <div>
      {
        !orders.length ? 'sem pedido  :('
          : (
            orders.map(({ id, status, saleDate, totalPrice }) => (
              <button
                key={ id }
                type="button"
                onClick={ () => history.push(`/customer/orders/${id}`) }
              >
                <div>

                  <p data-testid={ `customer_orders__element-order-id-${id}` }>
                    {`Pedido ${id}`}
                  </p>
                  <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
                    {status}
                  </p>
                  <p data-testid={ `customer_orders__element-order-date-${id}` }>
                    {convertDate(saleDate)}
                  </p>
                  <p data-testid={ `customer_orders__element-card-price-${id}` }>
                    {`R$ ${totalPrice} `}
                  </p>
                </div>
              </button>
            ))
          )
      }
    </div>
  );
}

export default OrdersCard;
