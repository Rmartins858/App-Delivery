import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiGet } from '../services/requests';
import getToken from '../utils/getToken';
import convertDate from '../utils/converteDate';
import getRole from '../utils/getRole';

function OrdersCard() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    apiGet('/orders', getToken()).then((res) => setOrders(res));
  }, []);

  const handleClick = (id) => {
    if (getRole() === 'seller') {
      history.push(`/seller/orders/${id}`);
    } else {
      history.push(`/customer/orders/${id}`);
    }
  };

  return (
    <div>
      {
        !orders.length ? 'sem pedido  :('
          : (
            orders.map(({
              id,
              status,
              saleDate,
              totalPrice,
              deliveryAddress,
              deliveryNumber,
            }) => (
              <button
                data-testid={ `${getRole()}_orders__element-order-id-${id}` }
                key={ id }
                type="button"
                onClick={ () => handleClick(id) }
              >
                <div>

                  <p data-testid={ `${getRole()}_orders__element-order-id-${id}` }>
                    {`Pedido ${id}`}
                  </p>
                  <p data-testid={ `${getRole()}_orders__element-delivery-status-${id}` }>
                    {status}
                  </p>
                  <p data-testid={ `${getRole()}_orders__element-order-date-${id}` }>
                    {convertDate(saleDate)}
                  </p>
                  <p data-testid={ `${getRole()}_orders__element-card-price-${id}` }>
                    {`R$ ${totalPrice} `}
                  </p>
                  { getRole() === 'seller' && (
                    <p
                      data-testid={ `seller_orders__element-card-address-${id}` }
                    >
                      {`${deliveryAddress}, ${deliveryNumber}`}
                    </p>
                  ) }
                </div>
              </button>
            ))
          )
      }
    </div>
  );
}

export default OrdersCard;
