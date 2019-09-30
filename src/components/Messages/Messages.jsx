import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import createAction from '_utils/createAction';

import { messagesSelector } from '_controllers/messages/selectors';
import { HIDE_MESSAGE, REMOVE_MESSAGES } from '_controllers/messages/actions';

import Alert from '_components/Alert';

@connect(state => ({
  messages: messagesSelector(state),
}), {
  hideMessage: createAction(HIDE_MESSAGE),
  removeMessages: createAction(REMOVE_MESSAGES),
})

class Messages extends Component {
  render() {
    const { messages, hideMessage } = this.props;

    return messages.map(({
      type,
      header,
      message,
      messageId,
      isVisible,
    }) => (
      <Alert
        key={messageId}
        type={type}
        id={messageId}
        header={header}
        content={message}
        isVisible={isVisible}
        onCloseClick={hideMessage}
      />
    ));
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
  hideMessage: PropTypes.func,
  // removeMessages: PropTypes.func,
};

export default Messages;
