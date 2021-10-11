import React, { useState, useEffect } from 'react';
import 'src/components/Chat/styles.css';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const socket = io.connect(`http://192.168.0.1:8080`);
socket.on('connect', () => console.log('[IO] Connect => Connection done.'));
const myID = uuidv4();

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const handleInputChange = (event) => setMessage(event.target.value);

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      setMessages([...messages, newMessage]);
    }
    socket.on("chat.message", handleNewMessage);

    return () => socket.off("chat.message", handleNewMessage);
  }, [messages]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      const item = {
        id: myID,
        message: message
      }
      socket.emit("chat.message", item);
      setMessage('');
    }
  }

  return (
    <main className="container">
      <ul className="list">
        {messages.map((m, index) => {
          const itemClass = m.id === myID ? 'mine' : 'other';

          return (
            <li
              className={`list__item list__item--${itemClass}`}
              key={index}
            >
              <span className={`message message--${itemClass}`}>
                {m.message}
              </span>
            </li>
          );
        })}
      </ul>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="form__field"
          placeholder="Type a New Message Here"
          onChange={handleInputChange}
          type="text"
          value={message}
        />
        <button
          type="submit"
          className="form__button"
        >
          {">"}
        </button>
      </form>
    </main>
  );
}

export default Chat;
