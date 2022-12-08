import PropTypes from 'prop-types';
import React from 'react';

function TableUsers({ usersList, deleteUser }) {
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
                data-testid={
                  `admin_manage__element-user-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `admin_manage__element-user-table-name-${index}`
                }
              >
                { name }
              </td>
              <td
                data-testid={
                  `admin_manage__element-user-table-email-${index}`
                }
              >
                { email }
              </td>
              <td>
                <span
                  data-testid={
                    `admin_manage__element-user-table-role-${index}`
                  }
                >
                  {role}
                </span>
              </td>
              <td>
                <button
                  type="button"
                  data-testid={
                    `admin_manage__element-user-table-remove-${index}`
                  }
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
