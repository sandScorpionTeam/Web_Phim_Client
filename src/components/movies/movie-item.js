import React from 'react';
import "./movie.scss";
import clsx from 'clsx';

const Movie = () => {
  return (
    <a className={clsx('movie-item',
      'is-one-fifth-fullhd',
      'is-one-quarter-desktop',
      'is-one-third-tablet',
      'is-half-mobile')}
      title="Đốt - Burn" href="/">
      <div className="block-wrapper">
        <div className="movie-thumbnail">
          <img src="http://lorempixel.com/200/300/" alt="Đốt - Burn"/>
        </div>
        <div className="movie-meta">
          <h3 className="movie-title1">Đốt</h3>
          <span className="movie-title2">Burn</span>
          <span className="movie-duration">120 phút</span>
        </div>
      </div>      
    </a>
  )
}

export default Movie;