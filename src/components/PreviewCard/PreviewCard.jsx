import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Text from '_components/Text';
import Icon from '_components/Icon';

import styles from './PreviewCard.scss';

const PreviewCard = ({
  className,
  image,
  title,
}) => (
  <div styleName="root" className={className}>
    {image.v_120_60 ? (
      <img src={image.v_120_60} alt={title} />
    ) : (
      <Icon styleName="icon" name="photo" color="black" />
    )}
    <Text>{title}</Text>
  </div>
);

PreviewCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
};

PreviewCard.defaultProps = {
  image: {},
};

export default CSSModules(PreviewCard, styles);
