import React from 'react';
import AdminRegister from '../components/AdminRegister';
import Header from '../components/Header';
import TableUsers from '../components/TableUsers';

function AdminPage() {
  return (
    <div>
      <Header />
      <div>
        <h2>Cadastrar novo usuário</h2>
        <AdminRegister />
      </div>
      <div>
        <h2>Lista de usuários</h2>
        <TableUsers />
      </div>
    </div>
  );
}

export default AdminPage;
