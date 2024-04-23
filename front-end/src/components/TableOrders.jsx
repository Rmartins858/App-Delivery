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
    }, 0).toFixed(2).toString().replace('.', ',')
  );

  return (
   <div className='relative rounded-xl overflow-auto'>
     <div class="shadow-sm overflow-hidden my-8 mt-12">
      {
        !cart.length ? 'sem pedido  :('
          : (
            <table class="border-collapse table-fixed w-full text-sm">
              <caption className='caption-top'>
              <h3 className='font-light m-4'> Finalizar Pedido </h3>
              </caption>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Item
                  </th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Descrição
                  </th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Quantidade
                  </th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Valor Unitário
                  </th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Sub-total
                  </th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Remover item
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-slate-800">
                {cart.length && cart.map(({ name, id, qty, price }, index) => (
                  <tr key={ id }>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
                      data-testid={
                        `customer_checkout__element-order-table-item-number-${index}`
                      }
                    >
                      { index + 1 }
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
                      data-testid={
                        `customer_checkout__element-order-table-name-${index}`
                      }
                    >
                      { name }
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
                      data-testid={
                        `customer_checkout__element-order-table-quantity-${index}`
                      }
                    >
                      { qty }
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      R$
                      <span
                        data-testid={
                          `customer_checkout__element-order-table-unit-price-${index}`
                        }
                      >
                        {price.toString().replace('.', ',')}
                      </span>
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      R$
                      <span
                        data-testid={
                          `customer_checkout__element-order-table-sub-total-${index}`
                        }
                      >
                        {(qty * price).toFixed(2).toString().replace('.', ',')}
                      </span>
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center w-40 mb-1'
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
        <h3>
          Total: R$
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {getTotal()}
          </span>

        </h3>
      </div>
    </div>
   </div>
  );

}

export default TableOrders;
