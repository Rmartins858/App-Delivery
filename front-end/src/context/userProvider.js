import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import userContext from './userContext';

export default function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const contextUser = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
  }), [email, password, name]);

  return (
    <userContext.Provider value={ contextUser }>
      { children }
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
