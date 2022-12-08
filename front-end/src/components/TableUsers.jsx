import PropTypes from 'prop-types';
import React from 'react';

function TableUsers({ usersList, deleteUser }) {
  const datatestid = 'admin_manage__element-user-table-';
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Item
            </th>
            <th>
              Nome
            </th>
            <th>
              E-mail
            </th>
            <th>
              Tipo
            </th>
            <th>
              Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {usersList.length && usersList.map(({ name, id, email, role }, index) => (
            <tr key={ id }>
              <td
                data-testid={ `${datatestid}item-number-${index}` }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `${datatestid}name-${index}` }
              >
                { name }
              </td>
              <td
                data-testid={ `${datatestid}email-${index}` }
              >
                { email }
              </td>
              <td>
                <span data-testid={ `${datatestid}role-${index}` }>
                  { role }
                </span>
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `${datatestid}remove-${index}` }
                  onClick={
                    () => deleteUser(id)
                  }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableUsers.propTypes = {
  deleteUser: PropTypes.func,
  usersList: PropTypes.shape({}),
}.isRequired;

export default TableUsers;
