import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const cancelActionProps = ({
  iconName,
  message,
  onClick,
}) => ({
  key: message,
  content: message,
  negative: true,
  inverted: true,
  basic: true,
  color: 'red',
  icon: iconName,
  onClick,
});

const yesActionProps = ({
  iconName,
  message,
  onClick,
}) => ({
  key: message,
  content: message,
  positive: true,
  inverted: true,
  color: 'green',
  icon: iconName,
  onClick,
});

const ModalBasic = ({
  className,
  trigger,
  type,
  size,
  content,
  headerContent,
  yesActionContent,
  cancelActionContent,
}) => (
  <Modal
    className={className}
    header={headerContent.message}
    {...{ [type]: true }}
    trigger={trigger}
    content={content}
    size={size}
    actions={[
    { ...cancelActionProps({ ...cancelActionContent }) },
    { ...yesActionProps({ ...yesActionContent }) },
  ]}
  />
);

const contentShape = PropTypes.shape({
  iconName: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func,
});

ModalBasic.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.element,
  type: PropTypes.string,
  size: PropTypes.string,
  content: PropTypes.string,
  headerContent: contentShape,
  yesActionContent: contentShape,
  cancelActionContent: contentShape,
};

ModalBasic.defaultProps = {
  size: 'small',
  content: 'content',
  headerContent: {
    iconName: 'recycle',
    message: 'This is header',
  },
  cancelActionContent: {
    iconName: 'remove',
    message: 'Cancel',
    onClick: () => {},
  },
  yesActionContent: {
    iconName: 'checkmark',
    message: 'Yes',
    onClick: () => {},
  },
  type: 'basic',
  trigger: <Button>Basic Modal</Button>,
};

export default ModalBasic;
