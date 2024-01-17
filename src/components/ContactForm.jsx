import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from './contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') {
      alert('Name and number cannot be empty');
      return;
    }

    const isContactUnique = contacts.every(
      contact => contact.name.toLowerCase() !== name.toLowerCase()
    );
    if (!isContactUnique) {
      alert('Contact with this name already exists');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
    alert('Contact added successfully');
  };

  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
      }}
    >
      <h3>Contact Form</h3>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label
          htmlFor="number"
          style={{ display: 'block', marginBottom: '5px' }}
        >
          Number:
        </label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={handleAddContact}
          style={{
            padding: '8px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
          }}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
