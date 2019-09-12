import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import Text from '_components/Text';

const EditButton = ({ className, textProps, onClick }) => (
  <Button
    className={className}
    animated="vertical"
    color="yellow"
    onClick={onClick}
  >
    <Button.Content hidden>
      <Text {...textProps} />
    </Button.Content>
    <Button.Content visible>
      <Icon name="pencil" />
    </Button.Content>
  </Button>
);

EditButton.propTypes = {
  className: PropTypes.string,
  textProps: PropTypes.object,
  onClick: PropTypes.func,
};

EditButton.defaultProps = {
  textProps: {
    color: 'white',
    message: 'edit',
    textTransform: 'uppercase',
  },
};

export default EditButton;
