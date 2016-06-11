/**
*
* Events
*
*/

import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';

class Events extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const text = this.refs.input.value;
    if (text) {
      this.props.onAdd(text);
    }
  };

  render() {
    const { events, onDelete } = this.props;

    return (
      <form
        className="ui form"
        onSubmit={this.handleSubmit}
      >
        <div className="field">
          <label>Event you want to listen to:</label>
          <div className="ui small action input">
            <input
              ref="input"
              type="text"
              placeholder="Add an event..."
            />
            <button
              type="submit"
              className="ui icon button"
            >
              <i className="add icon"></i>
            </button>
          </div>
        </div>
        <div>
          {
            events.map((event, index) => (
              <div
                key={index}
                className="ui label"
              >
                {event}
                <i
                  className="delete icon"
                  onClick={() => onDelete(event)}
                >
                </i>
              </div>
            ))
          }
        </div>
      </form>
    );
  }
}

Events.propTypes = {
  events: PropTypes.instanceOf(List).isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Events;
