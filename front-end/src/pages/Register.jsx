import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Genericinput from '../components/Genericinput';
import userContext from '../context/userContext';
import Button from '../components/Button';
import { checkRegister } from '../utils/checkLogin';
import { loginPost } from '../services/requests';

function Register() {
  const history = useHistory();
  const {
    name,
    email,
    password,
    setEmail,
    setPassword,
    setName,
  } = useContext(userContext);

  const [errorMessage, setErrorMessage] = useState('');

  const onRegisterBtnClick = async (e) => {
    e.preventDefault();
    try {
      const user = await loginPost('/register', {
        name, email, password, role: 'customer' });
      localStorage.setItem('user', JSON.stringify(user));
      history.push('customer/products');
    } catch (error) {
      const mensagem = error.response.data;
      setErrorMessage(mensagem);
      console.log('FRONTERROR', mensagem);
    }
  };

  return (
    <form>
      <Genericinput
        type="text"
        selector="name"
        fieldName="Nome"
        placeholder="Seu nome"
        setter={ setName }
        datatestid="common_register__input-name"
      />

      <Genericinput
        type="email"
        selector="email"
        fieldName="Email"
        placeholder="exmple@exemplo.com"
        setter={ setEmail }
        datatestid="common_register__input-email"
      />

      <Genericinput
        type="password"
        selector="password"
        fieldName="Senha"
        placeholder="Min. 6 digítos"
        setter={ setPassword }
        datatestid="common_register__input-password"
      />

      <Button
        datatestid="common_register__button-register"
        type="submit"
        name="register"
        disabled={ checkRegister(email, password, name) }
        onClick={ onRegisterBtnClick }
        text="Cadastrar"
      />

      <span data-testid="common_register__element-invalid_register">
        { errorMessage }
      </span>
    </form>
  );
}

export default Register;
