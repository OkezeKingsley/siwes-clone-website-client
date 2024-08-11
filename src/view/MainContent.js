import React, { useState, useEffect } from 'react';
import '../styles/MainContent.css'; // Rename this CSS file if needed
import Home from '../components/Home';
import GeneralPrintout from '../components/GeneralPrintOut'; // Ensure correct import
import SiwesInfo from '../components/SiwesInfo'; // Ensure correct import

function MainContent({ currentView }) {
    return (
        <div className="main-content-container">
            {currentView === 'home' && <Home />}
            {currentView === 'generalPrintout' && <GeneralPrintout />}
            {currentView === 'siwesInfo' && <SiwesInfo />}
            {/* Add other components as needed */}
        </div>
    );
}


export default MainContent;
