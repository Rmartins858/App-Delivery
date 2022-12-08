import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { apiGet, update } from '../services/requests';
import getToken from '../utils/getToken';
import TableOrdersDetails from '../components/TableOrdersDetails';
import convertDate from '../utils/converteDate';
import getRole from '../utils/getRole';
import Button from '../components/Button';

function CustomerOrdersDetails() {
  const history = useHistory();
  const [order, setOrder] = useState();
  const datatest = `${getRole()}_order_details__element-order-details-label`;

  const getId = () => {
    const { pathname } = history.location;
    const path = pathname.split('/');
    return path[path.length - 1];
  };

  const updateStatus = (status) => {
    setOrder({ ...order, status });
    update(`/orders/${getId()}`, { status }, getToken());
  };

  useEffect(() => {
    apiGet(`/orders/${getId()}`, getToken()).then((res) => setOrder(res));
  }, []);

  return (
    <div>
      <Header />
      <h3>Detalhe do Pedido</h3>
      {!order
        ? 'loading...'
        : (
          <div>
            <p
              data-testid={ `${datatest}-order-id` }
            >
              {`PEDIDO: ${order.id}`}
            </p>
            {
              getRole() === 'customer'
            && (
              <p
                data-testid={ `${datatest}-seller-name` }
              >
                {order.seller.name}
              </p>
            )
            }
            <p
              data-testid={ `${datatest}-order-date` }
            >
              {convertDate(order.saleDate)}
            </p>
            <p
              data-testid={ `${datatest}-delivery-status` }
            >
              {order.status}
            </p>
            { getRole() === 'customer'
              ? (

                <Button
                  type="button"
                  datatestid="customer_order_details__button-delivery-check"
                  text="MARCAR COMO ENTREGUE"
                  name="MARCAR COMO ENTREGUE"
                  onClick={ () => updateStatus('Entregue') }
                  disabled={ order.status !== 'Em Trânsito' }
                />
              )
              : (

                <div>
                  <Button
                    type="button"
                    datatestid="seller_order_details__button-preparing-check"
                    onClick={ () => updateStatus('Preparando') }
                    text="PREPARAR PEDIDO"
                    name="PREPARAR PEDIDO"
                    disabled={ order.status !== 'Pendente' }
                  />
                  <Button
                    type="button"
                    datatestid="seller_order_details__button-dispatch-check"
                    onClick={ () => updateStatus('Em Trânsito') }
                    text="SAIU PARA ENTREGA"
                    name="SAIU PARA ENTREGA"
                    disabled={ order.status !== 'Preparando' }
                  />
                </div>
              )}
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
