/**
*
* Message
*
*/

import React, { PropTypes } from 'react';

import { ObjectInspector } from 'react-inspector';

import parseJsObj from 'utils/parseJsObj';

function Message({ data: { type, event, data } }) {
  const content = (
    <div>
      {
        event ?
          <div className="ui small pointing below purple basic label">{event}</div> :
          null
      }
      <ObjectInspector data={parseJsObj(data)} />
    </div>
  );

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
