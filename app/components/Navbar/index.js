/**
*
* Navbar
*
*/

import React from 'react';

import { Link } from 'react-router';

const style = {
  borderRadius: 0,
};

const Navbar = () => (
  <div
    className="ui inverted menu"
    style={style}
  >
    <div className="header item">
      WebSocket Tester
    </div>
    <Link
      to="/websocket"
      activeClassName="active"
      className="item"
    >
      WebSocket
    </Link>
    <Link
      to="/socketio"
      activeClassName="active"
      className="item"
    >
      Socket.IO
    </Link>
  </div>
);

export default Navbar;
