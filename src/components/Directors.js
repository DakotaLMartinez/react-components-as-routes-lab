import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => 
        <div>
          <h3>{director.name}</h3>
          <ul>
            {director.movies.map(movie =>
              <li>{movie}</li>  
            )}
          </ul>
          {/* <ul>
            {movie.genres.map(genre =>
              <li>{genre}</li>
            )}
          </ul> */}
        </div>
      )}
    </div>
  );
}

// let directors = [
//   {
//     name: 'Scott Derrickson',
//     movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose']
//   },
//   {
//     name: 'Mike Mitchell',
//     movies: ['Trolls', 'Alvin and the Chipmunks: Chipwrecked', 'Sky High']
//   },
//   {
//     name: 'Edward Zwick',
//     movies: ['Jack Reacher: Never Go Back', 'Blood Diamon', 'The Siege']
//   }
// ]

// module.exports = {
//   movies,
//   actors,
//   directors
// }


export default Directors
