import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FaRegComment } from "react-icons/fa";

interface IDiscoverCard {
  _id: string;
  fullName: string;
  age: number;
  location: string;
  profileImage: string;
  description: string;
  interests: string[];
}

const DiscoverCard = ({ discover }: { discover: IDiscoverCard }) => {
  return (
    <div className="w-full bg-white rounded-xl p-3">
      <div className="w-full h-56 relative">
        <Image
          src={discover?.profileImage}
          alt="profile"
          fill
          className="absolute rounded-xl"
        />
      </div>
      <div className="w-full p-5">
        <h1 className="text-xl font-semibold text-primary">
          {discover?.fullName}
        </h1>
        <p className="text-gray-600 py-2">{discover?.age}</p>
        <p className="text-gray-600">Location :  {discover?.location}</p>
        <p className="text-gray-600 py-2">{discover?.description}</p>
        <div className="flex gap-5 items-center mt-5">
         <Link href={`/discover/${discover?._id}`}> <button className="px-5 py-2 bg-primary text-white rounded-lg">
            View Profile
          </button></Link>
          <button className="size-12 flex justify-center items-center rounded-full bg-[#E6EDFA]"><FaRegComment className="size-6 text-primary"/></button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
