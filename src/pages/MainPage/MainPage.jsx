// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Topbar from './Topbar';

import styles from './MainPage.scss';

@CSSModules(styles)

class MainPage extends Component {
  render() {
    return (
      <div styleName="root">
        <Topbar />
        main page
      </div>
    );
  }
}

export default MainPage;
