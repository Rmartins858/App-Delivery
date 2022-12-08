import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiGet } from '../services/requests';
import getRole from '../utils/getRole';
import getToken from '../utils/getToken';

function TableOrdersDetails() {
  const history = useHistory();

  const [cart, setCart] = useState([]);
  const datatest = `${getRole()}_order_details__element-order-table`;

  const getId = () => {
    const { pathname } = history.location;
    const path = pathname.split('/');
    return path[path.length - 1];
  };

  useEffect(() => {
    apiGet(`/orders/${getId()}`, getToken()).then((res) => setCart(res.products));
  }, []);

  const getTotal = () => (
    cart.reduce((acc, curr) => {
      acc += (curr.SalesProduct.quantity * curr.price);
      return acc;
    }, 0).toFixed(2).toString().replace('.', ',')
  );

  return (
    <div>
      <h3> Finalizar Pedido </h3>

      {
        !cart.length ? 'sem pedido  :('
          : (
            <table>
              <thead>
                <tr>
                  <th>
                    Item
                  </th>
                  <th>
                    Descricão
                  </th>
                  <th>
                    Quantidade
                  </th>
                  <th>
                    Valor Unitário
                  </th>
                  <th>
                    Sub-total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.length && cart
                  .map(({ name, id, SalesProduct: { quantity }, price }, index) => (
                    <tr key={ id }>
                      <td
                        data-testid={
                          `${datatest}-item-number-${index}`
                        }
                      >
                        { id }
                      </td>
                      <td
                        data-testid={
                          `${datatest}-name-${index}`
                        }
                      >
                        { name }
                      </td>
                      <td
                        data-testid={
                          `${datatest}-quantity-${index}`
                        }
                      >
                        { quantity }
                      </td>
                      <td>
                        R$
                        <span
                          data-testid={
                            `${datatest}-unit-price-${index}`
                          }
                        >
                          {price.toString().replace('.', ',')}
                        </span>
                      </td>
                      <td>
                        <span
                          data-testid={
                            `${datatest}-sub-total-${index}`
                          }
                        >
                          R$
                          {(quantity * price)
                            .toFixed(2).toString().replace('.', ',')}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )
      }
      <div>
        <h3>
          Total: R$
          <span
            data-testid={ `${getRole()}_order_details__element-order-total-price` }
          >
            {getTotal()}
          </span>

        </h3>
      </div>
    </div>
  );
}

export default TableOrdersDetails;
