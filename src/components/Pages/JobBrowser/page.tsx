

"use client";
import { useGetAllJobsSearchQuery } from "@/redux/features/alljobSearch/alljobSearch";
import React, { useState } from "react";
import { FaMapLocation } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { PiBagSimpleDuotone } from "react-icons/pi";
import Link from "next/link";
import { Empty, Spin } from "antd";
import Image from "next/image";
import { ImageBaseUrl } from "@/redux/features/alljobSearch/ImageBaseUrl";
import { Bookmark } from "lucide-react";
import { useGetjobCountQuery } from "@/redux/features/job/job";

// Define the Job interface
interface Job {
  _id: string;
  title: string;
  salary: number;
  company: string;
  location: string;
  employmentType: string;
  posted: string;
  description: string;
  experinceLavel: string;
  image: string;
}

interface AppliedFilters {
  currentPage: number;
  limit: number;
  title: string;
  location: string;
  experinceLavel: string;
  workPlace: string;
  category: string;
  employmentType: string;
}

const BrowseJobs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [employmentType, setEmploymentType] = useState<string[]>([]);
  const [workPlace, setWorkPlace] = useState<string[]>([]);
  const [experinceLavel, setExperinceLavel] = useState<string[]>([]);

  const getFullImageUrl = (path: string | undefined): string => {
    if (!path) return "/default-image.jpg";
    if (path.startsWith("http")) return path;
    return `${ImageBaseUrl}${path}`;
  };

  const handleToggle = (
    arr: string[],
    setArr: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    if (arr.includes(value)) {
      setArr(arr.filter((item) => item !== value));
    } else {
      setArr([...arr, value]);
    }
  };

  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({
    currentPage: 1,
    limit: 10,
    title: "",
    location: "",
    experinceLavel: "",
    workPlace: "",
    category: "",
    employmentType: "",
  });

  const { data, isLoading } = useGetAllJobsSearchQuery(appliedFilters);

  const handleApplyFilters = () => {
    setAppliedFilters({
      currentPage,
      limit: 10,
      title,
      location,
      experinceLavel: experinceLavel.join(', '),
      workPlace: workPlace.join(', '),
      category: category.join(', '),
      employmentType: employmentType.join(', '),
    });
  };

  const jobs = data?.data?.attributes || [];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setAppliedFilters((prev) => ({
      ...prev,
      page: pageNumber,
    }));
  };

  const { data: jobCountData } = useGetjobCountQuery({});
  console.log(jobCountData);

  const filteredJobs: Job[] = jobs.filter((job: Job) =>
    job.title.toLowerCase().includes(title.toLowerCase())
  );

  return (
    <div className="mt-20">
      <div className="py-8">
        <div className="w-full container px-2 md:px-12  mx-auto ">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-[#252525]">
              Browse Jobs That Fit <br /> Your Future
            </h1>
            <p className="text-gray-400 mt-2">
              Explore a wide range of job opportunities tailored to your skills and preferences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 md:flex hidden   items-center gap-8 w-full m-auto">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="sm:w-full lg:w-[30%] px-4 py-2 pr-10 border rounded-md placeholder:font-normal"
              placeholder="Search job name"
            />
            <select
              value={employmentType}
              onChange={(e) => handleToggle(employmentType, setEmploymentType, e.target.value)}
              className="md:w-1/4 w-full md:px-4 py-2  rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            <select
              value={experinceLavel}
              onChange={(e) => handleToggle(experinceLavel, setExperinceLavel, e.target.value)}
              className="md:w-1/4 w-full md:px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Experience Level</option>
              <option value="Internship">Internship Level</option>
              <option value="Junior">Junior Level</option>
              <option value="Regular">Regular</option>
              <option value="Senior">Senior Level</option>
              <option value="Expert">Expert Level</option>
            </select>
            <button
              onClick={handleApplyFilters}
              className="sm:w-auto w-full bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
            >
              Find Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full container px-2 md:px-12  mx-auto  flex flex-col lg:flex-row gap-6 mt-7 ">
        <div className="w-full lg:w-[20%]">



          <div className=" bg-white shadow-md rounded-lg overflow-hidden w-full">
            <div className="bg-blue-700 text-white p-6">
              <div className="md:hidden block text-black">
                <div className=" py-8 md:flex    items-center gap-8 w-full m-auto space-y-4">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="sm:w-full lg:w-[30%] px-4 py-2 pr-10 border rounded-md placeholder:font-normal"
                    placeholder="Search job name"
                  />
                  <select
                    value={employmentType}
                    onChange={(e) => handleToggle(employmentType, setEmploymentType, e.target.value)}
                    className="sm:w-full md:w-1/4 w-full md:px-4 py-2  rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                  </select>
                  <select 
                    
                    value={experinceLavel}
                    onChange={(e) => handleToggle(experinceLavel, setExperinceLavel, e.target.value)}
                    className="sm:w-full md:w-1/4 w-full md:px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Experience Level</option>
                    <option value="Internship">Internship Level</option>
                    <option value="Junior">Junior Level</option>
                    <option value="Regular">Regular</option>
                    <option value="Senior">Senior Level</option>
                    <option value="Expert">Expert Level</option>
                  </select>
                  {/* <button
                    onClick={handleApplyFilters}
                    className="sm:w-auto w-full bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
                  >
                    Find Now
                  </button> */}
                </div>
              </div>
              <h3 className="font-bold text-lg">Set Job Reminder</h3>
              <p className="text-sm mt-2">
                Enter your email address and get new job alerts weekly
              </p>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="mt-3 w-full bg-[#0741AD] hover:bg-blue-800 text-white py-2 rounded-lg">
                  Submit
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold  text-gray-700">Category</label>
                <div className="gap-4">
                  {["Legal", "Finance", "Social", "Government", "ICT"].map((cat) => (
                    <div key={cat} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={category.includes(cat)}
                        onChange={() => handleToggle(category, setCategory, cat)}
                        id={cat}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={cat} className="ml-2 text-gray-700">{cat}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold  text-gray-700">Job Type</label>
                <div className="gap-4">
                  {["Full Time", "Part Time"].map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={employmentType.includes(type)}
                        onChange={() => handleToggle(employmentType, setEmploymentType, type)}
                        id={type}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={type} className="ml-2 text-gray-700">{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold  text-gray-700">Work Place</label>
                <div className=" gap-4">
                  {["onsite", "remote"].map((place) => (
                    <div key={place} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={workPlace.includes(place)}
                        onChange={() => handleToggle(workPlace, setWorkPlace, place)}
                        id={place}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={place} className="ml-2 text-gray-700">{place}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold  text-gray-700">Experience Level</label>
                <div className="grid grid-cols-1 ">
                  {["Expert", "Senior", "Junior", "Regular", "Internship"].map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={experinceLavel.includes(level)}
                        onChange={() => handleToggle(experinceLavel, setExperinceLavel, level)}
                        id={level}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={level} className="ml-2 text-gray-700">{level}</label>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={handleApplyFilters} className="w-full bg-[#0741AD] hover:bg-blue-800 text-white py-2 rounded-lg">
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="w-full lg:w-[80%]">
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Spin tip="Loading jobs..." size="large" />
            </div>
          )}

          {!isLoading && jobs.length === 0 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <Empty description="No jobs found." />
            </div>
          )}

          <div className="w-full grid grid-cols-1  gap-6">
            {filteredJobs.map((job: Job) => (
              <Link key={job._id} href={`/browser-job/${job._id}`}>
                <div
                  key={job._id}
                  className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300 relative"
                >
                  {/* Right Side: Job Salary (Positioned Top-Right) */}
                  <div className="absolute top-2 mt-5 right-5 text-blue-600 font-bold">
                    ${job.salary}
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Left Side: Image */}
                    <div className="flex-shrink-0">
                      <Image
                        src={getFullImageUrl(job.image)}
                        alt="Company Logo"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>

                    <div className="flex-grow lg:flex justify-between items-center space-x-4 sm:space-x-2">
                      {/* Middle: Job Details */}
                      <div className="sm:flex-grow ">
                        <h2 className="text-xl font-semibold ">{job.title}</h2>
                        <div className="flex flex-wrap items-center lg:space-x-4 text-gray-500 text-sm">
                          <div className="flex items-center">
                            <span className="font-medium text-[#4379F2]">{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-2 ml-3">
                            <FaMapLocation />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 ml-3">
                            <PiBagSimpleDuotone />
                            <span>{job.employmentType}</span>
                          </div>
                          <div className="flex items-center space-x-2 ml-3">
                            <GoClock />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mt-4 line-clamp-3">{job.description}</p>

                  <div className="flex items-center justify-between py-5">
                    <div className="flex items-center space-x-5">
                      <div className="border rounded-md px-3 py-2">
                        {job.experinceLavel}
                      </div>
                      <div className="border rounded-md px-3 py-2">
                        {job.employmentType}
                      </div>
                    </div>
                    <div className="justify-end">
                      <Bookmark className="text-2xl" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mb-20 mt-5">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full font-semibold bg-blue-600 text-white"
          >
            Prev
          </button>
        )}

        <span className="w-10 h-10 flex items-center justify-center rounded-full font-semibold bg-gray-300 text-gray-700">
          {currentPage}
        </span>

        {jobs.length === appliedFilters.limit && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full font-semibold bg-blue-600 text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BrowseJobs;
