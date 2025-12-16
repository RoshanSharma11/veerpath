
import React from 'react';
export default function OnlineUser({ user: { avatar, name } }) {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-white rounded-md">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full" />
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">Active</p>
      </div>
    </div>
  );
}
