import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import WelcomeBanner from "./WelcomeBanner";
import Navbar from "../ui/Navbar";
import axios from "axios";
import { toast } from "react-hot-toast";
import pusher from "../../config/pusherClient";

const avatarUrl = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"

export default function Community() {
  const [messages, setMessages] = useState([]);
  const [users] = useState([]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    await axios.post(
      `${import.meta.env.VITE_API_URL}/community/add-message`,
      { message: text }
    );
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/community/get-messages`
        );
        const data = response.data.map((message) => {
          const msg = {
            date: message.createdAt,
            message: message.message,
            name: message.sender.name,
            sender_id: message.sender._id,
            avatar:avatarUrl,
          };
          return msg;
        });
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        toast.error("Failed to load messages");
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const channel = pusher.subscribe("community");
    channel.bind("message", function (data) {
      const msg = {
        date: data.message.createdAt,
        sender_id: data.message.sender._id,
        message: data.message.message,
        name: data.message.sender.name,
        avatar:avatarUrl,
      };
      setMessages((prev) => {
        const updatedMessages = [...prev, msg];
        return updatedMessages.sort((a, b) => new Date(a.date) - new Date(b.date));
      });
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("Messages updated:", messages);
    
  }, [messages])

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      <div className="flex flex-1 px-6 py-5 gap-4">
        <Sidebar users={users} />
        <main className="flex flex-col flex-1">
          <WelcomeBanner />
          <ChatWindow messages={messages} />
          <ChatInput onSend={handleSend} avatar="your-avatar-url" />
        </main>
      </div>
    </div>
  );
}