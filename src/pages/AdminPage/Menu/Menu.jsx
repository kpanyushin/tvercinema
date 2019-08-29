import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Text from '_components/Text';

import styles from './Menu.scss';

const Menu = ({ className }) => (
  <div styleName="root" className={className}>
    <Text color="white">Menu</Text>
  </div>
);

Menu.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Menu, styles);
