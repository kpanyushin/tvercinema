import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_MOVIES } from '_controllers/movies/actions';
import { moviesSelector } from '_controllers/movies/selectors';

import createAction from '_utils/createAction';

import Menu from './Menu';

import styles from './AdminPage.scss';

@connect(state => ({
  movies: moviesSelector(state),
}), {
  fetchMovies: createAction(FETCH_MOVIES),
})
@CSSModules(styles)

class AdminPage extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  componentDidUpdate() {
    console.log('here');
  }

  render() {
    return (
      <div styleName="root">
        <Helmet title="AdminPage" />
        <Menu styleName="menu" />
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

AdminPage.propTypes = {
  movies: PropTypes.array,
  fetchMovies: PropTypes.func,
};

export default AdminPage;
