import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const Navigation = () => {
  return (
    <nav
      style={{ marginBottom: '20px', background: '#f5f5f5', padding: '10px' }}
    >
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline-block', marginRight: '10px' }}>
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: '#333' }}
          >
            Register
          </Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '10px' }}>
          <Link to="/login" style={{ textDecoration: 'none', color: '#333' }}>
            Login
          </Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '10px' }}>
          <Link
            to="/contacts"
            style={{ textDecoration: 'none', color: '#333' }}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <UserMenu />
    </nav>
  );
};

export default Navigation;
