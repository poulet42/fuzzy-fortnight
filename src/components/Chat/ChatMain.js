import React from "react";
import { getChannelMessages, sendMessageToChannel } from "../../api";
import prettyDate from "../../utils/prettyDate";

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

  onMessageSend = content => {
    const { channel } = this.props;
    sendMessageToChannel(channel, content).then(serverMessage => {
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
        <form className="Chat__input-wrapper">
          <input type="text" className="Chat__input" />
          <input type="submit" hidden />
        </form>
      </main>
    );
  }
}

export default ChatMain;
