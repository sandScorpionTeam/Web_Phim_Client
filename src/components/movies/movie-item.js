import React from 'react';
import "./movie.scss";

const Movie = () => {
  return (
    <a className="movie-item" title="Đốt - Burn" href="/">
      <div class="block-wrapper">
        <div class="movie-thumbnail">
          <img src="http://lorempixel.com/200/300/" alt="Đốt - Burn"/>
        </div>
        <div class="movie-meta">
          <h3 class="movie-title1">Đốt</h3>
          <span class="movie-title2">Burn</span>
          <span class="movie-duration">120 phút</span>
        </div>
      </div>      
    </a>
  )
}

export default Movie;