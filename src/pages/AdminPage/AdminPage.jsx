import CSSModules from 'react-css-modules';
import { injectIntl, intlShape } from 'react-intl';
import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Menu from './Menu';

import styles from './AdminPage.scss';

@injectIntl
@CSSModules(styles)

class AdminPage extends Component {
  componentDidMount() {
    console.log('mount', this.props.intl);
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

AdminPage.propTypes = {
  intl: intlShape,
};

export default AdminPage;
