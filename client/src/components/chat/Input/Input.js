import React from 'react';

const Input = (props) => {
  return (
    <form>
      <input className="chat-input" type="text" placeholder="Type a message"
        value={props.message}
        onChange={event => props.setMessage(event.target.value)}
        onKeyPress={event => event.key === "Enter" ? props.sendMessage(event) : null } />
      <button className="chat-submit" onClick={event => props.sendMessage(event)} > Send </button>
    </form>
  );
};

export default Input;