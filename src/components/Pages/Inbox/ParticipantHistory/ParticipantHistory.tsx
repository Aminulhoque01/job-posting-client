import Image from "next/image";

const ParticipantHistory = () => {
  const user = {
    id: 1,
    fullName: "John Doe",
    image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
    lastMessage: "Hello, how are you?",
    location: "New York, USA",
    createdAt: "10:30 AM",
  };
  return (
    <div className="w-full h-full col-span-full md:col-span-3 bg-[#FEFEFF] rounded-lg p-3 space-y-3 text-center">
      <Image
        src={user.image}
        alt="profile"
        width={300}
        height={200}
        className="rounded-xl mx-auto flex-shrink-0"
      />
      <div className="spyce-y-2">
        <h1 className="text-lg md:text-xl font-medium">{user.fullName}</h1>
        <div className="flex justify-center items-center gap-2">
          <h1>Age : 24</h1>
          <h1>|</h1>
          <h1>{user.location}</h1>
        </div>
      </div>
    </div>
  );
};

export default ParticipantHistory;
