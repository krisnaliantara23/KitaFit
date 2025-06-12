import React, { useState } from 'react';

const ChatBotPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [sessionStarted, setSessionStarted] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { sender: 'user', text: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    // Buat chatbot
    const response = await fetch('https://api.example.com/ml-chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: inputMessage })
    });

    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.reply };
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!sessionStarted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <h1 className="text-xl font-semibold text-center mb-4">Dapatkan jawaban instan dan saran awal dari AI kami untuk menjaga jantung tetap sehat.</h1>
        <button
          onClick={() => setSessionStarted(true)}
          className="bg-red-700 text-white px-6 py-2 rounded-full shadow hover:bg-red-800"
        >
          Mulai Chat
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-bold">AI ChatBot</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[80%] px-4 py-2 rounded-xl text-sm whitespace-pre-line ${
              msg.sender === 'user' ? 'bg-red-700 text-white self-end ml-auto' : 'bg-gray-200 text-black self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 flex items-center gap-2">
        <input
          type="text"
          placeholder="Ketik pesan di sini..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSendMessage}
          className="bg-red-700 text-white rounded-full p-2 hover:bg-red-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10.5l19-7.5-7.5 19-2.6-7.4L3 10.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBotPage;
