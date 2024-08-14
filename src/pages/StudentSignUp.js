// src/SignUpForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/StudentSignUp.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    matricNumber: '',
    phoneNumber: '',
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
      const response = await axios.post('/student/sign-up', formData);
      console.log('Response from server:', response.data);
      // Handle success (e.g., show a success message or redirect)
      navigate("/");
    } catch (err) {
      console.error('Error during sign-up:', err);
      setError('Sign-up failed. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <form className="student-sign-up-form" onSubmit={handleSubmit}>
        <div className="student-sign-up-header">
          <span className="student-sign-up-icon">&#128104;</span>
          <h2>New Account Sign Up</h2>
        </div>
        <div className="student-sign-up-form-content">
          <div className="student-sign-up-form-group" style={{ display: 'flex' }}>
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
          {/* Rest of the form */}
          <button className="student-sign-up-submit-button" type="submit">
            Sign Up
          </button>
        </div>
        <div className="student-sign-up-bottom-instruction-container">
          <p>
            Already have an account? Click here to <b style={{ color: 'green' }}
              onClick={() => navigate("/")}>Login</b>!
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;