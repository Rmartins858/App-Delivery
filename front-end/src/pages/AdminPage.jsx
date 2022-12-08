import React, { useState, useEffect } from 'react';
import AdminRegister from '../components/AdminRegister';
import Header from '../components/Header';
import TableUsers from '../components/TableUsers';
import { apiGet, apiRemove, apiPost } from '../services/requests';
import getToken from '../utils/getToken';

function AdminPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [usersList, setUsersList] = useState([]);
  const userDataEx = {
    name: '',
    role: 'seller',
    email: '',
    password: '',
  };
  const [newUserData, setNewUserData] = useState(userDataEx);

  const getUsers = () => {
    apiGet('/users', getToken())
      .then((res) => setUsersList(res));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (id) => {
    try {
      apiRemove(`/users/${id}`, getToken())
        .then(() => getUsers());
    } catch (e) {
      console.log(e.message);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await apiPost('/admregister', newUserData, getToken());
      getUsers();
    } catch (error) {
      const mensagem = error.response.data;
      setErrorMessage(mensagem);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h2>Cadastrar novo usuário</h2>
        <AdminRegister
          errorMessage={ errorMessage }
          setNewUserData={ setNewUserData }
          createUser={ createUser }
          newUserData={ newUserData }
        />
      </div>
      <div>
        <h2>Lista de usuários</h2>
        <TableUsers
          usersList={ usersList }
          deleteUser={ deleteUser }
        />
      </div>
    </div>
  );
}

export default AdminPage;
