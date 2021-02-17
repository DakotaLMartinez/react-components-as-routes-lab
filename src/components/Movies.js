import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => 
        <div>
          <h3>{movie.title}</h3>
          <p>Length: {movie.time} minutes</p>
          <ul>
            {movie.genres.map(genre =>
              <li>{genre}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
// [
//   {
//     title: 'Doctor Strange',
//     time: 115,
//     genres: ['Action', 'Adventure', 'Fantasy'],
//     metascore: 74
//   },
//   {
//     title: 'Trolls',
//     time: 92,
//     genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy']
//   },
//   {
//     title: 'Jack Reacher: Never Go Back',
//     time: 118,
//     genres: ['Action', 'Adventure', 'Crime', 'Mystery', 'Thriller']
//   }
// ]