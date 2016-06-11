/*
 *
 * SocketIopage reducer
 *
 */

import { fromJS, List } from 'immutable';
import io from 'socket.io-client';

import parseJsObj from 'utils/parseJsObj';

import {
  openWsSuccess,
  errorWs,
  receiveMessage,
  closeWsSuccess,
} from './actions';
import {
  WS_CLOSE,
  WS_CLOSE_SUCCESS,
  WS_OPEN,
  WS_OPEN_SUCCESS,
  WS_ERROR,
  WS_URL_SET,

  EVENT_SET,
  EVENT_SUBSCRIBE,
  EVENT_UNSUBSCRIBE,

  MESSAGE_RECEIVE,
  MESSAGE_SEND,
  MESSAGES_CLEAR,
} from './constants';

let socket = null;
let dispatch = null;

const initialState = fromJS({
  wsUrl: 'https://hangouts-youtube-socket-server.herokuapp.com/',
  connecting: false,
  connected: false,
  event: '',
  events: [],
  messages: [],
});

function socketIOPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case WS_CLOSE:
      // socket.disconnect();
      return state;
    case WS_CLOSE_SUCCESS:
      return state
        .set('connecting', false)
        .set('connected', false);
    case WS_OPEN: {
      dispatch = payload;
      socket = io(state.get('wsUrl'));
      socket.on('connect', () => dispatch(openWsSuccess()));
      socket.on('error', err => dispatch(errorWs(err)));
      socket.on('disconnect', () => dispatch(closeWsSuccess()));
      return state.set('connecting', true);
    }

    case WS_OPEN_SUCCESS:
      return state
        .set('connecting', false)
        .set('connected', true);
    case WS_ERROR:
      return state
        .set('connecting', false)
        .set('messages', state.get('messages').push({
          type: 'error',
          data: payload,
        }));
    case WS_URL_SET:
      return state.set('wsUrl', payload);

    case EVENT_SET:
      return state.set('event', payload);
    case EVENT_SUBSCRIBE:
      socket.on(payload, data => dispatch(receiveMessage({
        event: payload,
        data,
      })));
      return state
        .set('event', '')
        .set('events', state.get('events').push(payload));
    case EVENT_UNSUBSCRIBE: {
      socket.removeAllListeners(payload);
      const events = state.get('events');
      const index = events.findIndex(s => s === payload);
      return state.set('events', events.delete(index));
    }

    case MESSAGE_RECEIVE:
      return state.set('messages', state.get('messages').push({
        type: 'message',
        event: payload.event,
        data: payload.data,
      }));
    case MESSAGE_SEND: {
      const event = state.get('event');

      socket.emit(event, parseJsObj(payload));
      return state.set('messages', state.get('messages').push({
        type: 'owner',
        event,
        data: payload.trim(),
      }));
    }

    case MESSAGES_CLEAR:
      return state.set('messages', new List());
    default:
      return state;
  }
}

export default socketIOPageReducer;
