import React from "react";
import { getChannels } from "../../api";
import ChatNav from "./ChatNav";
import ChatMain from "./ChatMain";
import "./styles.scss";
import Loader from "../Loader";

class Chat extends React.Component {
  state = {
    channels: [],
    selected: null,
    loading: true
  };

  componentDidMount() {
    getChannels().then(channels => {
      this.setState({
        channels,
        loading: false
      });
    });
  }

  changeChannel = selected => {
    this.setState({ selected });
  };

  render() {
    const { channels, selected, loading } = this.state;
    return (
      <div className="Chat">
        <aside className="Chat__aside">
          {loading ? (
            <div className="Chat__aside-overlay">
              <Loader />
            </div>
          ) : (
            <ChatNav
              channels={channels}
              onChannelChange={this.changeChannel}
              selected={selected}
            />
          )}
        </aside>
        {selected && <ChatMain channel={selected} />}
      </div>
    );
  }
}

export default Chat;
