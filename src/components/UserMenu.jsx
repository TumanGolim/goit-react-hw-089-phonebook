// UserMenu.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authSlice'; // Update the path accordingly

const UserMenu = () => {
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (!authState || !authState.user) {
    // Handle the case where auth state or user is not yet loaded
    return <div>Loading...</div>;
  }

  const { user } = authState;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="user-menu">
      <span>Welcome, {user.email}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
