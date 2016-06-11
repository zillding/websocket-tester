import { createSelector, createStructuredSelector } from 'reselect';

/**
 * Direct selector to the socketIopage state domain
 */
const getSocketIO = () => state => state.get('socketio');

/**
 * Other specific selectors
 */
const getWsUrl = () => createSelector(
  getSocketIO(),
  substate => substate.get('wsUrl')
);

const getConnecting = () => createSelector(
  getSocketIO(),
  substate => substate.get('connecting')
);

const getConnected = () => createSelector(
  getSocketIO(),
  substate => substate.get('connected')
);

const getEvent = () => createSelector(
  getSocketIO(),
  substate => substate.get('event')
);

const getEvents = () => createSelector(
  getSocketIO(),
  substate => substate.get('events')
);

const getMessages = () => createSelector(
  getSocketIO(),
  substate => substate.get('messages')
);

/**
 * Default selector used by SocketIopage
 */
export default createStructuredSelector({
  wsUrl: getWsUrl(),
  connecting: getConnecting(),
  connected: getConnected(),
  event: getEvent(),
  events: getEvents(),
  messages: getMessages(),
});
