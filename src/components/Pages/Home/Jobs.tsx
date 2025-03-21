import office from "@/assets/chooseUs/office.jpg";
import Image from "next/image";
import JobCard from "./JobCard";
import Link from "next/link";



const Jobs = () => {
  return (
    <section className="w-full md:container mx-auto p-10 sm:px-6 lg:px-8 py-5 md:py-8 mt-24">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center">
        Recent Jobs
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-center py-2">
        Apply for your best job today
      </p>

      {/* Job Card List */}
      <JobCard />

      {/* Highlighted Section */}
      <div className="md:px-4 ">
        <div className="w-full md:container px-0 md:px-20 flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg md:p-6 p-2 lg:p-12  mx-auto mt-10 lg:mt-16">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2  sm:h-[300px] h-full relative mb-6 lg:mb-0">
            <Image
              src={office} // Replace with the correct image path
              alt="Team meeting"
              layout="fill"
              objectFit="cover"
              className="rounded-xl p-1"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 lg:pl-8 p-5">
            <h4 className="text-blue-600 text-sm font-semibold mb-2">
              Find jobs
            </h4>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Create a free account and start applying for your dream job today
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy.
            </p>
            <div className="mt-6 flex justify-start lg:justify-end">
              <Link href="/browser-job">
                <button className="px-6 py-3 bg-[#0741AD] text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
