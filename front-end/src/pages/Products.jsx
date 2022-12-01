import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import userContext from '../context/userContext';
import { getProducts } from '../services/requests';

function Products() {
  const { setProducts, products } = useContext(userContext);
  useEffect(() => {
    getProducts('/products')
      .then((res) => setProducts(res));
    console.log(products);
  }, []);

  return (
    <div>
      <Header />
      {products.length && products.map((product) => (
        <ProductCard
          key={ product.id }
          urlImage={ product.urlImage }
          name={ product.name }
          price={ product.price }
        />
      ))}
    </div>
  );
}

export default Products;
