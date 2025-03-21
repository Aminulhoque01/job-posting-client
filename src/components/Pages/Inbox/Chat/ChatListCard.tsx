import Image from "next/image";
import { IChat } from "./Chat";
const ChatListCard = ({ chat }: { chat: IChat }) => {
  return (
    <div className={`w-full ${chat?.id === 1 && "bg-[#5E8AE2]" } p-2 flex  rounded-lg items-center gap-2`}>
      <Image
        src="https://i.ibb.co.com/DwC7Fcq/girls.jpg"
        alt="user"
        width={50}
        height={50}
        className="w-12 h-12 rounded-full flex-shrink-0"
      />
      <div className="w-full space-y-2">
        <h1 className="text-lg md:text-xl font-medium">{chat?.fullName}</h1>
        <div className="flex justify-between items-center gap-2 text-sm">
          <p>{chat?.lastMessage}</p>
          <p>{chat?.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatListCard;
