import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userContext from '../context/userContext';
import { checkLogin } from '../utils/checkLogin';
import { loginPost } from '../services/requests';

function Login() {
  const history = useHistory();
  const { email, password, setEmail, setPassword } = useContext(userContext);
  const [errorMessage, setErrorMessage] = useState('');

  const isLogged = () => {
    if (localStorage.getItem('user')) {
      const userData = JSON.parse(localStorage.getItem('user'));
      switch (userData.role) {
      case 'customer':
        history.push('/customer/products');
        break;
      case 'seller':
        history.push('/seller/orders');
        break;
      case 'administrator':
        history.push('admin/manage');
        break;
      default:
        break;
      }
    }
  };

  useEffect(() => {
    isLogged();
  }, []);

  const onLoginBtnClick = async (e) => {
    e.preventDefault();
    try {
      const user = await loginPost('/login', { email, password });
      localStorage.setItem('user', JSON.stringify(user));
      switch (user.role) {
      case 'customer':
        history.push('/customer/products');
        break;
      case 'seller':
        history.push('/seller/orders');
        break;
      case 'administrator':
        history.push('admin/manage');
        break;
      default:
        break;
      }
    } catch (error) {
      const message = error.response.data;
      setErrorMessage(message);
    }
  };

  return (
    <form className="form">
      <input
        datatestid="common_login__input-email"
        type="email"
        selector="email"
        fieldName="Login"
        placeholder="exmple@exemplo.com"
        onChange={ (e) => setEmail(e.target.value) }
      />

      <input
        datatestid="common_login__input-password"
        type="password"
        selector="password"
        fieldName="Senha"
        placeholder="Min. 6 digítos"
        onChange={ (e) => setPassword(e.target.value) }
      />

      <button
        datatestid="common_login__button-login"
        type="submit"
        name="login"
        disabled={ checkLogin(email, password) }
        onClick={ onLoginBtnClick }
      >
        Login
      </button>
      <button
        datatestid="common_login__button-register"
        type="submit"
        name="login"
        disabled={ false }
        onClick={ () => { history.push('/register'); } }
      >
        Ainda não tenho conta
      </button>

      <span data-testid="common_login__element-invalid-email">
        {errorMessage}
      </span>
    </form>

  );
}

export default Login;
