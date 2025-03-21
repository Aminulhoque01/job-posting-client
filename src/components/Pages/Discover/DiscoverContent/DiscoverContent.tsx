"use client";
import { MdDashboard } from "react-icons/md";
import { PiListDashes } from "react-icons/pi";
import DiscoverCard from "../DiscoverCard/DiscoverCard";
import Search from "antd/es/input/Search";

const sampleDiscoverData = [
  {
    _id: "1",
    fullName: "John Doe",
    age: 29,
    location: "New York, USA",
    profileImage: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
    description: "A tech enthusiast who loves to explore new opportunities.",
    interests: ["Tech", "Travel", "Photography"],
  },
  {
    _id: "2",
    fullName: "Jane Smith",
    age: 34,
    location: "San Francisco, USA",
    profileImage: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
    description: "Passionate about design and creativity.",
    interests: ["Design", "Art", "Hiking"],
  },
  {
    _id: "3",
    fullName: "Emily Johnson",
    age: 27,
    location: "Chicago, USA",
    profileImage: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
    description: "Marketing expert with a love for social media trends.",
    interests: ["Marketing", "Fitness", "Cooking"],
  },
  {
    _id: "4",
    fullName: "Michael Brown",
    age: 32,
    location: "Austin, USA",
    profileImage: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
    description: "Entrepreneur and innovator in the tech space.",
    interests: ["Startups", "Reading", "Gaming"],
  },
];

interface IDiscoverContentProps {
  addFilter: boolean;
  setAddFilter: React.Dispatch<React.SetStateAction<boolean>>;
}
const DiscoverContent = ({
  addFilter,
  setAddFilter,
}: IDiscoverContentProps) => {
  return (
    <section
      className={`w-full col-span-full  ${
        addFilter ? "md:col-span-9" : "md:col-span-12"
      }`}
    >
      {addFilter ? (
        <div className="flex justify-between items-center">
          <h1>Showing all {sampleDiscoverData.length} results</h1>
          <div className="flex items-center gap-3">
            <h1>View</h1>
            <button className="p-1.5 border">
              <MdDashboard className="text-gray-400" size={22} />
            </button>
            <button className="p-1.5 border">
              <PiListDashes className="text-gray-400" size={22} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <button
            onClick={() => setAddFilter(true)}
            className="px-6 py-2 rounded-lg border"
          >
            Advance Filter
          </button>
          <Search
            placeholder="Search for people"
            className="w-72"
            enterButton
            allowClear
          />
        </div>
      )}

      <div className={`w-full grid grid-cols-1 ${addFilter ? "md:grid-cols-3 lg:grid-cols-3" : "md:grid-cols-4 lg:grid-cols-4"} gap-x-5 gap-y-10 my-5`}>
        {sampleDiscoverData.map((discover) => (
          <DiscoverCard key={discover._id} discover={discover} />
        ))}
      </div>
    </section>
  );
};

export default DiscoverContent;
