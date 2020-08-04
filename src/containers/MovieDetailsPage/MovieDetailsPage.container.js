import {MovieDetailsPage as MovieDetailsPageComponent} from "./MovieDetailsPage";
import {bindActionCreators} from "redux";
import * as moviesAction from "../../actions/movies.action";
import {connect} from "react-redux";
import {MoviesPage} from "../MoviesPage";

const mapStateToProps = (state) => {
  const {movies} = state;
  return ({
    moviesConfig: movies
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...moviesAction
    }, dispatch)
  }
};

export const MovieDetailsPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPageComponent, MoviesPage);