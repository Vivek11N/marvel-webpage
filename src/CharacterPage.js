import React from 'react';
import { useParams } from 'react-router-dom';
import './CharacterPage.css'; // Ensure CSS is applied properly
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import'./characterdata';
function CharacterPage() {
  const { name } = useParams(); // Get the character name from the URL
  const character = character.find((character) => character.name === name); // Find the character data

  if (!character) {
    return <p>Character not found</p>; // Handle case if character is not found
  }

  return (
    <div className="character-page">
      <h1>{character.name}</h1>
      <div className="character-details">
        <img src={character.image} alt={character.name} className="character-image" />
        <div className="character-info">
          <p><strong>Real Name:</strong> {character.realName}</p>
          <p><strong>Power:</strong> {character.power}</p>
          <p>{character.description}</p>
        </div>
      </div>
      <Link to="/home" className="back-to-home-button">
        Back to Home
      </Link>
    </div>
  );
}

export default CharacterPage;
