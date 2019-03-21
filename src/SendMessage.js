import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {

  state = {
    text: ''
  };

  updateMessage = event => {
    this.setState({
      text: event.target.value
    });
  }

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.text.length === 0
  };

  handlePostMessage = (event) => {
    event.preventDefault();
    const message = this.state;
    this.props.chatMessage(message.text);
  }

  render() {
    const { text } = this.state;
    return(
      <div>
        <form onSubmit={this.handlePostMessage} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={text}
            onChange={this.updateMessage}
            />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn submit-button"
              disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SendMessage.propTypes = {
  chatMessage: PropTypes.func.isRequired
};

export default SendMessage;