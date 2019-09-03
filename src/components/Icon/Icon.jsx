import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import modsClasses from '_utils/modsClasses';

import Photo from './icons/Photo';

import styles from './Icon.scss';

function getIcon(name) {
  switch (name) {
    case 'photo': return Photo;
    default: return <svg />;
  }
}

@CSSModules(styles, { allowMultiple: true })

class Icon extends PureComponent {
  handleClick = () => {
    const { onClick, data } = this.props;

    if (onClick) onClick(data);
  };

  render() {
    const {
      className,
      name,
      size,
      color,
      hover,
      width,
      height,
      onClick,
    } = this.props;
    const iconSize = size ? { width: size, height: size } : { width, height };
    const SVGIcon = getIcon(name);
    const classes = modsClasses(styles, { color, hover });

    return (
      <SVGIcon
        className={classnames(className, classes)}
        styleName={classnames('root', { interactive: onClick })}
        {...iconSize}
        onClick={this.handleClick}
      />
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  data: PropTypes.any,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.oneOf([
    'white', 'black', 'bTextGray', 'base', 'hoverTGray', 'hoverGray', 'baseLight', 'tTextGray',
  ]),
  hover: PropTypes.oneOf(['white', 'black', 'bTextGray', 'base']),
  onClick: PropTypes.func,
};

export default Icon;
