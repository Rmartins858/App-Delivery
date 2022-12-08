import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function ProductCard({ price, urlImage, name, id, updateTotal, product }) {
  const [qty, setQty] = useState(product.qty || 0);

  const calculateTotal = (cart) => {
    if (cart.length) {
      const total = cart.reduce((acc, curr) => acc + (curr.qty * curr.price), 0);
      return total;
    }
    return 0;
  };

  const addToCart = () => {
    if (localStorage.getItem('carrinho')) {
      let cart = JSON.parse(localStorage.getItem('carrinho'));
      const exists = cart.some((prod) => prod.name === name);
      if (exists) {
        cart = cart.reduce((acc, curr) => {
          if (curr.name === name) {
            curr.qty = qty;
            return acc;
          }
          return acc;
        }, cart);
      } else {
        cart = [
          ...cart,
          { name, price, qty, id },
        ];
      }
      const updatedCart = cart.filter((prod) => prod.qty);
      localStorage.setItem('carrinho', JSON.stringify(updatedCart));
      updateTotal(calculateTotal(updatedCart));
    } else {
      localStorage.setItem(
        'carrinho',
        JSON.stringify([{ name, price, qty }]),
      );
      updateTotal(calculateTotal([{ name, price, qty }]));
    }
  };

  useEffect(() => {
    addToCart();
  }, [qty]);

  const handleChange = (value) => {
    if (value < 0 || value === '') value = '';
    setQty(value);
  };

  const handleClick = (value) => {
    if (value === '+') {
      setQty(+qty + 1);
    } else if (value === '-' && qty > 0) {
      setQty(+qty - 1);
    }
  };

  return (
    <div data-testid="">
      <p>
        R$
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          { price.replace('.', ',') }
        </span>
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ (e) => handleClick(e.target.value) }
        value="-"
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        placeholder="0"
        value={ qty }
        onChange={ (e) => handleChange(e.target.value) }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ (e) => handleClick(e.target.value) }
        value="+"
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default ProductCard;
