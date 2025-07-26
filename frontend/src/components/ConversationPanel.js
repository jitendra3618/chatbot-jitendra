
import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const ConversationPanel = () => {
  const { conversations, loadSession } = useContext(ChatContext);

  return (
    <div className="sidebar">
      <h3>Past Sessions</h3>
      <ul>
        {conversations.map((conv, idx) => (
          <li key={idx} onClick={() => loadSession(conv._id)}>
            Session {idx + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationPanel;
