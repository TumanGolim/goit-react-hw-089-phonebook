import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Navigation from './Navigation';
import Register from './Register';
import Login from './Login';
import { fetchContacts } from './contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.user !== null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
          <h1 style={{ color: '#333' }}>Phonebook</h1>
          <Navigation />

          <Routes>
            {isAuthenticated && (
              <Route path="/contacts" element={<ContactForm />}>
                <Route index element={<h2>Contacts</h2>} />
                <Route index element={<Filter />} />
                <Route index element={<ContactList />} />
              </Route>
            )}
            
            {!isAuthenticated && (
              <>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
