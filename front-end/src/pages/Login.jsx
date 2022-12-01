import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Genericinput from '../components/Genericinput';
import userContext from '../context/userContext';
import checkLogin from '../utils/checkLogin';
import postUser from '../services/requests';

function Login() {
  const history = useHistory();
  const { email, password, setEmail, setPassword } = useContext(userContext);
  const [errorMessage, setErrorMessage] = useState('');

  const onLoginBtnClick = async (e) => {
    e.preventDefault();
    try {
      const userData = await postUser('/login', { email, password });
      const { token, name } = userData;
      localStorage.setItem('email', JSON.stringify({ email }));
      localStorage.setItem('token', JSON.stringify({ token }));
      localStorage.setItem('name', JSON.stringify({ name }));

      history.push('/customer/products');
    } catch (error) {
      const mensagem = error.response.data;
      setErrorMessage(mensagem);
      console.log('FRONTERROR', mensagem);
    }
  };

  return (
    <form>
      <Genericinput
        datatestid="common_login__input-email"
        type="email"
        selector="email"
        fieldName="Login"
        placeholder="exmple@exemplo.com"
        setter={ setEmail }
      />

      <Genericinput
        datatestid="common_login__input-password"
        type="password"
        selector="password"
        fieldName="Senha"
        placeholder="Min. 6 digítos"
        setter={ setPassword }
      />
      <Button
        datatestid="common_login__button-login"
        type="submit"
        name="login"
        disabled={ checkLogin(email, password) }
        onClick={ onLoginBtnClick }
        text="Login"
      />
      <Button
        datatestid="common_login__button-register"
        type="submit"
        name="login"
        disabled={ false }
        onClick={ () => { history.push('/register'); } }
        text="Ainda não tenho conta"
      />

      <span data-testid="common_login__element-invalid-email">
        {errorMessage}
      </span>
    </form>
  );
}

export default Login;
