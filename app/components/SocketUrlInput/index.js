/**
*
* SocketUrlInput
*
*/

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';


class SocketUrlInput extends Component {

  handleChange = e => this.props.onChange(e.target.value);

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const { value, loading } = this.props;
    const cn = classNames('ui', 'positive', { disabled: loading },
      { loading }, 'button');

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ui fluid action input">
          <input
            type="text"
            placeholder="Enter url..."
            value={value}
            onChange={this.handleChange}
          />
          <button
            className={cn}
            type="submit"
          >
            Open
          </button>
        </div>
      </form>
    );
  }
}

SocketUrlInput.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SocketUrlInput;
