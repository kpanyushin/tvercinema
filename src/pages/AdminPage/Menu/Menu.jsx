import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Menu.scss';

const Menu = ({ className }) => (
  <div styleName="root" className={className}>
    Menu
  </div>
);

Menu.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Menu, styles);
