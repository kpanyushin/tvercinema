import { Button, Icon } from 'semantic-ui-react';
import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { FETCH_MOVIES } from '_controllers/movies/actions';
import { moviesIdsSelector } from '_controllers/movies/selectors';

import createAction from '_utils/createAction';

// import Text from '_components/Text';
import LinkTo from '_components/LinkTo';
// import Button from '_components/Button';

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
    const { fetchMovies } = this.props;

    fetchMovies();
  }

  render() {
    const { movies, className } = this.props;
    // const textProps = {
    //   color: 'white',
    //   fontWeight: '500',
    //   textAlign: 'center',
    //   textTransform: 'uppercase',
    // };

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviesPage" />
        <LinkTo linkTo="/admin/movies/new">
          <Button animated="vertical" color="green">
            <Button.Content hidden>
              Add
            </Button.Content>
            <Button.Content visible>
              <Icon name="plus" />
            </Button.Content>
          </Button>
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
