import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Genericinput from '../components/Genericinput';
import userContext from '../context/userContext';
import checkLogin from '../utils/checkLogin';
import { toLogin } from '../services/requests';

function Login() {
  const history = useHistory();
  const { email, password, setEmail, setPassword } = useContext(userContext);

  const onLoginBtnClick = async () => {
    const { token } = await toLogin('/login', { email, password });
    console.log(token);

    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/batatas');
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

      <span datatestid="common_login__element-invalid-email"> </span>
    </form>
  );
}

export default Login;
