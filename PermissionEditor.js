// src/components/PermissionEditor.js
import React from 'react';

const permissionsList = ['Read', 'Write', 'Delete', 'Update'];

const PermissionEditor = ({ role, onChange }) => {
  const handleToggle = (perm) => {
    const updatedPermissions = role.permissions.includes(perm)
      ? role.permissions.filter((p) => p !== perm)
      : [...role.permissions, perm];
    onChange({ ...role, permissions: updatedPermissions });
  };

  return (
    <div>
      <h3>Manage Permissions</h3>
      {permissionsList.map((perm) => (
        <div key={perm}>
          <label>
            <input
              type="checkbox"
              checked={role.permissions.includes(perm)}
              onChange={() => handleToggle(perm)}
            />
            {perm}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PermissionEditor;
