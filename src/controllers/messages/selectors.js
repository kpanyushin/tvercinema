import { createSelector } from 'reselect';
import { rootSelector } from '_controllers';

export const messagesRootSelector = createSelector(
  rootSelector,
  ({ messages }) => messages,
);

export const messagesSelector = createSelector(
  messagesRootSelector,
  ({ messages }) => messages,
);
