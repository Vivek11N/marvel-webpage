import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import WelcomePage from './WelcomePage'; // Import WelcomePage
import Heading from './heading';
import MarvelInfo from './marvelinfo';
import characters from './characterdata';
import MarvelMovies from './MarvelMovies'; // Import the new component

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCharacter, setActiveCharacter] = useState(null);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCharacterClick = (character) => {
    setActiveCharacter(character);
  };

  const closeCard = () => {
    setActiveCharacter(null);
  };

  return (
    <div className="background">
      <div className="App">
        {/* Sidebar */}
        <div className="sidebar">
          <Link to="/" className="sidebar-link">
            Home
          </Link>
          <Link to="/movies" className="sidebar-link">
             Movies
          </Link>
        </div>

        {activeCharacter && (
          <div className="overlay" onClick={closeCard}>
            <div className="dropdown-card" onClick={(e) => e.stopPropagation()}>
              <img src={activeCharacter.image} alt={activeCharacter.name} />
              <h3>{activeCharacter.name}</h3>
              <p>{activeCharacter.details}</p>
              <button className="button" onClick={closeCard}>
                Close
              </button>
            </div>
          </div>
        )}

        <div className={`content-container ${activeCharacter ? 'blurred' : ''}`}>
          <Heading />
          <div className="container">
            <img src="/images/marvel stu.png" alt="Marvel Studios Logo" className="logo" />
            <MarvelInfo />
          </div>
        </div>

        <div className={`content-container ${activeCharacter ? 'blurred' : ''}`}>
          <div className="container">
            <div className="search-section">
              <img src="/images/125.png" alt="Avengers Logo" className="logo" />
              <div>
                <input
                  type="text"
                  placeholder="Search Character"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-bar"
                />
                <img src="./images/seicon.png" alt="search-icon" className="search-icon" />
              </div>
            </div>

            <div className="grid">
              {filteredCharacters.length > 0 ? (
                filteredCharacters.map((character) => (
                  <div
                    className="grid-item"
                    key={character.name}
                    onClick={() => handleCharacterClick(character)}
                  >
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                  </div>
                ))
              ) : (
                <p>No characters found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MarvelMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
