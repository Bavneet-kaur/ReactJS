// UsersList.js
import React from 'react';

function Users() {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  return (
    <div className="m-6">
      <ul>
        {users.map((user) => (
          <li key={user.id} className="text-lg inline text-gray-700">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
