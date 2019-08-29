import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Text from '_components/Text';
import LinkTo from '_components/LinkTo';

import menuData from './data';

import styles from './Menu.scss';

const Menu = ({ className }) => (
  <ul styleName="root" className={className}>
    {menuData.map(item => (
      <li key={item} styleName="menuItem">
        <LinkTo linkTo={`/admin/${item}`}>
          <Text
            message={item}
            fontWeight="500"
            hover="outerSpace"
            color="rollingStone"
          />
        </LinkTo>
      </li>
    ))}
  </ul>
);

Menu.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Menu, styles);
