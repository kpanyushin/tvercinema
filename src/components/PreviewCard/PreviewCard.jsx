import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { Card } from 'semantic-ui-react';

// import Text from '_components/Text';
import Icon from '_components/Icon';

import styles from './PreviewCard.scss';

const PreviewCard = ({
  className,
  image,
  title,
}) => (
  <Card className={className}>
    <Card.Content>
      {image.v_120_60 ? (
        <img src={image.v_120_60} alt={title} />
      ) : (
        <Icon styleName="icon" name="photo" color="black" />
      )}
      <Card.Header>{title}</Card.Header>
    </Card.Content>
  </Card>
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
