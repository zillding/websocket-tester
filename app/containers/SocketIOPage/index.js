/*
 *
 * SocketIOPage
 *
 */

import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import MessageList from 'components/MessageList';
import SocketIOConnected from 'components/SocketIOConnected';
import SocketUrlInput from 'components/SocketUrlInput';

function SocketIOPage(props) {
  const {
    wsUrl,
    connecting,
    connected,
    event,
    events,
    messages,
    openWs,
    setWsUrl,
    setEvent,
    subscribeEvent,
    unsubscribeEvent,
    sendMessage,
    clearMessages,
  } = props;

  return (
    <div className="ui grid container">
      <div className="column">
        <div className="ui segment">
          <h2>
            Socket.IO
          </h2>
          {
            connected ?
              <SocketIOConnected
                wsUrl={wsUrl}
                event={event}
                events={events}
                setEvent={setEvent}
                subscribeEvent={subscribeEvent}
                unsubscribeEvent={unsubscribeEvent}
                sendMessage={sendMessage}
              /> :
              <SocketUrlInput
                value={wsUrl}
                loading={connecting}
                onChange={setWsUrl}
                onSubmit={openWs}
              />
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

SocketIOPage.propTypes = {
  wsUrl: PropTypes.string.isRequired,
  connecting: PropTypes.bool.isRequired,
  connected: PropTypes.bool.isRequired,
  event: PropTypes.string.isRequired,
  events: PropTypes.instanceOf(List).isRequired,
  messages: PropTypes.instanceOf(List).isRequired,
  openWs: PropTypes.func.isRequired,
  setWsUrl: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  subscribeEvent: PropTypes.func.isRequired,
  unsubscribeEvent: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  clearMessages: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SocketIOPage);
