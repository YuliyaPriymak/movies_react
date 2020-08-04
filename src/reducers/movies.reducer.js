import {
  GET_MOVIES,
  LOADING_MOVIES_END,
  LOADING_MOVIES_START, SEARCH_MOVIE,
  SORT_BY, SORT_BY_GENRES,
} from "../action-types";
import {cloneDeep} from "lodash";
import {genres, sortingTypes} from "../constants";

const initialState = {
  moviesList: [],
  genresList: genres,
  isLoading: false,
  error: '',
  pageNum: 1,
  totalPagesNum: 0,
  total: 0,
  sortType: sortingTypes.BY_DEFAULT,
};
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      const {payload} = action;
      return {
        ...state,
        ...payload
      }
    }
    case LOADING_MOVIES_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LOADING_MOVIES_END: {
      return {
        ...state,
        isLoading: false
      }
    }
    case SORT_BY: {
      const {payload: sortType} = action;
      let newArray = [];
      const copy = cloneDeep(state.moviesList);
      switch (sortType) {
        case sortingTypes.BY_DATE: {
          newArray = sortByDate(copy);
          break;
        }
        case sortingTypes.BY_TITLE: {
          newArray = sortByTitle(copy);
          break;
        }
        default:
          newArray = state.moviesList
      }
      return {
        ...state,
        moviesList: newArray
      }
    }
    case SORT_BY_GENRES: {
      const {payload} = action;
      const copy = cloneDeep(state.moviesList);
      const newArrGenres = copy.filter(function (el) {
        return el.genre_ids.some((item) => item === Number(payload))
      });
      return {...state, moviesList: newArrGenres}
    }
    case SEARCH_MOVIE: {
      const {payload} = action;
      console.log('payloadSearch', payload);
      const copy = cloneDeep(state.moviesList);
      const newArrSearch = copy.filter(el => el.title.toLowerCase().includes(payload.toLowerCase()));
      console.log('newArrSearch', newArrSearch);
      return { ...state, moviesList: newArrSearch }
    }

    default:
      return state
  }
};

const sortByDate = (array) => {
  return array.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
};

const sortByTitle = (array) => {
  return array.sort(function (a, b) {
    if (a.title > b.title) {
      return 1
    }
    if (a.title < b.title) {
      return -1
    }
    return 0
  })
};
