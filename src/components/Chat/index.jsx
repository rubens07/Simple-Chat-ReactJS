import React, { useState } from 'react';
import 'src/components/Chat/styles.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => setMessage(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      const item = {
        id: messages.length + 1,
        message: message
      }
      setMessages([...messages, item]);
      setMessage('');
    }
  }

  return (
    <main className="container">
      <ul className="list">
        {messages.map((m) => (
          <li className="list__item list__item--mine">
            <span
              className="message message--mine"
              key={m.id}
            >
              {m.message}
            </span>
          </li>
        ))}
      </ul>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="form__field"
          placeholder="Type a New Message Here"
          onChange={handleInputChange}
          type="text"
          value={message}
        />
      </form>
    </main>
  );
}

export default Chat;
