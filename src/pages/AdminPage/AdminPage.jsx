import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Menu from './Menu';
import Movies from './Movies';
import Showtimes from './Showtimes';
import CinemaHalls from './CinemaHalls';

import styles from './AdminPage.scss';

@CSSModules(styles)

class AdminPage extends Component {
  getSectionComponent = () => {
    const { match: { params: { section } } } = this.props;

    switch (section) {
      case 'movies': return <Movies />;
      case 'showtimes': return <Showtimes />;
      case 'cinema halls': return <CinemaHalls />;
      default: return null;
    }
  };

  render() {
    const section = this.getSectionComponent();

    return (
      <div styleName="root">
        <Helmet title="AdminPage" />
        <Menu styleName="menu" />
        <div styleName="content">
          {section}
        </div>
      </div>
    );
  }
}

AdminPage.propTypes = {
  match: PropTypes.object,
};

export default AdminPage;
