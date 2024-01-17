import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Navigation from './Navigation';
import Register from './Register';
import Login from './Login';
import { fetchContacts } from './contactsSlice';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchContacts());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
          <h1 style={{ color: '#333' }}>Phonebook</h1>
          <Navigation />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<ContactForm />}>
              <Route index element={<h2>Contacts</h2>} />
              <Route index element={<Filter />} />
              <Route index element={<ContactList />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;