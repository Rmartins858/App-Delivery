import React, { useEffect, useState } from 'react';

function TableOrders() {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    setCart(JSON.parse(localStorage.getItem('carrinho')) || []);
  };

  useEffect(() => {
    getCart();
  }, []);

  const deleteList = (id) => {
    const newCart = cart.filter((elem) => elem.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(newCart));
    getCart();
  };

  const getTotal = () => (
    cart.reduce((acc, curr) => {
      acc += (curr.qty * curr.price);
      return acc;
    }, 0).toFixed(2)
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
                  <th>
                    Remover item
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.length && cart.map(({ name, id, qty, price }, index) => (
                  <tr key={ id }>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-item-number-${index}`
                      }
                    >
                      { id }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-name-${index}`
                      }
                    >
                      { name }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-quantity-${index}`
                      }
                    >
                      { qty }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-unit-price-${index}`
                      }
                    >
                      { `R$ ${price}` }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-sub-total-${index}`
                      }
                    >
                      { `R$ ${(qty * price).toFixed(2)}`}
                    </td>
                    <td>
                      <button
                        type="button"
                        data-testid={
                          `customer_checkout__element-order-table-remove-${index}`
                        }
                        onClick={
                          () => deleteList(id)
                        }
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
      }
      <div>
        <h3
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: R$ ${getTotal()}`}

        </h3>
      </div>
    </div>
  );
}

export default TableOrders;
