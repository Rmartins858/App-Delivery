import React from 'react';
import PropTypes from 'prop-types';

function Button({ datatestid, type, name, disabled, onClick, text, className }) {

  return (
    <button
      data-testid={datatestid}
      type={type === 'submit' ? 'submit' : 'button'}
      name={name}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  datatestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
