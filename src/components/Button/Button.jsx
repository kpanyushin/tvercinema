import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import modsClasses from '_utils/modsClasses';

import styles from './Button.scss';

class Button extends PureComponent {
  handleClick = () => {
    const { cbData, onClick } = this.props;

    if (onClick) onClick(cbData);
  };

  render() {
    const {
      as: Element,
      asProps,
      className,
      innerRef,
      type,
      width,
      backgroundColor,
      withBlurBg,
      disabled,
      children,
    } = this.props;

    const classes = modsClasses(styles, { width });
    const backgroundColorMods = modsClasses(styles, { backgroundColor });

    const buttonProps = { type, disabled };
    const otherProps = Element === 'button' ? buttonProps : asProps;

    return (
      <Element
        styleName={classnames('root', { disabled })}
        className={classnames(className, classes)}
        ref={innerRef}
        {...otherProps}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
      >
        <div
          styleName={classnames('background', { withBlurBg })}
          className={backgroundColorMods}
          ref={this.backgroundRef}
        />
        <div styleName="content">{children}</div>
      </Element>
    );
  }
}

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  disabled: PropTypes.bool,
  width: PropTypes.oneOf(['auto', '100']),
  backgroundColor: PropTypes.oneOf([
    'black', 'white', 'transparent', 'red', 'yellow', 'green',
  ]),
  withBlurBg: PropTypes.bool,
  asProps: PropTypes.object,
  cbData: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  as: 'button',
  type: 'button',
  width: 'auto',
  backgroundColor: 'black',
};

export default CSSModules(Button, styles, { allowMultiple: true });
