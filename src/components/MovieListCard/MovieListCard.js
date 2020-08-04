import React from "react";
import {PosterImg} from "../PosterImg/PosterImg";
import './MovieListCard.scss';
import StarRatings from "../StarsRating";

const CN = 'list-card';

export const MovieListCard = (props) => {

  const {item, genresList} = props;
  const onSelectHandler = () => {
    const {onSelect, item:{id}} = props;
    onSelect && onSelect(id)
  };

  const {poster_path, vote_average, release_date, genre_ids} = item;

  return (
    <div className={CN} onClick={onSelectHandler}>
      <div className='img-poster'>
        <PosterImg src={poster_path}/>
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>release date {release_date}</p>
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
          numberOfStars= {9}
          starEmptyColor='rgb(0,250,154)'
          starRatedColor='rgb(0,139,139)'
        />
      </div>

    </div>
  )
};