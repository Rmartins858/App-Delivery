import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import userContext from './userContext';

export default function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const contextUser = useMemo(() => ({
    products,
    setProducts,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
  }), [email, password, name, products]);

  return (
    <userContext.Provider value={ contextUser }>
      { children }
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
