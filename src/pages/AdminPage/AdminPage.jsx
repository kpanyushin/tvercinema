import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Menu from './Menu';

import styles from './AdminPage.scss';

@CSSModules(styles)

class AdminPage extends Component {
  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <div styleName="root">
        <Helmet title="AdminPage" />
        <Menu styleName="menu" />
      </div>
    );
  }
}

export default AdminPage;
