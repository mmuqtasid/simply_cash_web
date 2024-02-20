import React, { useState } from 'react';
import './ChatGPT.css'; // Import your CSS file for styling

const ChatGPT = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    // Add user input to chat history
    setChatHistory([...chatHistory, { text: userInput, fromUser: true }]);

    // Clear user input
    setUserInput('');

    // Simulate API call and response
    setTimeout(() => {
      const newChatHistory = [
        ...chatHistory,
        { text: 'This is a ChatGPT response.', fromUser: false },
      ];
      setChatHistory(newChatHistory);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`message ${message.fromUser ? 'user-message' : 'chatgpt-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatGPT;
