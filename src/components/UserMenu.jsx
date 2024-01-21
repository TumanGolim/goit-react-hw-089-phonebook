import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authSlice';

const UserMenu = () => {
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (!authState.user) {
    return null; 
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
