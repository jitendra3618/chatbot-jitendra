
import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import Message from './Message';

const MessageList = () => {
  const { messages } = useContext(ChatContext);
  return (
    <div className="messages">
      {messages.map((msg, idx) => (
        <Message key={idx} role={msg.role} content={msg.content} />
      ))}
    </div>
  );
};

export default MessageList;
