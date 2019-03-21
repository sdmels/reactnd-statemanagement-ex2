import React from 'react';
import PropTypes from 'prop-types';

const DisplayMessages = props => {
    const { messages, userName } = props;

    return(
      <ul className="message-list">
        {messages && messages.length > 0 && messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === userName ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    );
  // }
}

DisplayMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired
};

export default DisplayMessages;