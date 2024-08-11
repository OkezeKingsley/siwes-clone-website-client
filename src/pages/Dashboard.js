import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import '../styles/Dashboard.css';
import MainContent from "../view/MainContent";

function Dashboard() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const storedView = sessionStorage.getItem("currentView");

    if (storedView === null || typeof storedView === "undefined") {
        sessionStorage.setItem("currentView", view);
        setView('home');
    } else {
        if (storedView === 'home') {
            setView('home');
        } else if (storedView === 'generalPrintout') {
            setView('generalPrintout');
        } else if (storedView === 'siwesInfo') {
            setView('siwesInfo');
        }
    }
}, []);

  useEffect(() => {
      sessionStorage.setItem("currentView", view);
  }, [view]);

  return (
      <div className="dashboard-container">
          <Header />
          <div className="dashboard-content">
              <MainContent currentView={view} />
              <Sidebar setCurrentView={setView} />
          </div>
      </div>
  );
}

export default Dashboard;
