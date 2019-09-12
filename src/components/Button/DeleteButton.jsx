import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import Text from '_components/Text';

const DeleteButton = ({ className, textProps, onClick }) => (
  <Button
    className={className}
    animated="vertical"
    color="red"
    onClick={onClick}
  >
    <Button.Content hidden>
      <Text {...textProps} />
    </Button.Content>
    <Button.Content visible>
      <Icon name="delete" />
    </Button.Content>
  </Button>
);

DeleteButton.propTypes = {
  className: PropTypes.string,
  textProps: PropTypes.object,
  onClick: PropTypes.func,
};

DeleteButton.defaultProps = {
  textProps: {
    color: 'white',
    message: 'delete',
    textTransform: 'uppercase',
  },
};

export default DeleteButton;
