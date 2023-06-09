import PropTypes from 'prop-types';
import React from 'react';

function Genericinput({ selector, type, placeholder, setter, fieldName, datatestid }) {
  return (
    <label htmlFor={ selector } className="label">
      { fieldName }
      <input
        data-testid={ datatestid }
        type={ type }
        id={ selector }
        className="input"
        placeholder={ placeholder }
        onChange={ (e) => setter(e.target.value) }
      />
    </label>
  );
}
Genericinput.propTypes = {
  datatestid: PropTypes.string,
  placeholder: PropTypes.string,
  selector: PropTypes.string,
  setter: PropTypes.func,
  type: PropTypes.string,
  fieldName: PropTypes.string,
}.isRequired;

export default Genericinput;
