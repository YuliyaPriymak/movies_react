import React from "react";
import {PosterImg} from "../PosterImg/PosterImg";
import StarRatings from "../StarsRating";
import './MovieDetailsCard.scss'

const CN = 'details-card';
export const MovieDetailsCard = (props) => {
  console.log('MovieDetailsCard', props);

  const {item: {title, poster_path, vote_average, release_date, genre_ids, overview}, genresList} = props;
  return (
    <div className={`${CN} d-flex`}>
      <div className='card-image'>
      <PosterImg src={poster_path}/>
      </div>
      <div className='card-content'>
        <h1>{title}</h1>
        <p>{release_date}</p>
        <div className='genres-box'>
          {genre_ids.map(item => {
            let genre = genresList.find(ind => ind.id === item);
            return <span className='genre'>{genre.name}/ </span>
          })}
        </div>
        <StarRatings
          rating={vote_average}
          starDimension="15px"
          starSpacing="0px"
          numberOfStars={9}
          starEmptyColor='rgb(0,250,154)'
          starRatedColor='rgb(0,139,139)'
        />
        <p>{overview}</p>
      </div>

    </div>
  )
}
