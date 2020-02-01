import React from 'react';
import './Chatwindow.css';

//calling this from body/BottomRows.js
//@Cris this are the styles for your elements, apply them to real chat
const ChatWindow = () => {
  return(
    <div className="chat-wrapper">
      <div className="chat-messages"></div>
      <div className="justify-content-between">
        <input type="text" className="chat-input"/>
        <button className="chat-submit">Send</button>
      </div>
      
    </div>
  );
};
export default ChatWindow;