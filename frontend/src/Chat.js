
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversationId, setConversationId] = useState(null);
  const [userId] = useState("user123");

  const sendMessage = async () => {
    if (!input.trim()) return;

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
  };

  return (
    <div className="chat-container">
      <h2>Customer Support Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="input-row">
        <input
          type="text"
          placeholder="Ask me something..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
