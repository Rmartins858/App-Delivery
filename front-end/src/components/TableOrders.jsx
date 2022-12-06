import React from 'react';

function TableOrders() {
  const cart = JSON.parse(localStorage.getItem('carrinho'));

  const deleteList = (item) => {
    const newCart = cart.filter((elem) => elem !== item);
    localStorage.setItem('carrinho', JSON.stringify(newCart));
  };

  return (
    <div>
      <h3> Finalizar Pedido </h3>

      {
        !cart.length ? 'sem pedido :('
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
                {cart.length && cart.map((item, index) => (
                  <tr key={ item.name }>
                    <td>
                      { index + 1 }
                    </td>
                    <td>
                      { item.name }
                    </td>
                    <td>
                      { item.qty }
                    </td>
                    <td>
                      { `R$ ${item.price}` }
                    </td>
                    <td>
                      { `R$ ${(item.qty * item.price).toFixed(2)}`}
                    </td>
                    <td>
                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={
                          () => deleteList(item)
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
        <h3>
          {`Total: R$ ${cart.reduce((acc, curr) => {
            acc += (curr.qty * curr.price);
            return acc;
          }, 0).toFixed(2)}`}

        </h3>
      </div>
    </div>
  );
}

export default TableOrders;
