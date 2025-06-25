import React, { useState } from "react";
import { Send } from "lucide-react";
export default function ChatInput({ onSend, avatar }) {
  const [text, setText] = useState("");
  const send = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="flex items-center px-4 py-3 gap-3">
      <div className="flex items-center flex-1 bg-gray-100 rounded-lg px-4 py-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your message..."
          className="flex-1 bg-transparent focus:outline-none"
        />
        <button className="p-1 text-gray-500">
          <svg width="20" height="20" fill="currentColor">
            <path d="/* smile */" />
          </svg>
        </button>
        <button
          onClick={send}
          className="ml-2 p-3 bg-[#248cf3] text-white rounded-lg"
        >
          <Send size={17} />
        </button>
      </div>
    </div>
  );
}
