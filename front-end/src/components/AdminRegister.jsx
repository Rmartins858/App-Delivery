import React, { useState } from 'react';
import Button from './Button';
import { checkRegister } from '../utils/checkLogin';
import { loginPost } from '../services/requests';

function AdminRegister() {
  const userDataEx = {
    name: '',
    role: 'seller',
    email: '',
    password: '',
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [newUserData, setNewUserData] = useState(userDataEx);

  const createUser = async () => {
    try {
      await loginPost('/register', newUserData);
    } catch (error) {
      const mensagem = error.response.data;
      setErrorMessage(mensagem);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setNewUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        onChange={ handleChange }
        data-testid="admin_manage__input-name"
      />

      <input
        type="email"
        name="email"
        placeholder="example@exemplo.com"
        onChange={ handleChange }
        data-testid="admin_manage__input-email"
      />

      <input
        type="password"
        name="password"
        placeholder="Min. 6 digítos"
        onChange={ handleChange }
        data-testid="admin_manage__input-password"
      />
      <select
        onClick={ handleChange }
        data-testid="admin_manage__select-role"
        name="role"
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
      />

      <span data-testid="admin_manage__element-invalid_register">
        { errorMessage }
      </span>
    </form>
  );
}

export default AdminRegister;
