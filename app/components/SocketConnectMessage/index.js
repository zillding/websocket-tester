/**
*
* SocketConnectMessage
*
*/

import React, { PropTypes } from 'react';


const SocketConnectMessage = ({ url, onClose }) => (
  <div className="ui positive message">
    <div className="header">
      Connected: <a>{url}</a>
      <button
        className="ui negative compact button"
        style={{ marginLeft: '1rem' }}
        onClick={onClose}
      >
        <i className="remove icon"></i>
        Close
      </button>
    </div>
  </div>
);

SocketConnectMessage.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SocketConnectMessage;
