import React from 'react';

const UserTable = ({ users, onEdit, onDelete }) => {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      onDelete(id);
    }
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Skillsets</th>
          <th>Hobby</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.skillsets}</td>
            <td>{user.hobby}</td>
            <td>
              <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(user)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
