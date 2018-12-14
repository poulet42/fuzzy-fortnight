import React from "react";
import { getChannelMessages, sendMessageToChannel } from "../../api";
import prettyDate from "../../utils/prettyDate";
import ChatInput from "./ChatInput";

class ChatMain extends React.Component {
  state = {
    messages: [],
    loading: true
  };

  componentDidMount() {
    getChannelMessages(this.props.channel).then(messages => {
      this.setState({
        messages,
        loading: false
      });
    });
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
    return (
      <main className="Chat__main">
        <div className="Chat__messages">
          {messages.map(({ id, ts, content }) => (
            <div key={id} className="Chat__message">
              <time dateTime={ts}>{prettyDate(ts)}</time>
              <span>{content}</span>
            </div>
          ))}
        </div>
        <ChatInput onMessageSend={this.sendMessage} />
      </main>
    );
  }
}

export default ChatMain;
