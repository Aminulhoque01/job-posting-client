

"use client"
import { Bookmark, MapPin, Clock, Briefcase } from "lucide-react";
import Image from "next/image";
import { useGetmyApplyJobQuery } from "@/redux/features/alljobSearch/alljobSearch";
import { useEffect, useMemo, useState } from "react";
import { ImageBaseUrl } from "@/redux/features/alljobSearch/ImageBaseUrl";

// Define the structure for the Job object
interface Job {
    _id: string;
    jobId: {
        title: string;
        company: string;
        location: string;
        employmentType: string;
        createdAt: string;
        description: string;
        experinceLavel: string;
        salary: string;
        image?: string;
    };
}

export default function JobList() {
    const [savedJobs, setSavedJobs] = useState<string[]>([]);
    const { data, isLoading, isError } = useGetmyApplyJobQuery({});

    // Memoize applied jobs to avoid unnecessary recalculations
    const applyjob = useMemo<Job[]>(() => data?.data?.attributes?.applications ?? [], [data]);

    useEffect(() => {
        console.log("My applied jobs:", applyjob);
    }, [applyjob]);

    const toggleSaveJob = (id: string) => {
        setSavedJobs((prev) =>
            prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
        );
    };

    const getFullImageUrl = (path: string | undefined): string => {
        if (!path) return "/default-image.jpg";  
        if (path.startsWith("http")) return path;  
        return `${ImageBaseUrl}${path}`; 
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching applied jobs!</p>;

    return (
        <div className="w-full  container px-4 md:px-8 mx-auto py-10 mt-20">
            <h2 className="text-2xl font-semibold mb-4 mt-10">My Applied Jobs</h2>

            {applyjob.length === 0 ? (
                <div className="flex flex-col items-center justify-center bg-white p-10 shadow-lg rounded-lg border">
                    <h3 className="text-xl font-semibold text-gray-700">No Jobs Applied Yet</h3>
                    <p className="text-gray-500 mt-2 text-center">
                        You haven&apos;t applied to any jobs yet. Start exploring and apply for your dream job today!
                    </p>
                    <button
                        onClick={() => window.location.href = "/browser-job"}
                        className="mt-5 px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-all"
                    >
                        Browse Jobs
                    </button>
                </div>
            ) : (
                applyjob.map((job: Job) => (
                    <div key={job._id} className="bg-white p-5 md:p-6 rounded-lg shadow border flex flex-col md:flex-row items-start justify-between mt-5">
                        <div className="flex items-start space-x-4 w-full">
                            <div className="flex-shrink-0">
                                {job.jobId?.image ? (
                                    <Image
                                        src={getFullImageUrl(job.jobId.image)}
                                        alt="Company Logo"
                                        width={64}
                                        height={64}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-lg"
                                    />
                                ) : (
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 flex items-center justify-center text-gray-500">
                                        No Image
                                    </div>
                                )}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-semibold">{job.jobId?.title || "Job Title Not Available"}</h3>

                                <div className="flex flex-wrap items-center text-sm md:text-base text-gray-500 gap-2 md:gap-4 mt-1">
                                    <span className="text-blue-500 font-medium">{job.jobId?.company || "Unknown Company"}</span>
                                    <span className="flex items-center">
                                        <MapPin size={14} className="mr-1" /> {job.jobId?.location || "Location Not Provided"}
                                    </span>
                                    <span className="flex items-center">
                                        <Briefcase size={14} className="mr-1" /> {job.jobId?.employmentType || "N/A"}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock size={14} className="mr-1" /> Applied on {job.jobId?.createdAt ? new Date(job.jobId.createdAt).toLocaleDateString() : "N/A"}
                                    </span>
                                </div>

                                <p className="text-sm md:text-base text-gray-600 mt-2">
                                    {job.jobId?.description || "No description available."}
                                </p>

                                <div className="flex items-center justify-between py-5">
                                    <div className="flex items-center space-x-5">
                                        <div className="border rounded-md px-3 py-2">
                                            {job.jobId?.experinceLavel || "Experience Not Specified"}
                                        </div>
                                        <div className="border rounded-md px-3 py-2">
                                            {job.jobId?.employmentType || "N/A"}
                                        </div>
                                    </div>

                                    <div className="justify-end">
                                        <button onClick={() => toggleSaveJob(job._id)} className="ml-4 md:ml-0 md:mt-5">
                                            <Bookmark
                                                className={`w-6 h-6 ${savedJobs.includes(job._id) ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-center md:items-end mt-4 md:mt-0 w-full md:w-auto">
                            <span className="text-lg md:text-xl font-semibold text-blue-500">
                                {job.jobId?.salary || "Salary Not Disclosed"}
                            </span>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
