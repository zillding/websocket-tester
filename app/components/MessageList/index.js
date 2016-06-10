/**
*
* MessageList
*
*/

import { List } from 'immutable';
import React, { PropTypes } from 'react';

import Message from 'components/Message';

const MessageList = ({ data, onClear }) => (
  <div>
    <button
      className="ui negative compact button"
      onClick={onClear}
    >
      <i className="trash icon"></i>
      Clear Messages
    </button>
    {
      data.size === 0 ?
        null :
        <div className="ui segment">
          {
            data.map((message, index) => (
              <Message
                key={index}
                data={message}
              />
            ))
          }
        </div>
    }
  </div>
);

MessageList.propTypes = {
  data: PropTypes.instanceOf(List).isRequired,
  onClear: PropTypes.func.isRequired,
};

export default MessageList;
