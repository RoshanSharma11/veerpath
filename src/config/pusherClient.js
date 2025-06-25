import Pusher from "pusher-js";

const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
  cluster: "ap2",
  // enabledTransports: ["ws", "wss"],
});

export default pusher;
