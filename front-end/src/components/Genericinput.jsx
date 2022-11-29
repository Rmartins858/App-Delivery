import PropTypes from 'prop-types';
import React from 'react';

function Genericinput({ selector, type, placeholder, setter, fieldName }) {
  return (
    <label htmlFor={ selector }>
      { fieldName }
      <input
        type={ type }
        id={ selector }
        className={ selector }
        placeholder={ placeholder }
        onChange={ (e) => setter(e.target.value) }
      />
    </label>
  );
}

Genericinput.propTypes = {
  placeholder: PropTypes.string,
  selector: PropTypes.string,
  setter: PropTypes.func,
  type: PropTypes.string,
  fieldName: PropTypes.string,
}.isRequired;

export default Genericinput;
