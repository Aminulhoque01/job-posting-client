import React from "react";
import Chat from "./Chat/Chat";
import Messages from "./Messages/Messages";
import ParticipantHistory from "./ParticipantHistory/ParticipantHistory";

const Inbox = () => {
  return (
    <div className="w-full  px-5 py-32 bg-[#F5F9FF]">
      <h1 className="text-2xl md:text-3xl container  font-medium">Message</h1>
      <div className="w-full container  grid grid-cols-1 md:grid-cols-12 gap-5 py-3">
        <Chat />
        <Messages />
        <ParticipantHistory />
      </div>
    </div>
  );
};

export default Inbox;
