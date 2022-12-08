import { useHistory } from 'react-router-dom';
import Button from './Button';
import getRole from '../utils/getRole';

function Header() {
  const history = useHistory();
  const { name } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    history.push('/login');
  };

  return (
    <header>
      <nav>
        {
          getRole() === 'customer' && (
            <Button
              datatestid="customer_products__element-navbar-link-products"
              type="button"
              text="Produtos"
              name="orders"
              disabled={ false }
              onClick={ () => { history.push('/customer/products'); } }
            />
          )
        }
        <Button
          datatestid="customer_products__element-navbar-link-orders"
          type="button"
          text={ getRole() === 'customer' ? 'Meus pedidos' : 'Pedidos' }
          name="orders"
          disabled={ false }
          onClick={ () => { history.push(`/${getRole()}/orders`); } }
        />
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </span>
        <Button
          datatestid="customer_products__element-navbar-link-logout"
          type="button"
          text="Sair"
          name="logout"
          disabled={ false }
          onClick={ logout }
        />
      </nav>
    </header>
  );
}

export default Header;
