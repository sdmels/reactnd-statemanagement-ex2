import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatLayout from './ChatLayout';

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {

  state = {
    messages: []
  };

  handleChatMessage = (text, username) => {
    const newMessage = {text, username};

    this.setState( currentState => ({
      messages: currentState.messages.concat([newMessage])
    }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {
            users.map( (user) => (
              <ChatLayout
                key={user.username}
                messages={messages}
                user={user}
                chatMessage={this.handleChatMessage}
              />
            ))
          }

        </div>
      </div>
    );
  }
}

export default App;
