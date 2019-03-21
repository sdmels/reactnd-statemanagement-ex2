import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DisplayMessages from './DisplayMessages';
import SendMessage from './SendMessage';

class ChatLayout extends Component {

  onChatMessage = (text) => {
    const { user, chatMessage} = this.props;
    chatMessage(text, user.username);
  }

  render() {
    const { messages, user } = this.props;
    return(
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>

        <DisplayMessages
          messages={messages}
          userName={user.username}
        />

        <SendMessage chatMessage={this.onChatMessage}/>
      </div>
    );
  }
}

ChatLayout.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  chatMessage: PropTypes.func.isRequired
}

export default ChatLayout;