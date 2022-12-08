import React, { useEffect, useState } from 'react';
import getRole from '../utils/getRole';

function TableOrdersDetails() {
  const [cart, setCart] = useState([]);
  const datatest = `${getRole()}_order_details__element-order-table`;

  const getCart = () => {
    setCart(JSON.parse(localStorage.getItem('carrinho')) || []);
  };

  useEffect(() => {
    getCart();
  }, []);

  const getTotal = () => (
    cart.reduce((acc, curr) => {
      acc += (curr.qty * curr.price);
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
                {cart.length && cart.map(({ name, id, qty, price }, index) => (
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
                      { qty }
                    </td>
                    <td
                      data-testid={
                        `${datatest}-unit-price-${index}`
                      }
                    >
                      { `R$ ${price}` }
                    </td>
                    <td
                      data-testid={
                        `${datatest}-sub-total-${index}`
                      }
                    >
                      { `R$ ${(qty * price).toFixed(2)}`}
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
