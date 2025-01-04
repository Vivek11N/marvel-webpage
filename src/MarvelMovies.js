import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './MarvelMovies.css';

const movies = [
  { title: 'IRON MAN', image: '/images/movie1.jpg', year: 2008 },
  { title: 'THE INCREDIBLE HULK', image: '/images/movie2.jpg', year: 2008 },
  { title: 'IRON MAN 2', image: '/images/movie3.jpg', year: 2010 },
  { title: 'THOR', image: '/images/movie5.jpg', year: 2011 },
  { title: 'CAPTAIN AMERICA :THE FIRST AVENGER', image: '/images/movie6.jpg', year: 2011 },
  { title: 'MARVEL:THE AVENGERS', image: '/images/movie 7.jpg', year: 2012 },
  { title: 'IRON MAN 3', image: '/images/movie8.jpg', year: 2013 },
  { title: 'THOR:THE DARK WORLD', image: '/images/movie9.jpg', year: 2013 },
  { title: 'CAPTAIN AMERICA :THE WINTER SOLDIER', image: '/images/movie10.jpg', year: 2014 },
  { title: 'GUARDIANS OF THE GALAXY:VOLUME 1', image: '/images/movie11.jpg', year: 2014 },
  { title: 'AVENGERS:AGE OF ULTRON', image: '/images/movie12.jpg', year: 2015 },
  { title: 'ANT-MAN', image: '/images/movie13.jpg', year: 2015 },
  { title: 'CAPTAIN AMERICA:CIVIL WAR', image: '/images/movie14.jpg', year: 2016 },
  { title: 'DOCTOR STRANGE', image: '/images/movie15.jpg', year: 2016 },
  { title: 'GUARDIANS OF THE GALAXY :VOL 2', image: '/images/movie4.jpg', year: 2017 },
  { title: 'SPIDERMAN:HOME COMING', image: '/images/movie16.jpg', year: 2017 },
  { title: 'THOR:RAGNAROK', image: '/images/movie17.jpg', year: 2017 },
  { title: 'BLACK PANTHER', image: '/images/MOVIE18.jpg', year: 2018 },
  { title: 'AVENGERS:INFINITY WAR', image: '/images/movie19.jpg', year: 2018 },
  { title: 'ANT-MAN AND THE WASP', image: '/images/movie20.jpg', year: 2018 },
  { title: 'CAPTAIN MARVEL', image: '/images/movie21.jpg', year: 2019 },
  { title: 'AVENGERS:END GAME', image: '/images/movie22.jpg', year: 2019 },
  
];

function MarvelMovies() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -840, behavior: 'smooth' }); // Scroll by 4 items (200px + gap) * 4
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 840, behavior: 'smooth' }); // Scroll by 4 items (200px + gap) * 4
  };

  return (
    <div className="movies-container">
      <h1>Marvel Movies</h1>
      <div className="slider-controls">
        <button onClick={scrollLeft} className="scroll-button"> ←  </button>
        <button onClick={scrollRight} className="scroll-button"> →</button>
      </div>
      <div className="movies-grid" ref={scrollRef}>
        {movies.map((movie) => (
          <div className="movie-card" key={movie.title}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <h3>{movie.year}</h3>
          </div>
        ))}
      </div>
      <Link to="/home" className="back-button">
        Back to Home
      </Link>
    </div>
  );
}

export default MarvelMovies;
