import {MoviesPage as MoviePageComponent} from "./MoviesPage";
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as moviesAction from "../../actions/movies.action";
import {withRouter} from "react-router";

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

export const MoviesPage = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MoviePageComponent);
