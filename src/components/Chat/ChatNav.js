import React from "react";
import cx from "classnames";

const ChannelsList = ({ channels, selected, onChannelChange }) => (
  <nav className="Chat__nav">
    {channels.map(({ id, label }) => (
      <button
        key={id}
        className={cx("Chat__channel-btn", {
          "Chat__channel-btn--selected": selected === id
        })}
        onClick={() => onChannelChange(id)}
      >
        {label}
      </button>
    ))}
  </nav>
);

export default ChannelsList;
