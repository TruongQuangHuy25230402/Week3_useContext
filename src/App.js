// App.js
import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <UserProfile />
        <UpdateUser />
      </div>
    </UserProvider>
  );
};

export default App;
