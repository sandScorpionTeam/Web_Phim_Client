import React from 'react';
import Movie from './movie-item';
import "./movie.scss";
import { useMovies } from "state/movies";

const Movies = () => {
  const movies = useMovies();
  
  return (
    <div className="movies-list">
      {movies &&
        movies.map((movie, index) => {
          return <Movie key={index} data={movie} />
        })
      }
    </div>
  )
}

export default Movies;