import { createSelector, createStructuredSelector } from 'reselect';

/**
 * Direct selector to the webSocketPage state domain
 */
const getWebsocket = () => state => state.get('websocket');

/**
 * Other specific selectors
 */
const getWsUrl = () => createSelector(
  getWebsocket(),
  substate => substate.get('wsUrl')
);

const getConnecting = () => createSelector(
  getWebsocket(),
  substate => substate.get('connecting')
);

const getConnected = () => createSelector(
  getWebsocket(),
  substate => substate.get('connected')
);

const getMessages = () => createSelector(
  getWebsocket(),
  substate => substate.get('messages')
);

/**
 * Default selector used by WebSocketPage
 */
export default createStructuredSelector({
  wsUrl: getWsUrl(),
  connecting: getConnecting(),
  connected: getConnected(),
  messages: getMessages(),
});
