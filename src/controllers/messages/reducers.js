import _uniqueId from 'lodash/uniqueId';

import {
  ADD_MESSAGE,
  HIDE_MESSAGE,
  REMOVE_MESSAGES,
} from './actions';

const initialState = {
  messages: [],
};

function hideMessageById(messages, id) {
  return messages.map((message) => {
    if (message.id === id) {
      return { ...message, isVisible: false };
    }

    return message;
  });
}

const messagesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MESSAGE: {
      const messages = hideMessageById(state.messages, payload.id);

      messages.push({ ...payload, isVisible: true, messageId: _uniqueId('message-') });

      return { ...state, messages };
    }

    case HIDE_MESSAGE: {
      const messages = hideMessageById(state.messages, payload);

      return { ...state, messages };
    }

    case REMOVE_MESSAGES: {
      return { ...state, messages: [] };
    }

    default:
      return state;
  }
};

export default messagesReducer;
