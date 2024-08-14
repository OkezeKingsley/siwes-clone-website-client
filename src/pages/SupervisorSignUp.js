// src/pages/SupervisorSignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SupervisorSignUp.css';

const SupervisorSignUp = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/supervisor/sign-up', { name, contact, email, password });
      console.log('Sign up response:', response.data);
      navigate('/supervisor-login');
    } catch (err) {
      console.error('Sign up error:', err);
      setError('Invalid input or email already exists');
    }
  };

  return (
    <div className="supervisor-signup-wrapper">
      <h2 style={{textAlign: 'center'}}>Supervisor Sign Up</h2>
      <form onSubmit={handleSubmit} className="supervisor-signup-form">
        <div className="supervisor-signup-group">
          <label>Name:</label>
          <div className="supervisor-signup-input-container">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="supervisor-signup-input"
            />
          </div>
        </div>
        <div className="supervisor-signup-group">
          <label>Contact:</label>
          <div className="supervisor-signup-input-container">
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="supervisor-signup-input"
            />
          </div>
        </div>
        <div className="supervisor-signup-group">
          <label>Email:</label>
          <div className="supervisor-signup-input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="supervisor-signup-input"
            />
          </div>
        </div>
        <div className="supervisor-signup-group">
          <label>Password:</label>
          <div className="supervisor-signup-input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="supervisor-signup-input"
            />
          </div>
        </div>
        {error && <p className="supervisor-signup-error">{error}</p>}
        <button type="submit" className="supervisor-signup-button">Sign Up</button>
      </form>
      <p style={{margin: 'auto', textAlign: 'center'}}>
        Already have an account? <b onClick={() => navigate("/supervisor-login")}>Login</b>
        </p>
    </div>
  );
};
export default SupervisorSignUp;