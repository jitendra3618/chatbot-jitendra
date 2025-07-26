
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const userId = "user123";

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    const res = await axios.post('http://localhost:8000/api/chat', {
      user_id: userId,
      message: input,
      conversation_id: conversationId,
    });

    setConversationId(res.data.conversation_id);
    const botMessage = { role: 'bot', content: res.data.response };
    setMessages(prev => [...prev, botMessage]);
    setInput('');
    setLoading(false);
  };

  const loadConversation = async () => {
    const res = await axios.get(`http://localhost:8000/api/conversations/${userId}`);
    setConversations(res.data);
  };

  const loadSession = async (sessionId) => {
    const res = await axios.get(`http://localhost:8000/api/conversation/${sessionId}`);
    setMessages(res.data.messages);
    setConversationId(sessionId);
  };

  return (
    <ChatContext.Provider value={{
      messages, input, setInput, sendMessage,
      loading, conversations, loadConversation, loadSession
    }}>
      {children}
    </ChatContext.Provider>
  );
};
