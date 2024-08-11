// src/SignUpForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const SignUp = () => {
  const navigate= useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    matricNumber: '',
    accountType: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/sign-up', formData);
      console.log('Response from server:', response.data);
      // Handle success (e.g., show a success message or redirect)
      navigate("/")
    } catch (err) {
      console.error('Error during sign-up:', err);
      setError('Sign-up failed. Please try again.');
    }
  };

  return (
    <div>
    <Header />
    <form className="signup-form" onSubmit={handleSubmit}>
      
      <div className="header">
        <span className="student-icon">&#128104;</span>
        <h2>New Account Sign Up</h2>
      </div>
      <div className="form-content">
        <div className="form-group" style={{ display: 'flex' }}>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="matricNumber">Matric Number:</label>
          <input
            type="text"
            id="matricNumber"
            name="matricNumber"
            value={formData.matricNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountType">Account Type:</label>
          <select
            id="accountType"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
          >
            <option value="">Select Account Type</option>
            <option value="siwes">SIWES</option>
            <option value="swep">SWEP</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </div>
      <div className="sign-up-bottom-instruction-container">
         <p>
            Already have an account? Click here to <b style={{color: 'green'}}
            onClick={() => navigate("/")}>Login</b>!
         </p>
       </div>
    </form>
    </div>
  );
};

export default SignUp;
