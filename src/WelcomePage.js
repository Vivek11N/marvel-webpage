import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // Create a separate CSS file for styling

function WelcomePage() {
  return (
    
    <div className="welcome-container">
      
     <div className="welcome-content">
        <h1 >WELCOME TO THE MARVEL CINEMATIC UNIVERSE</h1>
        <p>Explore the amazing characters, stories, and adventures from the Marvel Universe.</p>
        <Link to="/home" className="explore-button">Explore Now</Link>
      </div>
    </div>
    
  );
}

export default WelcomePage;
