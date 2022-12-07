import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiPost, getData } from '../services/requests';

export default function CheckoutForm() {
  const history = useHistory();
  const [sellers, setSellers] = useState([]);
  const [deliveryData, setDeliveryData] = useState({});

  useEffect(() => {
    getData('/sellers')
      .then((res) => {
        setSellers(res);
        setDeliveryData({ sellerId: res[0].id });
      });
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setDeliveryData((prevState) => ({ ...prevState, [name]: value }));
  };

  const getUserData = () => (
    JSON.parse(localStorage.getItem('user'))
  );

  const getTotal = () => (
    JSON.parse(localStorage.getItem('carrinho'))
      .reduce((acc, curr) => {
        acc += (curr.qty * curr.price);
        return acc;
      }, 0).toFixed(2)
  );

  const productsList = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho')) || [];
    return cart.map((prod) => ({
      productId: prod.id,
      quantity: prod.qty,
    }));
  };

  const sendOrder = () => {
    const saleData = {
      ...deliveryData,
      status: 'Pendente',
      userId: getUserData().id,
      totalPrice: getTotal(),
    };

    apiPost('/orders', { saleData, saleProducts: productsList() }, getUserData().token)
      .then(({ id }) => history.push(`/customer/orders/${id}`));
  };

  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>
      <form>
        <label htmlFor="p-vendedora">
          P.Vendedora Responsável
          <select
            id="p-vendedora"
            data-testid="customer_checkout__select-seller"
            name="sellerId"
            onClick={ handleChange }
          >
            {sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id } name="sellerId">
                {seller.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="endereco">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            placeholder="digite seu endereço"
            id="endereco"
            name="deliveryAddress"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="numero">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            type="text"
            placeholder="Número"
            id="numero"
            name="deliveryNumber"
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ sendOrder }
        >
          Finalizar Pedido
        </button>
      </form>
    </div>

  );
}
