import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Genericinput from '../components/Genericinput';

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
      <button type="button" onClick={ () => console.log({ email, password }) }>
        Entrar
      </button>
    </form>
  );
}

export default Register;
