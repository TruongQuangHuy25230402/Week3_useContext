// UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext); // Lấy dữ liệu từ UserContext

  return (
    <div>
      <h1>Thông tin người dùng:</h1>
      <p>Tên: {user.name}</p>
      <p>Tuổi: {user.age}</p>
    </div>
  );
};

export default UserProfile;
