/**
*
* Message
*
*/

import React, { PropTypes } from 'react';

import { ObjectInspector } from 'react-inspector';

function parseData(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
}

function Message({ data: { type, data } }) {
  const content = <ObjectInspector data={parseData(data)} />;

  const style = { margin: '2px 0' };

  switch (type) {
    case 'owner':
      Object.assign(style, { textAlign: 'right' });
      return (
        <div style={style}>
          {content}
        </div>
      );
    case 'error':
      return (
        <div className="ui negative message">
          {content}
        </div>
      );
    case 'message':
      return (
        <div style={style}>
          {content}
        </div>
      );
    default:
      return (
        <div className="ui warning message">
          {content}
        </div>
      );
  }
}

Message.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired,
  }).isRequired,
};

export default Message;
