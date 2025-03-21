import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import { TbPhoto } from "react-icons/tb";

const Messages = () => {
  const messages = [
    {
      id: 1,
      sender: "me", // or "them"
      type: "text", // can also be "image"
      content:
        "Hello, How are you? I am interested to talk with you. This is my Photo.",
      timestamp: "1:30 AM",
    },
    {
      id: 2,
      sender: "me",
      type: "image",
      content: "https://i.ibb.co.com/prCg7qx/Smart-watch.png",
      timestamp: "1:30 AM",
    },
    {
      id: 3,
      sender: "them",
      type: "text",
      content: "I'm fine, Nice to talk with you.",
      timestamp: "1:31 AM",
    },
    {
      id: 4,
      sender: "me",
      type: "text",
      content: "That's great! Looking forward to our conversation.",
      timestamp: "1:32 AM",
    },
    {
      id: 5,
      sender: "them",
      type: "text",
      content: "Sure! Let's connect and talk more about it.",
      timestamp: "1:33 AM",
    },
  ];

  return (
    <section className="w-full h-screen col-span-6  bg-[#FEFEFF] rounded-b-lg relative">
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="w-full p-3 flex items-center gap-3 bg-primary rounded-t-lg text-white">
          <Image
            src="https://i.ibb.co/DwC7Fcq/girls.jpg"
            alt="profile"
            width={70}
            height={70}
            className="w-12 h-12 rounded-full flex-shrink-0"
          />
          <div className="w-full space-y-1">
            <h1 className="text-lg md:text-xl font-medium">Mariam Star</h1>
            <h2>New York, USA</h2>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col ${
                message.sender === "me" ? "items-end" : "items-start"
              }`}
            >
              {message.type === "text" ? (
                <div
                  className={`p-3 rounded-lg max-w-xs ${
                    message.sender === "me"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {message.content}
                </div>
              ) : (
                <Image
                  src={message?.content}
                  alt="Message Image"
                  className="w-64 h-64 object-cover rounded-lg mt-2"
                />
              )}
              <span className="text-xs text-gray-500 mt-1">
                {message.timestamp}
              </span>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="w-full px-3 py-4 flex items-center gap-3  border-t absolute bottom-0 left-0">
          <GrAttachment size={24} className="text-gray-500" />
          <TbPhoto size={24} className="text-gray-500" />
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full flex-1 px-3 py-3 border rounded-xl focus:outline-none"
          />
          <button className="p-3 bg-primary text-white rounded-full">
            <FiSend size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Messages;
