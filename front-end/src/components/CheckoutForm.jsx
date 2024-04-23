import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiPost, getData } from "../services/requests";

export default function CheckoutForm() {
  const history = useHistory();
  const [sellers, setSellers] = useState([]);
  const [deliveryData, setDeliveryData] = useState({});

  useEffect(() => {
    getData("/sellers").then((res) => {
      setSellers(res);
      setDeliveryData({ sellerId: res[0].id });
    });
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setDeliveryData((prevState) => ({ ...prevState, [name]: value }));
  };

  const getUserData = () => JSON.parse(localStorage.getItem("user"));

  const getTotal = () =>
    JSON.parse(localStorage.getItem("carrinho"))
      .reduce((acc, curr) => {
        acc += curr.qty * curr.price;
        return acc;
      }, 0)
      .toFixed(2);

  const productsList = () => {
    const cart = JSON.parse(localStorage.getItem("carrinho")) || [];
    return cart.map((prod) => ({
      productId: prod.id,
      quantity: prod.qty,
    }));
  };

  const sendOrder = () => {
    const saleData = {
      ...deliveryData,
      status: "Pendente",
      userId: getUserData().id,
      totalPrice: getTotal(),
    };

    apiPost(
      "/orders",
      { saleData, saleProducts: productsList() },
      getUserData().token
    ).then(({ id }) => history.push(`/customer/orders/${id}`));
  };

  return (
    <div className="bg-green-50 block h-screen ">
      <h3 className="text-3xl font-bold ml-4  text-slate-500 dark:text-slate-200 text-left">
        Detalhes e Endereço para Entrega
      </h3>
      <div className=" flex w-screen">
        <form className="flex gap-4 bg-white p-10 rounded-xl shadow-xl z-20 m-10 items-center w-screen">
          <label htmlFor="p-vendedora">
            <h3 className="font-bold mb-1  text-slate-500 dark:text-slate-200 text-left">P. Vendedora Responsável</h3>
            <select
              className="block p-2 bg-gray-200 rounded w-full focus:outline-none focus:bg-gray-300"
              id="p-vendedora"
              data-testid="customer_checkout__select-seller"
              name="sellerId"
              value={deliveryData.sellerId}
              onClick={handleChange}
              onChange={handleChange}
            >
              {sellers.map((seller) => (
                <option key={seller.id} value={seller.id} name="sellerId">
                  {seller.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="endereco">
            <h3 className="font-bold mt-1 mb-1  text-slate-500 dark:text-slate-200 text-left">Endereço</h3>
            <input
              className="block p-2 bg-gray-200 rounded w-full focus:outline-none focus:bg-gray-300"
              data-testid="customer_checkout__input-address"
              type="text"
              placeholder="digite seu endereço"
              id="endereco"
              name="deliveryAddress"
              value={deliveryData.deliveryAddress}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="numero">
            <h3 className="font-bold mt-1 mb-1  text-slate-500 dark:text-slate-200 text-left">Número</h3>
            <input
              className="block p-2 bg-gray-200 rounded w-full focus:outline-none  focus:bg-gray-300"
              data-testid="customer_checkout__input-address-number"
              type="text"
              placeholder="Número"
              id="numero"
              name="deliveryNumber"
              value={deliveryData.deliveryNumber}
              onChange={handleChange}
            />
          </label>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
            onClick={sendOrder}
            className="block mt-8 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Finalizar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}
