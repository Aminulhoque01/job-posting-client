"use client";
import coverImage from "@/assets/discover/discover-banner.jpg";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { Dropdown, MenuProps, Tabs } from "antd";
import {
  FaUser,
  FaFlag,
  FaCity,
  FaHeart,
  FaBriefcase,
  FaGraduationCap,
  FaGlobe,
  FaMapMarkerAlt,
  FaMale,
  FaUserFriends,
  FaCamera,
  FaCode
} from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { MdOutlineReport } from "react-icons/md";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
const DiscoverDetails = () => {
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const discover = {
    _id: "1",
    fullName: "John Doe",
    age: 29,
    location: "New York, USA",
    profileImage: "https://i.ibb.co/DwC7Fcq/girls.jpg",
    description: "A tech enthusiast who loves to explore new opportunities.",
    interests: ["Tech", "Travel", "Photography"],
    gender: "Male",
    continent: "North America",
    country: "USA",
    state: "New York",
    city: "New York City",
    ethnicity: "Caucasian",
    denomination: "Christian",
    education: "Graduate from USA University",
    occupation: "Software Engineer",
    maritalStatus: "Single",
    hobby: "Coding",
    interest: "Technology and Innovation",
  };

  const tabItems = [
    {
      key: "1",
      label: "About Me",
      children: (
        <div className="space-y-5">
          {messageSent && (
            <div className="w-full bg-white p-5 rounded-lg space-y-5">
              <TextArea
                placeholder="Write a message..."
                autoSize={{ minRows: 3, maxRows: 5 }}
                className="w-full"
              />
              <button
                onClick={() => setMessageSent(false)}
                className="px-6 py-3 bg-primary text-white rounded-lg flex justify-center items-center gap-3"
              >
                <FiSend className="size-5" /> Send Message
              </button>
            </div>
          )}
          <div className="w-full bg-white p-5 rounded-lg">
            <p className="text-gray-600 mb-3 text-[16px]">
              {discover.description}
            </p>
          </div>
          <div className="w-full bg-white p-5 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-[16px]">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaMale className="text-lg" />
                </div>
                <h2 className="font-semibold">Gender:</h2>
                <p>{discover.gender}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaUser className="text-lg" />
                </div>
                <h2 className="font-semibold">Age:</h2>
                <p>{discover.age}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaGlobe className="text-lg" />
                </div>
                <h2 className="font-semibold">Continent:</h2>
                <p>{discover.continent}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaFlag className="text-lg" />
                </div>
                <h2 className="font-semibold">Country:</h2>
                <p>{discover.country}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <h2 className="font-semibold">State:</h2>
                <p>{discover.state}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCity className="text-lg" />
                </div>
                <h2 className="font-semibold">City:</h2>
                <p>{discover.city}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaUserFriends className="text-lg" />
                </div>
                <h2 className="font-semibold">Ethnicity:</h2>
                <p>{discover.ethnicity}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaHeart className="text-lg" />
                </div>
                <h2 className="font-semibold">Denomination:</h2>
                <p>{discover.denomination}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaGraduationCap className="text-lg" />
                </div>
                <h2 className="font-semibold">Education:</h2>
                <p>{discover.education}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaBriefcase className="text-lg" />
                </div>
                <h2 className="font-semibold">Occupation:</h2>
                <p>{discover.occupation}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaHeart className="text-lg" />
                </div>
                <h2 className="font-semibold">Marital Status:</h2>
                <p>{discover.maritalStatus}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCamera className="text-lg" />
                </div>
                <h2 className="font-semibold">Hobby:</h2>
                <p>{discover.hobby}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCode className="text-lg" />
                </div>
                <h2 className="font-semibold">Interest:</h2>
                <p>{discover.interest}</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Photos",
      children: (
        <div className="p-5">
          <h1 className="text-xl font-semibold mb-3">Photos</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6].map((photo) => (
              <div
                key={photo}
                className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400"
              >
                Photo {photo}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const items: MenuProps["items"] = [
    {
      key: "block",
      label: (
        <div className="flex items-center gap-2 p-2">
          <MdBlock className="text-rose-500 size-5" />
          <span>Block User</span>
        </div>
      )
    },
    {
      key: "report",
      label: (
        <div className="flex items-center gap-2 p-2">
          <MdOutlineReport className="text-rose-500 size-5" />
          <span>Report User</span>
        </div>
      )
    },
  ];
  return (
    <section className="w-full bg-secondary">
      <div className="w-full h-[350px] relative">
        <Image
          src={coverImage.src}
          fill
          className="w-full h-full object-cover absolute"
          alt="cover"
        />
      </div>
      <div className="w-full md:container px-5  py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-[270px] h-[300px] relative -mt-0 md:-mt-48">
              <Image
                src={discover?.profileImage}
                alt="profileImage"
                fill
                className="absolute w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl">{discover?.fullName}</h1>
              <div className="flex items-center gap-5">
                <h1 className="text-lg text-gray-600">Age : {discover?.age}</h1>
                <h1 className="text-lg text-gray-600">{discover?.location}</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {!messageSent && (
              <button
                onClick={() => setMessageSent(true)}
                className="px-6 py-3 bg-primary text-white rounded-lg flex justify-center items-center gap-3"
              >
                <FiSend className="size-5" /> Message
              </button>
            )}
            <Dropdown menu={{ items }} placement="bottom">
              <button className="size-[50px] rounded-full text-white bg-[#cedaf0] flex justify-center items-center gap-3">
                <HiDotsHorizontal className="size-5 text-gray-800" />
              </button>
            </Dropdown>
          </div>
        </div>
        <div className="mt-10">
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default DiscoverDetails;
