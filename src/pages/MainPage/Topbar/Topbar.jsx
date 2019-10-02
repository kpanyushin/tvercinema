import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Topbar.scss';

@CSSModules(styles)

class Topbar extends PureComponent {
  render() {
    return (
      <div styleName="root">
        This is topbar
      </div>
    );
  }
}

export default Topbar;
