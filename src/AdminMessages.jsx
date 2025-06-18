import React, { useEffect, useState } from 'react';

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/admin/messages")
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Messages</h2>
      {messages.length === 0 && <p>No messages yet.</p>}
      <ul>
        {messages.map(msg => (
          <li key={msg.id} className="border p-4 mb-4 rounded shadow-sm">
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <p className="text-sm text-gray-500">Received: {new Date(msg.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminMessages;
