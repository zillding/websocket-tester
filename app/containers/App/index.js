/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';

import Navbar from 'components/Navbar';

const App = ({ children }) => (
  <div>
    <Navbar active="websocket" />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
