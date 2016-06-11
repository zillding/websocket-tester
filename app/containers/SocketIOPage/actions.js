/*
 *
 * SocketIopage actions
 *
 */

import { createAction } from 'redux-actions';

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

export const closeWs = createAction(WS_CLOSE);

export const closeWsSuccess = createAction(WS_CLOSE_SUCCESS);

export const openWs = createAction(WS_OPEN);

export const openWsSuccess = createAction(WS_OPEN_SUCCESS);

export const errorWs = createAction(WS_ERROR);

export const setWsUrl = createAction(WS_URL_SET);

export const setEvent = createAction(EVENT_SET);

export const subscribeEvent = createAction(EVENT_SUBSCRIBE);

export const unsubscribeEvent = createAction(EVENT_UNSUBSCRIBE);

export const receiveMessage = createAction(MESSAGE_RECEIVE);

export const sendMessage = createAction(MESSAGE_SEND);

export const clearMessages = createAction(MESSAGES_CLEAR);

export default dispatch => ({
  openWs: () => dispatch(openWs(dispatch)),
  setWsUrl: url => dispatch(setWsUrl(url)),
  setEvent: value => dispatch(setEvent(value)),
  subscribeEvent: event => dispatch(subscribeEvent(event)),
  unsubscribeEvent: event => dispatch(unsubscribeEvent(event)),
  sendMessage: text => dispatch(sendMessage(text)),
  clearMessages: () => dispatch(clearMessages()),
});
