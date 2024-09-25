// UpdateUser.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UpdateUser = () => {
  const { user, setUser } = useContext(UserContext); // Lấy dữ liệu và hàm cập nhật từ UserContext

  const updateName = () => {
    setUser({ ...user, name: 'Quang Huy' }); // Cập nhật tên người dùng
  };

  return (
    <div>
      <h2>Cập nhật thông tin người dùng</h2>
      <button onClick={updateName}>Cập nhật tên</button>
    </div>
  );
};

export default UpdateUser;
