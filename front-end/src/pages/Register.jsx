import React from 'react';
// import { useHistory } from 'react-router-dom';
import Genericinput from '../components/Genericinput';
import Button from '../components/Button';

function Register() {
  // const history = useHistory();

  return (
    <form>
      <Genericinput
        type="email"
        selector="email"
        fieldName="Nome"
        placeholder="Seu nome"
        // setter={ setEmail }
        datatestid="common_register__input-email "
      />

      <Genericinput
        type="email"
        selector="email"
        fieldName="Email"
        placeholder="exmple@exemplo.com"
        // setter={ setEmail }
        datatestid="common_register__input-email "
      />

      <Genericinput
        type="password"
        selector="password"
        fieldName="Senha"
        placeholder="Min. 6 digítos"
        // setter={ setPassword }
        datatestid="common_register__input-password"
      />

      <Button
        datatestid="common_register__button-register"
        type="submit"
        name="register"
        disabled={ checkLogin() }
        // onClick={ onLoginBtnClick }
        text="Cadastrar"
      />
    </form>
  );
}

export default Register;
