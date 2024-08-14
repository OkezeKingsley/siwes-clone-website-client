// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/StudentLogin';
import SignUp from './pages/StudentSignUp';
import SupervisorLogin from './pages/SupervisorLogin';
import SupervisorSignUp from './pages/SupervisorSignUp';
import SupervisorDashboard from './pages/SupervisorDashboard';
// Set the base URL for Axios
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// console.log('default url is', process.env.REACT_APP_BASE_URL)
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
                 <Route path="/supervisor-login" element={<SupervisorLogin />} />   
                 <Route path="/supervisor-sign-up" element={<SupervisorSignUp />} /> 
                 <Route path="/supervisor-dashboard" element={<SupervisorDashboard />} />
            </Routes>
         </Router>
     
    );
  }



export default App;



