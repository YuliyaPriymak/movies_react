import React from 'react';

import './PosterImg.scss'
export const PosterImg = props => {
  const {
    src = '',
  } = props;

  return (
      <img src={`https://image.tmdb.org/t/p/w300${src}`} alt='img'/>
  );
};
