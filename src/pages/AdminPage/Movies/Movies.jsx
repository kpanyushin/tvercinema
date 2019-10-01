import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { FETCH_MOVIES } from '_controllers/movies/actions';
import { moviesIdsSelector } from '_controllers/movies/selectors';

import createAction from '_utils/createAction';

import LinkTo from '_components/LinkTo';
import { AddButton } from '_components/Button';

import Movie from './Movie';

import styles from './Movies.scss';

@connect(state => ({
  movies: moviesIdsSelector(state),
}), {
  fetchMovies: createAction(FETCH_MOVIES),
})
@CSSModules(styles)

class Movies extends Component {
  componentDidMount() {
    const { movies, fetchMovies } = this.props;

    if (!movies || !movies.length) fetchMovies();
  }

  render() {
    const { movies, className } = this.props;

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviesPage" />
        <LinkTo linkTo="/admin/movies/new">
          <AddButton />
        </LinkTo>
        <ul styleName="moviesList">
          {movies.length > 0 && movies.map(id => (
            <Movie key={id} id={id} />
          ))}
        </ul>
      </div>
    );
  }
}

Movies.propTypes = {
  className: PropTypes.string,
  movies: PropTypes.array,
  fetchMovies: PropTypes.func,
};

export default Movies;
