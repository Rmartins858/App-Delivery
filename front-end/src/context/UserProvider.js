import { createContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  return (
    <UserContext.Provider value={ contextUser }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
