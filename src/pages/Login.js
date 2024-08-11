// src/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        matricNumber: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
            const response = await axios.post('/login', formData);
            const { firstName, lastName, matricNumber, token, accountType } = response.data;

            // Store user details in session storage
            sessionStorage.setItem('firstName', firstName);
            sessionStorage.setItem('lastName', lastName);
            sessionStorage.setItem('matricNumber', matricNumber);
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('accountType', accountType);

            // Navigate to the dashboard
            navigate('/dashboard');
        } catch (err) {
            console.error('Error during login:', err);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="login-container">
            <Header />
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Registered User Login</h2>
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
                    <button type="submit">Login</button>
                </form>
            </div>
            {/* <p>IMPORTANT NOTICE</p>
            <p>
                Only Students who have successfully created their accounts can Sign In HERE.
                If you have not completed your new account registration, Click HERE to do so NOW!
            </p> */}
        </div>
    );
};

export default Login;
