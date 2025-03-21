"use client";

import Image from 'next/image';
import heroImage from "@/assets/heroImage.svg";
import { useState } from 'react';


export default function HeroSection() {

  const [title, setTitle] = useState('');




  return (
    <div className="mt-20 flex flex-col items-center justify-center w-full  md:h-[420px] ">

      <div className="mx-auto  sm:px-10 ">
        <div className="w-full md:container  grid grid-cols-1 md:grid-cols-2 gap-16 items-center  ">

          {/* Left Content */}
          <div className='px-10 '>

            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Find Your Dream Job Today
            </h1>
            <p className="text-gray-800 mt-4">
              Our platform simplifies your job search journey. Discover opportunities across various industries, apply with ease, and take the next step in your career.
            </p>

            {/* Search Form */}
            <div className="mt-6  py-5">
              <div className="flex  lg:w-[60%] items-center bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="relative w-2/4">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search..."
                  />
                  <svg
                    className="absolute w-5 h-5 text-gray-500 left-3 top-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M16.65 9.35a7.3 7.3 0 11-14.6 0 7.3 7.3 0 0114.6 0z"
                    />
                  </svg>
                </div>
                <button className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-4 bg-[#0741AD] text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Find Now
                </button>
              </div>
            </div>



          </div>

          {/* Right Image Section */}
          <div className="md:relative w-full md:h-[450px] lg:justify-end">
            <div className="md:absolute transform rotate-45 md:top-8
             items-center lg:ml-20">
              <Image
                src={heroImage}
                alt="Job Search"
                className="w-full h-full  object-cover transform -rotate-45 lg:ml-12"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
