import React, {Component} from "react";
import {MovieDetailsCard} from "../../components/MovieDetailsCard/MovieDetailsCard";
import {apiKey} from "../../constants";
import './MovieDetailsPage.scss'

export class MovieDetailsPage extends Component {


  render() {
    console.log('mpd', this.props);
    const {history, match: {params: {id}}} = this.props;
    const iD = Number(id);
    const {moviesConfig: {moviesList, isLoading, genresList}} = this.props;
    const movie = moviesList.find(el => el.id === iD);
    // if (!movie) return history.push('/not-found');

    return (
      <div className='details-page container'>
        {isLoading && !moviesList.length && <div>Loading...</div>}
        {!isLoading && !!movie && <MovieDetailsCard item={movie} genresList={genresList} />}
      </div>


    )
  }
}

