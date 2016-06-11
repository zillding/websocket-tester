/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import { Link } from 'react-router';

const HomePage = () => (
  <div className="ui container">
    <h1>WebSocket Tester</h1>
    <p>This is a simple web application to test websocket.</p>
    <p>Currently, it support testing using both browser <code>WebSocket</code> API and <code>Socket.IO</code></p>
    <p>Click on the following buttons to go to the tester.</p>
    <Link
      to="/websocket"
      className="ui primary button"
    >
      WebSocket
    </Link>
    <Link
      to="/socketio"
      className="ui secondary button"
    >
      Socket.IO
    </Link>
  </div>
);

export default HomePage;
