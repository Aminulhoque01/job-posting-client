import ChatListCard from "./ChatListCard";
export interface IChat {
  id: number;
  fullName: string;
  image: string;
  lastMessage: string;
  location: string;
  createdAt: string;
}
const Chat = () => {
  const chatLists = [
    {
      id: 1,
      fullName: "John Doe",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      lastMessage: "Hello, how are you?",
      location: "New York, USA",
      createdAt: "10:30 AM",
    },
    {
      id: 2,
      fullName: "Jane Doe",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      lastMessage: "Hello, how are you?",
      location: "New York, USA",
      createdAt: "10:30 AM",
    },
    {
      id: 3,
      fullName: "John Doe",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      lastMessage: "Hello, how are you?",
      location: "New York, USA",
      createdAt: "10:30 AM",
    },
    {
      id: 4,
      fullName: "Jane Doe",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      lastMessage: "Hello, how are you?",
      location: "New York, USA",
      createdAt: "10:30 AM",
    },
  ];
  return (
    <div className="w-full h-full col-span-full md:col-span-3 bg-[#FEFEFF] rounded-lg ">
      {/* Search Bar  */}
      <div className="w-full p-3">
        <input
          type="text"
          placeholder="Search here"
          className="w-full h-12 px-5 rounded-lg border  outline-none focus:border focus:border-primary"
        />
      </div>
      <hr className="mt-2" />
      {/* Chat content show here */}
      <div className="w-full flex flex-col gap-2 p-3">
        {chatLists.map((chat) => (
          <ChatListCard key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
