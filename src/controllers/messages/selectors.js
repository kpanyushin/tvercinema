import { createSelector } from 'reselect';
import { rootSelector } from '_controllers';

export const messagesRootSelector = createSelector(
  rootSelector,
  ({ messages }) => messages,
);

export const notificationsSelector = createSelector(
  messagesRootSelector,
  ({ messages }) => messages,
);
