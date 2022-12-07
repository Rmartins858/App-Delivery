import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ condition }) {
  const history = useHistory();
  const { name } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

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
        { condition && (
          <Button
            datatestid="customer_products__element-navbar-link-orders"
            type="button"
            text="Meus Pedidos"
            name="orders"
            disabled={ false }
            onClick={ () => { history.push('/customer/orders'); } }
          />
        )}
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

Header.propTypes = {
  condition: PropTypes.bool.isRequired,
};

export default Header;
