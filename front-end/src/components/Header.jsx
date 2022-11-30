import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import userContext from '../context/userContext';

function Header() {
  const history = useHistory();
  const { name } = useContext(userContext);

  return (
    <header>
      <nav>
        <Button
          datatestid="customer_products__element-navbar-link-products"
          type="button"
          text="Produtos"
          name="orders"
          onClick={ () => { history.push('/customer/products'); } }
        />
        <Button
          datatestid="customer_products__element-navbar-link-orders"
          type="button"
          text="Meus Pedidos"
          name="orders"
          onClick={ () => { history.push('/customer/orders'); } }
        />
        <span
          data-testid="customer_products__element-navbar-link-products"
        >
          { name }
        </span>
        <Button
          datatestid="customer_products__element-navbar-link-logout"
          type="button"
          text="Sair"
          name="orders"
          onClick={ () => { history.push('/login'); } }
        />
      </nav>
    </header>
  );
}

export default Header;
