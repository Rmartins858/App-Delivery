import React from 'react';
import AdminRegister from '../components/AdminRegister';
import Header from '../components/Header';

function AdminPage() {
  return (
    <div>
      <Header />
      <AdminRegister />
      <div>
        <h2>Cadastrar novo usuário</h2>
      </div>
    </div>
  );
}

export default AdminPage;
