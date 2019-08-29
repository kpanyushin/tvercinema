import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_MOVIES } from '_controllers/movies/actions';
import { moviesSelector } from '_controllers/movies/selectors';

import createAction from '_utils/createAction';

import styles from './Movies.scss';

@connect(state => ({
  movies: moviesSelector(state),
}), {
  fetchMovies: createAction(FETCH_MOVIES),
})
@CSSModules(styles)

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div styleName="root">
        <Helmet title="MoviesPage" />
        <ul styleName="content">
          {this.props.movies.map(({
            id,
            title,
            genre,
            rating,
            duration,
          }) => (
            <li key={id}>{`${id} - ${title} - ${genre} - ${rating} - ${duration}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array,
  fetchMovies: PropTypes.func,
};

export default Movies;
