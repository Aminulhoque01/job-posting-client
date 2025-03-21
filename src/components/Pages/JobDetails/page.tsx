
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetSingleJobQuery, useSaveToJobMutation } from "@/redux/features/alljobSearch/alljobSearch";
import { toast } from "sonner";
import { ImageBaseUrl } from "@/redux/features/blog/ImageBaseUrl";
import { TiShoppingBag } from "react-icons/ti";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiNetworkDuotone } from "react-icons/pi";
import { BiDollar } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { FcOvertime } from "react-icons/fc";

const JobDetailsPage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleJobQuery(id, { skip: !id });

    // Save Job Mutation
    const [saveToJob, { isLoading: isSaving }] = useSaveToJobMutation();

    const handleSaveJob = async () => {
        try {
            await saveToJob(id).unwrap();
            toast.success("Job saved successfully!");
        } catch (error) {
            console.error("Error saving job:", error);
            toast.error("Failed to save job. Please try again.");
        }
    };

    const getFullImageUrl = (path: string | undefined) => {
        if (!path) return "/default-image.jpg";
        if (path.startsWith("http")) return path;
        return `${ImageBaseUrl}${path}`;
    };




    if (isLoading) return <p>Loading job details...</p>;
    if (error) return <p>Error loading job details.</p>;
    if (!data?.data) return <p>No job found.</p>;

    const job = data?.data?.attributes.result;
    console.log("Job Details", job.expirationDate);


    return (
        <div className=" min-h-screen">
            <header className=" py-6  mt-20"></header>

            <div className=" max-w-[1400px] px-4 md:px-7 mx-auto  py-6 flex flex-col lg:flex-row gap-6">
                {/* Job Details Section */}
                <div className="w-full lg:w-2/3">
                    <div className="rounded-lg p-6">
                        <h1 className="text-3xl font-bold text-gray-800 ">{job.title}</h1>
                        <p className="text-1xl font-bold text-white ">{job.company}</p>
                        <div className="flex items-center space-x-5 py-5">
                            <div className='border rounded-md px-3 py- py-2'>{job.experinceLavel}</div>
                            <div className='border  rounded-md px-3 py-2  '>{job.employmentType}</div>
                        </div>
                        {job.image && (
                            <Image
                                src={getFullImageUrl(job?.image)}
                                alt={job.title}
                                width={600}
                                height={300}
                                className="w-full object-cover rounded-lg mb-6 mt-10"
                            />
                        )}
                        <p className="text-black mb-4">{job.description}</p>
                    </div>
                </div>

                {/* Sidebar Section */}
                

                <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
                    <h2 className="text-lg font-bold mb-2">{job.title}</h2>
                    <p className="text-blue-600 text-sm mb-4">{job.company}</p>
                    <p className="text-sm text-gray-600 mb-6">
                        Interested candidates are encouraged to send their CV and a cover letter.
                    </p>

                    <div className="flex space-x-4 mb-6">
                        <Link href={`/apply-job/${job._id}`}>
                            <button className="flex-1 w-[139px] h-[44px] bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                Apply Now
                            </button>
                        </Link>
                        <button
                            onClick={handleSaveJob}
                            className="flex-1 w-[139px] h-[44px] border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
                            disabled={isSaving}
                        >
                            {isSaving ? "Saving..." : "Save Job"}
                        </button>
                    </div>

                    <ul className="space-y-4 text-sm text-gray-600">
                        <li className="flex items-center">
                            <span className="flex items-center font-medium mr-2">
                                <TiShoppingBag className="inline-block text-lg mr-2" /> Job Type:
                            </span>
                            <span className="text-gray-900 font-semibold">{job.employmentType}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center font-medium mr-2">
                                <FaMapLocationDot className="inline-block text-lg mr-2" /> Location:
                            </span>
                            <span className="text-gray-900 font-semibold">{job.location}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center font-medium mr-2">
                                <PiNetworkDuotone className="inline-block text-lg mr-2" /> Work place:
                            </span>
                            <span className="text-gray-900 font-semibold">{job.workPlace}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center font-medium mr-2">
                                <BiDollar className="inline-block text-lg mr-2" /> Salary:
                            </span>
                            <span className="text-gray-900 font-semibold">${job.salary}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center font-medium mr-2">
                                <IoTimeOutline className="inline-block text-lg mr-2" /> Date Posted:
                            </span>
                            <span className="text-gray-900 font-semibold">{data?.data?.attributes?.posted}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center font-medium mr-2">
                                <FcOvertime className="inline-block text-lg mr-2" /> Expiration Date:
                            </span>
                            <span className="text-gray-900 font-semibold">
                                {job.expirationDate
                                    ? new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }).format(new Date(job.expirationDate))
                                    : "N/A"}
                            </span>
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    );
};

export default JobDetailsPage;
