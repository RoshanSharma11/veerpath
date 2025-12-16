import React from 'react';

export default function MessageBubble({ msg: { avatar, name, message, date,sender_id }, uid }) {
  const self = uid === sender_id;
  return (
    <div className={`flex gap-3 p-4 ${self ? 'justify-end' : ''}`}>
      {!self && <img src={avatar} alt={user} className="w-10 h-10 rounded-full shrink-0" />}
      <div className={`flex flex-col gap-1 max-w-xs ${self ? 'items-end' : ''}`}>
        <p className="text-xs text-gray-500">{name}</p>
        <div className={`px-4 py-3 rounded-xl ${self ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
          {message}
        </div>
      </div>
      {self && <img src={avatar} alt="You" className="w-10 h-10 rounded-full shrink-0" />}
    </div>
  );
}