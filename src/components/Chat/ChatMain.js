import React from "react";
import { getChannelMessages, sendMessageToChannel } from "../../api";
import ChatInput from "./ChatInput";
import Message from "./Message";
import Loader from "../Loader";

class ChatMain extends React.Component {
  state = {
    messages: [],
    loading: true
  };

  loadMessages = () => {
    this.setState({ loading: true });
    const channel = this.props.channel;
    getChannelMessages(this.props.channel).then(messages => {
      if (channel !== this.props.channel) return;
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
    const { messages, loading } = this.state;
    const { channel } = this.props;
    return (
      <main className="Chat__main">
        {loading ? (
          <div className="Chat__main-overlay">
            <Loader />
          </div>
        ) : (
          <>
            <div className="Chat__messages">
              {messages.map(msgProps => (
                <Message key={msgProps.id} {...msgProps} />
              ))}
            </div>
            <ChatInput
              onMessageSend={this.sendMessage}
              placeholder={`Envoyer un message au channel ${channel}`}
            />
          </>
        )}
      </main>
    );
  }
}

export default ChatMain;
