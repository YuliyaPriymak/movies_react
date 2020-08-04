import {combineReducers} from "redux";
import {moviesReducer} from "./movies.reducer";

export default() => {
return combineReducers({
  movies: moviesReducer
})
}