import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { FETCH_MOVIES } from '_controllers/movies/actions';
// import { moviesSelector } from '_controllers/movies/selectors';

// import createAction from '_utils/createAction';

import Menu from './Menu';
import Movies from './Movies';

import styles from './AdminPage.scss';

// @connect(state => ({
//   movies: moviesSelector(state),
// }), {
//   fetchMovies: createAction(FETCH_MOVIES),
// })
@CSSModules(styles)

class AdminPage extends Component {
  getSectionComponent = () => {
    const { match: { params: { section } } } = this.props;

    switch (section) {
      case 'movies': return <Movies />;
      default: return null;
    }
  };

  render() {
    const section = this.getSectionComponent();

    console.log(this.props.match.params.section);

    return (
      <div styleName="root">
        <Helmet title="AdminPage" />
        <Menu styleName="menu" />
        {section}
      </div>
    );
  }
}

AdminPage.propTypes = {
  match: PropTypes.object,
  // movies: PropTypes.array,
  // fetchMovies: PropTypes.func,
};

export default AdminPage;
