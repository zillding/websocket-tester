/*
 *
 * WebSocketPage actions
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

export const receiveMessage = createAction(MESSAGE_RECEIVE);

export const sendMessage = createAction(MESSAGE_SEND);

export const clearMessages = createAction(MESSAGES_CLEAR);

export default dispatch => ({
  openWs: () => dispatch(openWs(dispatch)),
  closeWs: () => dispatch(closeWs()),
  setWsUrl: () => dispatch(setWsUrl()),
  sendMessage: text => dispatch(sendMessage(text)),
  clearMessages: () => dispatch(clearMessages()),
});
