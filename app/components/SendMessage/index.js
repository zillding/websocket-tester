/**
*
* SendMessage
*
*/

import React, { Component, PropTypes } from 'react';

import Codemirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

import './styles.css';

const options = {
  mode: {
    name: 'javascript',
    json: true,
  },
  lineNumbers: true,
  autofocus: true,
};

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = text => this.setState({ text });

  handleSend = () => this.props.onSend(this.state.text);

  render() {
    return (
      <div>
        <p>Type your message and press 'send':</p>
        <Codemirror
          value={this.state.text}
          onChange={this.handleChange}
          options={options}
        />
        <button
          className="ui primary compact button"
          onClick={this.handleSend}
        >
          <i className="send icon"></i>
          Send
        </button>
      </div>
    );
  }
}

SendMessage.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default SendMessage;
