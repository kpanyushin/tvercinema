import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import React, { PureComponent } from 'react';
import { injectIntl, intlShape } from 'react-intl';

const parseType = type => ({ [type]: true });

class Alert extends PureComponent {
  handleDismiss = () => {
    const { id, onCloseClick } = this.props;

    if (onCloseClick) onCloseClick(id);
  };

  render() {
    const {
      className,
      isVisible,
      content,
      header,
      type,
      intl,
    } = this.props;
    const headerMessage = intl.formatMessage({ id: header, defaultMessage: header });
    const contentMessage = intl.formatMessage({ id: content, defaultMessage: content });

    return isVisible && (
      <div
        className={className}
        style={{
        maxWidth: '500px',
        margin: '0 auto',
        position: 'absolute',
        bottom: '50px',
        left: '365px',
      }}
      >
        <Message
          {...parseType(type)}
          header={headerMessage}
          content={contentMessage}
          onDismiss={this.handleDismiss}
        />
      </div>
    );
  }
}

Alert.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  header: PropTypes.string,
  intl: intlShape,
  isVisible: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(['error', 'warning', 'success', 'default', 'info']),
  onCloseClick: PropTypes.func,
};

Alert.defaultProps = {
  type: 'default',
  header: 'Header',
  content: 'Content',
};

export default injectIntl(Alert);
