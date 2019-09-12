import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import Text from '_components/Text';

const AddButton = ({ className, textProps, onClick }) => (
  <Button
    className={className}
    animated="vertical"
    color="green"
    onClick={onClick}
  >
    <Button.Content hidden>
      <Text {...textProps} />
    </Button.Content>
    <Button.Content visible>
      <Icon name="plus" />
    </Button.Content>
  </Button>
);

AddButton.propTypes = {
  className: PropTypes.string,
  textProps: PropTypes.object,
  onClick: PropTypes.func,
};

AddButton.defaultProps = {
  textProps: {
    color: 'white',
    message: 'add',
    textTransform: 'uppercase',
  },
};

export default AddButton;
