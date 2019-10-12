import React from 'react';
import "./movie.scss";
import clsx from 'clsx';

const Movie = (props) => {
  const data = props.data;
  const title = `${data.title1} - ${data.title2}`;
  return (
    <a className={clsx('movie-item',
      'is-one-fifth-fullhd',
      'is-one-quarter-desktop',
      'is-one-third-tablet',
      'is-half-mobile')}
      title={title} href="/">
      <div className="block-wrapper">
        <div className="movie-thumbnail">
          <img src="http://lorempixel.com/200/300/" alt={title}/>
        </div>
        <div className="movie-meta">
          <h3 className="movie-title1">{data.title1}</h3>
          <span className="movie-title2">{data.title2}</span>
          <span className="movie-duration">{data.duration}</span>
        </div>
      </div>      
    </a>
  )
}

export default Movie;