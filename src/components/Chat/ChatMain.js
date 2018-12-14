import React from "react";
import { getChannelMessages, sendMessageToChannel } from "../../api";
import ChatInput from "./ChatInput";
import Message from "./Message";

class ChatMain extends React.Component {
  state = {
    messages: [],
    loading: true
  };

  loadMessages = () => {
    this.setState({ loading: true });
    getChannelMessages(this.props.channel).then(messages => {
      this.setState({
        messages,
        loading: false
      });
    });
  };
  componentDidMount() {
    this.loadMessages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.channel !== this.props.channel) {
      this.loadMessages();
    }
  }

  sendMessage = content => {
    const { channel } = this.props;
    sendMessageToChannel({ channel, content }).then(serverMessage => {
      this.setState(s => ({
        messages: [...s.messages, serverMessage]
      }));
    });
  };

  render() {
    const { messages } = this.state;
    const { channel } = this.props;
    return (
      <main className="Chat__main">
        <div className="Chat__messages">
          {messages.map(msgProps => (
            <Message {...msgProps} />
          ))}
        </div>
        <ChatInput
          onMessageSend={this.sendMessage}
          placeholder={`Envoyer un message au channel ${channel}`}
        />
      </main>
    );
  }
}

export default ChatMain;
