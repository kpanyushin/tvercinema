
import React, { Fragment } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '_config';
import browserHOC from '_hocs/browser';

import Messages from '_components/Messages';
import AppRouter from '_components/AppRouter';

import '_styles/normalize.scss';
import '_styles/common.scss';

const App = props => (
  <Fragment>
    <Helmet {...config.app} />
    <AppRouter routes={props.routes} />
    <Messages />
  </Fragment>
);

App.propTypes = {
  routes: PropTypes.array,
  browser: PropTypes.object,
};

export default compose(
  browserHOC,
  Component => Component,
)(App);
