/*
 *
 * SocketIOConnected
 *
 */

import { List } from 'immutable';
import React, { PropTypes } from 'react';

import EventInput from 'components/EventInput';
import Events from 'components/Events';
import SendMessage from 'components/SendMessage';
import SocketConnectMessage from 'components/SocketConnectMessage';

function SocketIOConnected(props) {
  const {
    wsUrl,
    event,
    events,
    setEvent,
    subscribeEvent,
    unsubscribeEvent,
    sendMessage,
  } = props;

  return (
    <div>
      <SocketConnectMessage
        url={wsUrl}
        hideClose
      />
      <div className="ui divider"></div>
      <Events
        events={events}
        onAdd={subscribeEvent}
        onDelete={unsubscribeEvent}
      />
      <div className="ui divider"></div>
      <EventInput
        value={event}
        onChange={setEvent}
      />
      <SendMessage onSend={sendMessage} />
    </div>
  );
}

SocketIOConnected.propTypes = {
  wsUrl: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  events: PropTypes.instanceOf(List).isRequired,
  setEvent: PropTypes.func.isRequired,
  subscribeEvent: PropTypes.func.isRequired,
  unsubscribeEvent: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default SocketIOConnected;
