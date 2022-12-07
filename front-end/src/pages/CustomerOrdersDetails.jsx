import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { apiGet, update } from '../services/requests';
import getToken from '../utils/getToken';
import TableOrdersDetails from '../components/TableOrdersDetails';

function CustomerOrdersDetails() {
  const history = useHistory();
  const [order, setOrder] = useState();

  const getId = () => {
    const { pathname } = history.location;
    const path = pathname.split('/');
    return path[path.length - 1];
  };

  const convertDate = (data) => {
    const now = new Date(data);
    const str = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    return str;
  };

  const updateStatus = () => {
    setOrder({ ...order, status: 'Entregue' });
    update(`/orders/${getId()}`, { status: 'Entregue' }, getToken());
  };

  useEffect(() => {
    apiGet(`/orders/${getId()}`, getToken()).then((res) => setOrder(res));
  }, []);
  console.log(order);
  return (
    <div>
      <Header />
      <h3>Detalhe do Pedido</h3>
      {!order
        ? 'loading...'
        : (
          <div>
            <p
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              {`PEDIDO: ${order.id}`}
            </p>
            <p
              data-testid="customer_
              order_details__element-order-details-label-seller-name"
            >
              {order.seller.name}
            </p>
            <p
              data-testid="customer_
              order_details__element-order-details-label-order-date"
            >
              {convertDate(order.saleDate)}
            </p>
            <p
              data-testid="customer_
              order_details__element-order-details-label-delivery-status"
            >
              {order.status}
            </p>
            <button
              type="button"
              data-testid="customer_
              order_details__button-delivery-check"
              onClick={ updateStatus }
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
        )}
      <TableOrdersDetails />
    </div>
  );
}

CustomerOrdersDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default CustomerOrdersDetails;
