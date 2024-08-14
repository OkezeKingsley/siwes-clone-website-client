// SupervisorDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SupervisorDashboard.css';

const SupervisorDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/supervisor/dashboard')
      .then(response => {
        console.log(response.data); // Log the response data to the console
        setStudents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Supervisor Dashboard</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Matric Number</th>
            <th>Phone Number</th>
            <th>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {students && students.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.matricNumber}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.accountType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupervisorDashboard;