import PropTypes from 'prop-types';
import React from 'react';

function ProductCard({ price, urlImage, name, key }) {
  return (
    <div data-testid="">
      <p data-testid={ `customer_products__element-card-price-${key}` }>
        {`R$ ${price}`}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${key}` }
        src={ urlImage }
        alt={ name }
      />
      <p
        data-testid={ `customer_products__element-card-title-${key}` }
      >
        {name}
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${key}` }
      >
        -
      </button>
      <span
        data-testid={ `customer_products__input-card-quantity-${key}` }
      >
        0
      </span>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${key}` }
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
}.isRequired;

export default ProductCard;
