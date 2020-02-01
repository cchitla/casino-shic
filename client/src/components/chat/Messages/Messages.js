import React from 'react';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = (props) => {
  return (
    <ScrollToBottom className="chat-messages">
      {props.messages.map((message, index) => 
        <div key={index} message={message}>
          <Message message={message} name={props.name} />
        </div>
      )}
    </ScrollToBottom>
  );
};

export default Messages;