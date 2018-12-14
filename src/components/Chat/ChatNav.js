import React from "react";

const ChannelsList = ({ channels, onChannelChange }) => (
  <aside className="Chat__aside">
    <nav className="Chat__nav">
      <ul>
        {channels.map(({ id, label }) => (
          <li key={id}>
            <button
              className="Chat__channel-btn"
              onClick={() => onChannelChange(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default ChannelsList;
