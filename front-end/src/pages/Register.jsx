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
    }
  };

  return (
    <div className='bg-gray-300 flex min-h-screen  items-center justify-center '>
      <form className='bg-white max-w-md p-10 rounded-xl shadow-xl z-20'>
        <h1 className='text-4xl text-center font-bold mb-10'>Cadastre-se</h1>
      <Genericinput
        type="text"
        selector="name"
        fieldName="Nome "
        placeholder="Seu nome"
        setter={ setName }
        datatestid="common_register__input-name"
      />

      <Genericinput
        type="email"
        selector="email"
        fieldName="Email"
        placeholder="exemplo@exemplo.com"
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
        disabled={ checkRegister({ email, password, name }) }
        onClick={ onRegisterBtnClick }
        text="Cadastrar"
        className="bg-green-700 w-full mt-10 rounded	hover:bg-green-800 text-white cursor-pointer p-2"
      />

      <span data-testid="common_register__element-invalid_register">
        { errorMessage }
      </span>
    </form>
    </div>
  );
}

export default Register;
