// Sidebar.js
import React from 'react';
import { FaHome, FaFileAlt, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import '../styles/Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar({ setCurrentView }) {
    const navigate = useNavigate();

    const handleSignout = async () => {
        sessionStorage.removeItem("token");
        navigate('/');
    };

    const handleViewChange = (view) => {
        console.log(`Changing view to: ${view}`); // Debugging log
        sessionStorage.setItem("currentView", view);
        setCurrentView(view);
    };

    return (
        <div className="sidebar-container">
            <p className="sidebar-head">Task Menu</p>
            <hr className="underline" />
            <div>
                <ul className="sidebar-list">
                    <li onClick={() => handleViewChange('home')}>
                        <FaHome className="icon" />
                        <p className="sidebar-text">Home</p>
                    </li>
                    <li onClick={() => handleViewChange('generalPrintout')}>
                        <FaFileAlt className="icon" />
                        <p className="sidebar-text">General Printout</p>
                    </li>
                    <li onClick={() => handleViewChange('siwesInfo')}>
                        <FaInfoCircle className="icon" />
                        <p className="sidebar-text">Siwes Info</p>
                    </li>
                    <li onClick={handleSignout}>
                        <FaSignOutAlt className="icon" />
                        <p className="sidebar-text">Sign out</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
