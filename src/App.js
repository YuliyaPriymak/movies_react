import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {MoviesPage} from "./containers/MoviesPage";
import {Header} from "./components/Header/Header";
import {Provider} from "react-redux";
import {store} from "./store";
import {MovieDetailsPage} from "./containers/MovieDetailsPage";
import NotFound from "./containers/NotFound/NotFound";
import './App.css';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/movies' />
          </Route>
          <Route exact path='/movies' component={MoviesPage}/>

          <Route path="/movies/:id" render={(props) => <MovieDetailsPage {...props} />} />

          <Route path='/not-found' component={NotFound} />
          <Redirect from='*' to='/not-found' />

        </Switch>
      </Router>
    </Provider>

  )
};


