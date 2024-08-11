// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Set the base URL for Axios
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
console.log('default url is', process.env.REACT_APP_BASE_URL)
function App() {
    return (
         <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="sign-up" element={<SignUp />} />
                 <Route
                    path="dashboard"
                    element={<ProtectedRoute element={Dashboard} />}
                    />
            </Routes>
         </Router>
     
    );
  }



export default App;



