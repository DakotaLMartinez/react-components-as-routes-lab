import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
        <div>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map(movie =>
              <li>{movie}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// let actors = [
//   {
//     name: 'Benedict Cumberbatch',
//     movies: ['Doctor Strange', 'The Imitation Game', 'Black Mass']
//   },
//   {
//     name: 'Justin Timberlake',
//     movies: ['Trolls', 'Friends with Benefits', 'The Social Network']
//   },
//   {
//     name: 'Anna Kendrick',
//     movies: ['Trolls', 'Pitch Perfect', 'Into The Wood']
//   },
//   {
//     name: 'Tom Cruise',
//     movies: ['Jack Reacher: Never Go Back', 'Mission Impossible 4', 'War of the Worlds']
//   }
// ]

export default Actors;
