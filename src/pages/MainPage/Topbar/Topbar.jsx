import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';

import Text from '_components/Text';

import styles from './Topbar.scss';

@CSSModules(styles)

class Topbar extends PureComponent {
  render() {
    return (
      <div styleName="root">
        <Text color="baliHai" fontWeight="700">This is topbar</Text>
        <Text color="tulipTree" fontWeight="700">This is topbar</Text>
      </div>
    );
  }
}

export default Topbar;
