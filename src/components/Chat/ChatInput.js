import React from "react";

class ChatInput extends React.Component {
  state = {
    message: ""
  };

  handleMessageChange = e => {
    this.setState({
      message: e.currentTarget.value
    });
  };

  handleMessageSubmit = e => {
    e.preventDefault();
    this.props.onMessageSend(this.state.message);
    this.setState({
      message: ""
    });
  };

  render() {
    const { message } = this.state;
    const { placeholder } = this.props;
    return (
      <form className="Chat__input-wrapper" onSubmit={this.handleMessageSubmit}>
        <input
          type="text"
          className="Chat__input"
          value={message}
          onChange={this.handleMessageChange}
          placeholder={placeholder}
        />
        <input type="submit" hidden />
      </form>
    );
  }
}

export default ChatInput;
