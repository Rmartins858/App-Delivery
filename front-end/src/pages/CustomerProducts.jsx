import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import userContext from '../context/userContext';
import { getData } from '../services/requests';

function CustomerProducts() {
  const history = useHistory();
  const { setProducts, products } = useContext(userContext);
  const [cartTotal, setCartToal] = useState(0);
  useEffect(() => {
    getData('/products')
      .then((res) => setProducts(res));
  }, []);

  const goToCart = () => {
    history.push('/customer/checkout');
  };

  const getQty = () => {
    if (localStorage.getItem('carrinho')) {
      const cart = JSON.parse(localStorage.getItem('carrinho'));
      return cart;
    }
    return [];
  };

  return (
    <div>
      <Header condition />
      {products.length && products.map((product) => (
        <ProductCard
          key={ product.id }
          id={ product.id }
          urlImage={ product.urlImage }
          name={ product.name }
          price={ product.price }
          updateTotal={ (total) => setCartToal(total) }
          product={ getQty().find((prod) => prod.name === product.name) || 0 }
        />
      ))}
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ goToCart }
        disabled={ cartTotal === 0 }
      >
        Ver carrinho: R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {cartTotal.toFixed(2).toString().replace('.', ',')}
        </span>
      </button>
    </div>
  );
}

export default CustomerProducts;
