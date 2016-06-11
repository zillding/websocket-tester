/**
*
* EventInput
*
*/

import React, { PropTypes } from 'react';

const EventInput = ({ value, onChange }) => (
  <div
    className="ui small input"
    style={{ marginBottom: 10 }}
  >
    <input
      type="text"
      placeholder="event name..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

EventInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EventInput;
