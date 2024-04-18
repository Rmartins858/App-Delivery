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
    <div className='bg-gray-300 flex min-h-screen  items-center justify-center '>
      
      <form className='bg-white max-w-md p-10 rounded-xl shadow-xl z-20'>
      <h1 className='text-4xl text-center font-bold mb-10'>Login</h1>
      <input className="block p-2 bg-gray-200 rounded w-full focus:outline-none focus:bg-gray-300"
        datatestid="common_login__input-email"
        type="email"
        selector="email"
        fieldName="Login"
        placeholder="exemplo@exemplo.com"
        onChange={ (e) => setEmail(e.target.value) }
      />

      <input className="block p-2 bg-gray-200 rounded w-full focus:outline-none focus:bg-gray-300 mt-2"
        datatestid="common_login__input-password"
        type="password"
        selector="password"
        fieldName="Senha"
        placeholder="Min. 6 digítos"
        onChange={ (e) => setPassword(e.target.value) }
      />

      <button className='block mt-10 bg-green-700 w-full p-2 rounded text-white font-bold hover:bg-green-900'
        datatestid="common_login__button-login"
        type="submit"
        name="login"
        disabled={ checkLogin(email, password) }
        onClick={ onLoginBtnClick }
      >
        Login
      </button >
      <button className='block mt-10 bg-gray-500 w-full p-2 rounded text-white font-bold hover:bg-gray-600'
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

    </div>
    

  );
}

export default Login;
