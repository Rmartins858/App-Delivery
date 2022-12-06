import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import userContext from '../context/userContext';
import { getProducts } from '../services/requests';

function CustomerProducts() {
  const history = useHistory();
  const { setProducts, products } = useContext(userContext);
  const [cartTotal, setCartToal] = useState(0);
  useEffect(() => {
    getProducts('/products')
      .then((res) => setProducts(res));
  }, []);

  const goToCart = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <Header />
      {products.length && products.map((product) => (
        <ProductCard
          key={ product.id }
          id={ product.id }
          urlImage={ product.urlImage }
          name={ product.name }
          price={ product.price }
          updateTotal={ (total) => setCartToal(total) }
        />
      ))}
      <Button
        datatestid=""
        type="button"
        name="preview carrinho"
        disabled={ false }
        onClick={ goToCart }
        text={ `Ver carrinho: R$ ${cartTotal.toFixed(2)}` }
      />
    </div>
  );
}

export default CustomerProducts;
