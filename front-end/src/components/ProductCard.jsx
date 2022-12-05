import PropTypes from 'prop-types';
import React from 'react';

function ProductCard({ price, urlImage, name, id }) {
  return (
    <div data-testid="">
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {`R$ ${price}`}
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
      >
        -
      </button>
      <span
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        0
      </span>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
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
