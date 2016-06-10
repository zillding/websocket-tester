/*
 *
 * WebSocketPage reducer
 *
 */

import { fromJS, List } from 'immutable';

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
  MESSAGE_RECEIVE,
  MESSAGE_SEND,
  MESSAGES_CLEAR,
} from './constants';

let ws = null;

const initialState = fromJS({
  wsUrl: 'ws://html5rocks.websocket.org/echo',
  connecting: false,
  connected: false,
  messages: [],
});

function webSocketPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case WS_CLOSE:
      ws.close();
      return state;
    case WS_CLOSE_SUCCESS:
      return state
        .set('connecting', false)
        .set('connected', false);
    case WS_OPEN: {
      const dispatch = payload;
      ws = new WebSocket(state.get('wsUrl'));
      ws.onopen = () => dispatch(openWsSuccess());
      ws.onerror = err => dispatch(errorWs(err));
      ws.onmessage = e => dispatch(receiveMessage(e.data));
      ws.onclose = () => dispatch(closeWsSuccess());
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
    case MESSAGE_RECEIVE:
      return state.set('messages', state.get('messages').push({
        type: 'message',
        data: payload,
      }));
    case MESSAGE_SEND:
      ws.send(payload.trim());
      return state.set('messages', state.get('messages').push({
        type: 'owner',
        data: payload.trim(),
      }));
    case MESSAGES_CLEAR:
      return state.set('messages', new List());
    default:
      return state;
  }
}

export default webSocketPageReducer;
