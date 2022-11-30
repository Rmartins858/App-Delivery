import PropTypes from 'prop-types';
import React from 'react';

function SubmitBtn({ butnName, type, handleClick, disabled, dataTestId }) {
  return (
    <button
      data-testid={ dataTestId }
      type={ type === 'submit' ? 'submit' : 'button' }
      disabled={ disabled }
      onClick={ handleClick }
    >
      {butnName}
    </button>
  );
}

SubmitBtn.propTypes = {
  butnName: PropTypes.string,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default SubmitBtn;
