// UserContext.js
import React, { createContext, useState } from 'react';

// Tạo Context
const UserContext = createContext();

// Tạo Provider để cung cấp dữ liệu cho các thành phần con
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Huy', age: 22 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
