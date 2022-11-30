import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Genericinput from '../components/Genericinput';
import userContext from '../context/userContext';

function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // FAZER A FUNÇÃO DE FORMATAÇÃO DO EMAIL E LIMITE DE SENHA
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <form>
      <Genericinput
        type="email"
        selector="email"
        fieldName="Login"
        placeholder="exmple@exemplo.com"
        setter={ setEmail }
      />

      <Genericinput
        type="password"
        selector="password"
        fieldName="Senha"
        placeholder="Min. 6 digítos"
        setter={ setPassword }
      />
      <Button
        dataTestId="common_login__button-login"
        type="submit"
        name="login"
        disabled={ isDisabled }
        text="Login"
      />
    </form>
  );
}

export default Login;
