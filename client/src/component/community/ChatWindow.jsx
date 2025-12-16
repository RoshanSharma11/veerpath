import React from 'react';
import MessageBubble from './MessageBubble';
import { useAuthStore } from '../../store/authStore';

export default function ChatWindow({ messages }) {
  const {user} = useAuthStore();
  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 max-h-[calc(100vh-220px)]">
      {messages.map((msg,ind) => <MessageBubble key={ind} msg={msg} uid={user._id} />)}
    </div>
  );
}