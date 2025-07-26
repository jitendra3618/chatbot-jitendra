
import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const UserInput = () => {
  const { input, setInput, sendMessage, loading } = useContext(ChatContext);

  return (
    <div className="input-row">
      <input
        type="text"
        value={input}
        placeholder="Ask a question..."
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        disabled={loading}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default UserInput;
