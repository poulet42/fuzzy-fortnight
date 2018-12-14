import React from "react";
import { getChannels } from "../../api";
import ChatNav from "./ChatNav";
import ChatMain from "./ChatMain";
import "./styles.scss";

class Chat extends React.Component {
  state = {
    channels: [],
    selected: null
  };

  componentDidMount() {
    getChannels().then(channels => {
      this.setState({
        channels
      });
    });
  }

  changeChannel = selected => {
    this.setState({ selected });
  };

  render() {
    const { channels, selected } = this.state;
    return (
      <div className="Chat">
        <ChatNav
          channels={channels}
          onChannelChange={this.changeChannel}
          selected={selected}
        />
        {selected && <ChatMain channel={selected} />}
      </div>
    );
  }
}

export default Chat;
