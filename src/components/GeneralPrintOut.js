import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/GeneralPrintOut.css';

function GeneralPrintOut() {

  const [studentFirstName, setStudentFirstName] = useState('');
  const [studentLastName, setStudentLastName] = useState('');
  const [studentMatricNumber, setStudentMatricNumber] = useState('');
  const [studentAccountType, setStudentAccountType] = useState('');
    useEffect(() => {
        setStudentFirstName(sessionStorage.getItem("firstName"));
        setStudentLastName(sessionStorage.getItem('lastName'));
        setStudentMatricNumber(sessionStorage.getItem('matricNumber'));
        setStudentAccountType(sessionStorage.getItem('accountType'));
    }, []);

  // Function to handle file download
  const downloadFile = async (fileType) => {
    try {
      const response = await axios.get(`/download-${fileType}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileType === 'logbook' ? 'siwes-logbook.pdf' : 'siwes-monthly-assessment.docx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(`Error downloading the file from /download-${fileType}:`, error);
    }
  };

  return (
    <div className="general-print-out-container">
      <h3 className="general-print-out-header-text">Registered User</h3>
      <hr className="underline" />
      <div className="general-print-out-user-info">
        <p>Logged in as: <strong style={{ color: 'green' }}>
            <b style={{ paddingRight: '5px' }}>{studentLastName}</b>
            <b>{studentFirstName}</b>
            </strong></p>
      </div>

      <div className="general-print-out-user-details">
        <p>Matric Number: {studentMatricNumber}</p>
        <p>||</p>
        <p>Account type: {studentAccountType}</p>
      </div>

      <div>
        <p className="general-print-out-note-text">
          Note you are to submit a copy of the signed registration form at Siwes unit, Main Campus, Osogbo
        </p>
        <div className="general-print-out-print-form">
          <span className="checkmark">&#10004;</span>
          <p className="general-print-out-print-text" onClick={() => downloadFile('logbook')}>
            Print your SIWES Log book
          </p>
        </div>
        <div className="general-print-out-print-form">
          <span className="checkmark">&#10004;</span>
          <p className="general-print-out-print-text" onClick={() => downloadFile('assessment')}>
            Print your SIWES monthly assessment form
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeneralPrintOut;
