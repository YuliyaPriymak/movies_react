import React, {Component, Fragment} from 'react';
import queryString from 'query-string';
import {MoviesList} from "../../components/MoviesList/MoviesList";
import {MovieListCard} from "../../components/MovieListCard/MovieListCard";
import {apiKey, sortingTypes} from "../../constants";
import {BtnGenres} from "../../components/BtnGenres/BtnGenres";
import {Button} from "../../components/Button/Button";
import './MoviesPage.scss'

const CN = 'movies-page';
export class MoviesPage extends Component {

  componentDidMount() {
    console.log(this.props);
    /* const {location: {search}, moviesConfig: {pageNum}} = this.props;
    const params = queryString.parse(search);
    const {pageNum: pageFromUrl} = params;
    const page = pageFromUrl ? pageFromUrl : pageNum;*/
    const {location: {search}, moviesConfig: {pageNum}} = this.props;
    const params = queryString.parse(search);
    const {page: pageFromUrl} = params;
    const pageNum1 = pageFromUrl ? pageFromUrl : pageNum;
    this.loadMovies(pageNum1)
  }

  loadMovies = (pageNum) => {
    const {actions: {getMovies}} = this.props;
    getMovies(`https://api.themoviedb.org/3/discover/movie?page=${pageNum}&api_key=${apiKey}`)
  };

  onSelectPost = (id) => {
    const {history, match: {url}, location: {search}} = this.props;

    history.push(`${url}/${id}`);
  };

  updateUrl = (page) => {
    const {history} = this.props;
    const newParams = {
      page
    };
    history.replace({search: queryString.stringify(newParams)})
  };

  setPage = (pageNum) => {
    return () => {
      this.loadMovies(pageNum);
      this.updateUrl(pageNum)
    }
  };
  renderButton = (label, sortType, onClick, sortCondition) => {
    return (
      <Button
        className={`btn-outline-primary ${sortType === sortCondition ? 'btn-styled' : ''}`}
        label={label}
        onClick={() => {
          onClick(sortCondition);
        }}
      />
    );
  };

  renderSortingPanel = () => {
    const {moviesConfig: {sortType}, actions: {sortBy}} = this.props;
    return (
      <div className="d-flex justify-items-center align-items-center">
        {this.renderButton(
          'Sort by title',
          sortType,
          sortBy,
          sortingTypes.BY_TITLE
        )}
        {this.renderButton(
          'Sort by date',
          sortType,
          sortBy,
          sortingTypes.BY_DATE
        )}
      </div>
    )
  };

  renderGenresPanel = () => {
    const {moviesConfig: {genresList}, actions: {sortByGenres}} = this.props;
    return (
      <div className="d-flex justify-items-center align-items-center">
        <BtnGenres
          options={genresList}
          onSortingChange={sortByGenres}
        />
      </div>
    )
  };

  render() {
    console.log('props', this.props);
    const {moviesConfig: {moviesList, isLoading: isMoviesLoading, totalPagesNum, pageNum, genresList}} = this.props;
    return (
      <div className={CN}>
        <div className='sorting-panel container'>
          {this.renderSortingPanel()}
          {this.renderGenresPanel()}
        </div>

        {
          isMoviesLoading && <div>Loading...</div>
        }
        {
          !isMoviesLoading && !!moviesList.length && (
            <Fragment>
              <h4 className='text-right mr-5'>page: {pageNum}</h4>
              <MoviesList
                options={moviesList}
                genresList={genresList}
                itemRenderer={MovieListCard}
                onSelect={this.onSelectPost}
              />
            </Fragment>

          )
        }
        {<div className="d-flex flex-wrap">
          {
            (new Array(totalPagesNum)).fill(1).map((item, index) => (

              <div key={index} className={`pagination-item ${index + 1 === pageNum ? 'active' : ''}`}
                   onClick={this.setPage(index + 1)}>{index + 1}</div>

            ))
          }
        </div>}
      </div>
    );
  }
}

// export const MoviesPage = withRouter(MoviesPageComponent);


