
import React, { useContext, useEffect } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import ConversationPanel from './ConversationPanel';
import { ChatContext } from '../context/ChatContext';
import './ChatWindow.css';

const ChatWindow = () => {
  const { loadConversation } = useContext(ChatContext);

  useEffect(() => {
    loadConversation();
  }, []);

  return (
    <div className="chat-container">
      <ConversationPanel />
      <div className="chat-box">
        <h2>Customer Support Chatbot</h2>
        <MessageList />
        <UserInput />
      </div>
    </div>
  );
};

export default ChatWindow;
