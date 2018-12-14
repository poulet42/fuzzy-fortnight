import React from "react";
import pp from "prop-types";
import prettyDate from "../../../utils/prettyDate";
import "./styles.scss";

const Message = ({ id, ts, content, username }) => (
  <div key={id} className="Message">
    <img
      src={`https://api.adorable.io/avatars/36/${username}.jpg`}
      className="Message__avatar"
      alt={username}
    />
    <div className="Message__body">
      <time className="Message__time" dateTime={ts}>
        {prettyDate(ts)}
      </time>
      <span className="Message__text">{content}</span>
    </div>
  </div>
);

Message.propTypes = {
  id: pp.string.isRequired,
  ts: pp.oneOfType([pp.number, pp.instanceOf(Date)]),
  content: pp.text,
  username: pp.text
};

Message.defaultProps = {
  ts: 0,
  content: "",
  username: "Corentin"
};

export default Message;
