// src/components/UserModal.js
import React, { useState } from 'react';

const UserModal = ({ show, onClose, onSave, editUser }) => {
  const [user, setUser] = useState(
    editUser || { name: '', email: '', role: '', status: 'Active' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(user);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{editUser ? 'Edit User' : 'Add User'}</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={user.role}
          onChange={handleChange}
        />
        <label>Status:</label>
        <select
          name="status"
          value={user.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UserModal;
