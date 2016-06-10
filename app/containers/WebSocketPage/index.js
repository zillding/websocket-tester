/*
 *
 * WebSocketPage
 *
 */

import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import MessageList from 'components/MessageList';
import SendMessage from 'components/SendMessage';
import SocketConnectMessage from 'components/SocketConnectMessage';
import SocketUrlInput from 'components/SocketUrlInput';

function WebSocketPage(props) {
  const {
    wsUrl,
    connecting,
    connected,
    messages,
    openWs,
    closeWs,
    setWsUrl,
    sendMessage,
    clearMessages,
  } = props;

  return (
    <div className="ui grid container">
      <div className="column">
        <div className="ui segment">
          <h2>
            Browser <strong>WebSocket</strong> API
          </h2>
          {
            connected ?
              <SocketConnectMessage
                url={wsUrl}
                onClose={closeWs}
              /> :
              <SocketUrlInput
                value={wsUrl}
                loading={connecting}
                onChange={setWsUrl}
                onSubmit={openWs}
              />
          }
          {
            !connected ?
              null :
              <div>
                <div className="ui divider"></div>
                <SendMessage onSend={sendMessage} />
              </div>
          }
          <div className="ui divider" />
          <MessageList
            data={messages}
            onClear={clearMessages}
          />
        </div>
      </div>
    </div>
  );
}

WebSocketPage.propTypes = {
  wsUrl: PropTypes.string.isRequired,
  connecting: PropTypes.bool.isRequired,
  connected: PropTypes.bool.isRequired,
  messages: PropTypes.instanceOf(List).isRequired,
  openWs: PropTypes.func.isRequired,
  closeWs: PropTypes.func.isRequired,
  setWsUrl: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  clearMessages: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketPage);
