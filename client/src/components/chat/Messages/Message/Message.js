import React from 'react';
import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = (props) => {
  let isSentByCurrentUser = false;
  const trimmedName = props.name.trim().toLowerCase();

  if (props.message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd" >
          <p className="sentText" >{trimmedName}</p>
          <div className="">
            <p className="messageText colorWhite">{ReactEmoji.emojify(props.message.text)}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart" >
          <div className="">
            <p className="messageText colorDark">{ReactEmoji.emojify(props.message.text)}</p>
          </div>
          <p className="sentText" >{props.message.user}</p>
        </div>
      )
  );
};

export default Message;