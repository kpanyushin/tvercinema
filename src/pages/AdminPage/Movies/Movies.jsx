import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_MOVIES } from '_controllers/movies/actions';
import { denormalizedMoviesSelector } from '_controllers/movies/selectors';

import createAction from '_utils/createAction';

import Text from '_components/Text';
import LinkTo from '_components/LinkTo';
import Button from '_components/Button';
import PreviewCard from '_components/PreviewCard';

import styles from './Movies.scss';

@connect(state => ({
  movies: denormalizedMoviesSelector(state),
}), {
  fetchMovies: createAction(FETCH_MOVIES),
})
@CSSModules(styles)

class Movies extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;

    fetchMovies();
  }

  render() {
    const { movies, className } = this.props;
    const textProps = {
      color: 'white',
      fontWeight: '500',
      textAlign: 'center',
      textTransform: 'uppercase',
    };

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviesPage" />
        <LinkTo linkTo="/admin/movies/new">
          <Button backgroundColor="green">
            <Text message="add" {...textProps} />
          </Button>
        </LinkTo>
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
