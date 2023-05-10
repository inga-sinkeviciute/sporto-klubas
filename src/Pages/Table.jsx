import axios from "axios";
import React, { useState } from "react";
import { EditUser } from "./Edit/EditUser";

export const Table = ({ users }) => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (user) => {
    axios.delete(`http://localhost:5000/api/users/${user._id}`).then(() => {
      window.location.reload();
    });
  };

  const handleClose = () => {
    setEditingUser(null);
  };

  return (
    <div className="container">
      <table className="Table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{new Date(user.startDate).toLocaleDateString()}</td>
              <td>{new Date(user.endDate).toLocaleDateString()}</td>
              <td>
                <button className="btn" onClick={() => handleEdit(user)}>
                  Edit
                </button>
              </td>
              <td>
                <button className="btn" onClick={() => handleDelete(user)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingUser && <EditUser user={editingUser} onClose={handleClose} />}
    </div>
  );
};
