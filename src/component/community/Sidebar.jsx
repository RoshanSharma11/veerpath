import React from "react";
import OnlineUser from "./OnlineUser";

export default function Sidebar({ users }) {
  return (
    <aside className="w-80 flex flex-col border-r border-gray-200">
      <h2 className="px-4 text-2xl font-bold text-gray-900">Community</h2>
      <p className="px-4 text-base text-gray-700">
        Connect with other members, share your thoughts, and participate in
        discussions
      </p>
      <h3 className="px-4 mt-4 text-lg font-bold text-gray-900">
        Online Members
      </h3>
      <div className="mt-2">
        {users.length !== 0 ? (
          users.map((u) => <OnlineUser key={u.id} user={u} />)
        ) : (
          <p className="text-sm px-4 text-gray-600">No member online.</p>
        )}
      </div>
    </aside>
  );
}
