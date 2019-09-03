import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_MOVIES } from '_controllers/movies/actions';
import { moviesSelector } from '_controllers/movies/selectors';

import createAction from '_utils/createAction';

import LinkTo from '_components/LinkTo';
import PreviewCard from '_components/PreviewCard';

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
    const { movies, className } = this.props;

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviesPage" />
        <ul styleName="moviesList">
          {movies.length > 0 && movies.map(({ id, title }) => (
            <LinkTo key={id} linkTo={`/admin/movies/${id}`}>
              <PreviewCard
                styleName="previewCard"
                title={title}
              />
            </LinkTo>
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
