import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import { checkRegister } from '../utils/checkLogin';

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
      />

      <input
        type="email"
        name="email"
        value={ newUserData.email }
        placeholder="example@exemplo.com"
        onChange={ handleChange }
        data-testid="admin_manage__input-email"
      />

      <input
        type="password"
        name="password"
        value={ newUserData.password }
        placeholder="Min. 6 digítos"
        onChange={ handleChange }
        data-testid="admin_manage__input-password"
      />
      <select
        onClick={ handleChange }
        data-testid="admin_manage__select-role"
        name="role"
      >
        <option value="seller" selected>Vendedor</option>
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
      />

      <span data-testid="admin_manage__element-invalid-register">
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
