// src/pages/SupervisorLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SupervisorLogin.css';
import Header from '../components/Header';

const SupervisorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/supervisor/login', { email, password });
      console.log('Login response:', response.data);
      // Store the token or user data in local storage or context
      localStorage.setItem('supervisorToken', response.data.token);
      navigate('/supervisor-dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <Header />
      <div className="supervisor-login-container">
        <h2>Supervisor Login</h2>
        <form onSubmit={handleSubmit} className="supervisor-login-form">
          <div className="supervisor-form-group">
            <label>Email:</label>
            <div className="supervisor-form-input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="supervisor-form-input"
              />
            </div>
          </div>
          <div className="supervisor-form-group">
            <label>Password:</label>
            <div className="supervisor-form-input-container">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="supervisor-form-input"
              />
            </div>
          </div>
          {error && <p className="supervisor-error-message">{error}</p>}
          <button type="submit" className="supervisor-login-button">Login</button>
        </form>
        <p style={{margin: 'auto', textAlign: 'center'}}>Don't have an account? <b onClick={() => navigate("/supervisor-sign-up")}>Sign up</b></p>
      </div>
    </div>
  );
};
export default SupervisorLogin;