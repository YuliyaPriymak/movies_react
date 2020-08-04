import {batch} from "react-redux";
import {
  GET_GENRES, GET_GENRES_ERROR,
  GET_MOVIES,
  GET_MOVIES_ERROR,
  LOADING_MOVIES_END,
  LOADING_MOVIES_START, SEARCH_MOVIE,
  SORT_BY, SORT_BY_GENRES,
} from "../action-types";

const getMoviesSuccess = (movies) => ({type: GET_MOVIES, payload: movies});
const getMoviesError = (error) => ({type: GET_MOVIES_ERROR, payload: error});
const startLoading = () => ({type: LOADING_MOVIES_START});
const endLoading = () => ({type: LOADING_MOVIES_END});

export const sortBy = (sortType) => ({type: SORT_BY, payload: sortType});

export const sortByGenres = (byGenres) => ({type: SORT_BY_GENRES, payload: byGenres});

export const searchByTitle = (searchTitle) => ({type: SEARCH_MOVIE, payload: searchTitle});

export function getMovies(url) {
  return (dispatch) => {
    dispatch(startLoading());

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then(({results, total_pages, page, total_results}) => {
        batch(() => {
          dispatch(endLoading());
          dispatch(getMoviesSuccess({
            moviesList: results,
            totalPagesNum: total_pages,
            pageNum: page,
            total: total_results
          }))
        })
      })
      .catch((error) => {
        batch(() => {
          dispatch(endLoading());
          dispatch(getMoviesError(error));
        })
      })
  };
}

/*
const getGenresSuccess = (genres) => ({type: GET_GENRES, payload: genres});
const getGenresError = (error) => ({type: GET_GENRES_ERROR, payload: error});

export function getGenres(url) {
  return (dispatch) => {
    // dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        // dispatch(itemsIsLoading(false));

        return response;
        debugger
      })
      .then((response) => response.json())
      .then((items) => {
        dispatch(getGenresSuccess(items))
      })
      .catch((error) => dispatch(getGenresError(error)));
  };
}*/
