"use client";
import Image from "next/image";
import { useState } from "react";
import { Bookmark, Briefcase, Clock, MapPin } from "lucide-react";
import { useGetSaveJobQuery } from "@/redux/features/alljobSearch/alljobSearch";
import { ImageBaseUrl } from "@/redux/features/alljobSearch/ImageBaseUrl";

// Define a type or interface for the job
interface Job {
    _id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    posted: string;
    description: string;
    experinceLavel: string;
    employmentType: string;
    expirationDate: string;
    salary: string;
    image?: string; 
}

export default function SavedJobs() {
    const [sortBy, setSortBy] = useState("Newest Post");

    const { data, error, isLoading } = useGetSaveJobQuery({});

    const savedJobs: Job[] = data?.data?.attributes || [];
    console.log(`my-save job`, savedJobs);

    const getFullImageUrl = (path: string | undefined): string => {
        if (!path) return "/default-image.jpg";  
        if (path.startsWith("http")) return path;  
        return `${ImageBaseUrl}${path}`; 
    };

    if (isLoading) return <p>Loading saved jobs...</p>;
    if (error) return <p>Error loading saved jobs.</p>;

    // Format the expiration date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(date);
    };

    return (
        <div className="w-full container px-4 md:px-8 mx-auto sm:px-6 lg:px-8 py-6 mt-20">
            <h1 className="text-2xl sm:text-3xl font-bold mt-10">My Saved Jobs</h1>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
                <span className="hidden sm:block"></span>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Sort By:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border rounded-md p-2 text-sm sm:text-base"
                    >
                        <option>Newest Post</option>
                        <option>Oldest Post</option>
                    </select>
                </div>
            </div>

            <div className="mt-6">
                {savedJobs.length === 0 ? (
                    // Show this card when there are no saved jobs
                    <div className="bg-white p-5 md:p-6 rounded-lg shadow border flex flex-col items-center justify-center text-center mt-5">
                        <Image
                            src="/no-jobs.png" // You can replace with your own no-data image
                            alt="No Jobs"
                            width={100}
                            height={100}
                            className="mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-semibold">No Saved Jobs</h3>
                        <p className="text-gray-600 text-sm md:text-base mt-2">
                            You don’t have any saved jobs yet. Browse jobs and save your favorites!
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        {savedJobs.map((job: Job, index: number) => (
                            <div
                                key={job._id || index}
                                className="bg-white p-5 md:p-6 rounded-lg shadow border flex flex-col md:flex-row items-start justify-between mt-2"
                            >
                                <div className="flex items-start space-x-4 w-full">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={getFullImageUrl(job.image)}
                                            alt="Company Logo"
                                            width={64}
                                            height={64}
                                            className="w-12 h-12 md:w-16 md:h-16 rounded-lg"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-semibold">{job.title}</h3>
                                        <div className="flex flex-wrap items-center text-sm md:text-base text-gray-500 gap-2 md:gap-4 mt-1">
                                            <span className="text-blue-500 font-medium">{job.company}</span>
                                            <span className="flex items-center">
                                                <MapPin size={14} className="mr-1" /> {job.location}
                                            </span>
                                            <span className="flex items-center">
                                                <Briefcase size={14} className="mr-1" /> {job.employmentType}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock size={14} className="mr-1" /> {formatDate(job.expirationDate)}
                                            </span>
                                        </div>

                                        <p className="text-sm md:text-base text-gray-600 mt-2">
                                            {job.description}
                                        </p>

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
                                                <button>
                                                    <Bookmark className="w-6 h-6 text-blue-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row md:flex-col items-center md:items-end mt-4 md:mt-0 w-full md:w-auto">
                                    <span className="text-lg md:text-xl font-semibold text-blue-500">
                                        {job.salary}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}





