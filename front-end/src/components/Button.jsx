import React from 'react';
import PropTypes from 'prop-types';

function Button({ datatestid, type, name, disabled, onClick, text }) {
  return (
    <button
      data-testid={ datatestid }
      type={ type === 'submit' ? 'submit' : 'button' }
      name={ name }
      disabled={ disabled }
      onClick={ onClick }
    >
      { text }
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
};

export default Button;
