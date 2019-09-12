import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import { injectIntl, intlShape } from 'react-intl';

const parseType = type => ({ [type]: true });

const Alert = ({
  className,
  content,
  header,
  type,
  intl,
}) => {
  const headerMessage = intl.formatMessage({ id: header, defaultMessage: header });
  const contentMessage = intl.formatMessage({ id: content, defaultMessage: content });

  return (
    <Message
      className={className}
      {...parseType(type)}
      header={headerMessage}
      content={contentMessage}
    />
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  header: PropTypes.string,
  intl: intlShape,
  type: PropTypes.oneOf(['error', 'warning', 'success', 'default', 'info']),
};

Alert.defaultProps = {
  type: 'default',
  header: 'Header',
  content: 'Content',
};

export default injectIntl(Alert);
