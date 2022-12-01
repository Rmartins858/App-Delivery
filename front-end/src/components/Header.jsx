import { useHistory } from 'react-router-dom';
import Button from './Button';

function Header() {
  const history = useHistory();
  const { name } = JSON.parse(localStorage.getItem('name'));
  console.log(name);
  return (
    <header>
      <nav>
        <Button
          datatestid="customer_products__element-navbar-link-products"
          type="button"
          text="Produtos"
          name="orders"
          disabled={ false }
          onClick={ () => { history.push('/customer/products'); } }
        />
        <Button
          datatestid="customer_products__element-navbar-link-orders"
          type="button"
          text="Meus Pedidos"
          name="orders"
          disabled={ false }
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
          name="logout"
          disabled={ false }
          onClick={ () => { history.push('/login'); } }
        />
      </nav>
    </header>
  );
}

export default Header;
