/*
 *
 * SocketIopage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSocketIopage from './selectors';

export class SocketIopage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is SocketIopage container !
      </div>
    );
  }
}

const mapStateToProps = selectSocketIopage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SocketIopage);
