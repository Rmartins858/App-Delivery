import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import { checkRegister } from '../utils/checkLogin';
import './AdminRegister.css';

function AdminRegister({ errorMessage, setNewUserData, createUser, newUserData }) {
  const handleChange = ({ target: { name, value } }) => {
    setNewUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={ newUserData.name }
        placeholder="Seu nome"
        onChange={ handleChange }
        data-testid="admin_manage__input-name"
        className="form-input"
      />

      <input
        type="email"
        name="email"
        value={ newUserData.email }
        placeholder="example@exemplo.com"
        onChange={ handleChange }
        data-testid="admin_manage__input-email"
        className="form-input"
      />

      <input
        type="password"
        name="password"
        value={ newUserData.password }
        placeholder="Min. 6 digítos"
        onChange={ handleChange }
        data-testid="admin_manage__input-password"
        className="form-input"
      />

      <select
        onClick={ handleChange }
        onChange={ handleChange }
        data-testid="admin_manage__select-role"
        value={ newUserData.role }
        name="role"
        className="form-select"
      >
        <option value="seller">Vendedor</option>
        <option value="customer">Customer</option>
        <option value="administrator">Administrator</option>
      </select>

      <Button
        datatestid="admin_manage__button-register"
        type="submit"
        name="register"
        disabled={ checkRegister(newUserData) }
        onClick={ createUser }
        text="CADASTRAR"
        className="form-button"
      />

      <span data-testid="admin_manage__element-invalid-register" className="form-error">
        { errorMessage }
      </span>
    </form>

  );
}

AdminRegister.propTypes = {
  createUser: PropTypes.func,
  errorMessage: PropTypes.string,
  setNewUserData: PropTypes.func,
}.isRequired;

export default AdminRegister;
