'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetAllPublishedBlogQuery } from "@/redux/features/blog/blog";
import { ImageBaseUrl } from "@/redux/features/blog/ImageBaseUrl";
import Subscribe from "../Home/Subscriptions";

// Define the type for a blog post
interface BlogPost {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    featureImage: string;
    tag: string[];
    category: string;
}

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;

    const [appliedFilters, setAppliedFilters] = useState({
        currentPage: 1,
        limit: 6,
        location: "",
        experinceLavel: "",
        workPlace: "",
        category: "",
        employmentType: "",
    });


    const { data, error, isLoading } = useGetAllPublishedBlogQuery({
        page: currentPage,
        limit: postsPerPage,
    });

    const blogs: BlogPost[] = data?.data?.attributes || [];

    console.log(blogs)

    const getFullImageUrl = (path?: string) => {
        if (!path) return "/default-image.jpg";
        if (path.startsWith("http")) return path;
        return `${ImageBaseUrl}${path}`;
    };


    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        setAppliedFilters((prev) => ({
            ...prev,
            page: pageNumber,
        }));
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching blogs</p>;
    if (!blogs.length) return <p className="text-center">No blogs found.</p>;

    return (
        <div className=" min-h-screen  pt-8  m-auto mt-20">
            <div className="container px-5">
                <h1 className="text-3xl font-bold text-center">Welcome to Our Blog!</h1>
                <p className="text-gray-600 text-center max-w-xl mx-auto mb-4 mt-5">
                    Whether you&apos;re searching for your dream job or looking to hire top talent, our platform is designed to deliver exceptional results.
                </p>
            </div>

            <h2 className="text-xl font-bold mb-6 text-center mt-10">Recent Blogs</h2>

            <div className="w-full container   sm:px-6 md:px-8 lg:px-12 mx-auto mt-10 mb-10 ">



                <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-5">
                    {/* Left Side - Large Blog */}
                    <div className="md:col-span-6 bg-white shadow-md p-4 border rounded-lg flex flex-col h-full">
                        <Image
                            src={getFullImageUrl(blogs[0]?.featureImage)}
                            alt="Blog Image"
                            width={500}
                            height={500}
                            className="rounded-lg w-full object-cover"
                        />
                        <Link href={`/blog/${blogs[0]?._id}`} className="flex-grow">
                            <div className="py-5 flex flex-col h-full">
                                <p className="text-gray-500 text-sm mt-2">
                                    {new Date(blogs[0]?.createdAt || "").toLocaleDateString()}
                                </p>
                                <div className="flex space-x-2 mt-1">
                                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                        {blogs[0]?.tag}
                                    </span>
                                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                        {blogs[0]?.category || "Uncategorized"}
                                    </span>
                                </div>
                                <h2 className="font-semibold text-lg mt-2">{blogs[0]?.title || "No Title"}</h2>
                                <p className="text-gray-600 text-lg mt-1 line-clamp-3 flex-grow">
                                    {blogs[0]?.content.substring(0, 250) || "No content available"}...
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Right Side - Small Blogs */}
                    <div className="md:col-span-6 gap-4 rounded-lg flex flex-col h-full">
                        {blogs.slice(1, 4).map((post: BlogPost, index: number) => (
                            <div key={index} className="bg-white shadow-md p-4 border rounded-lg flex  h-full  ">
                                {/* Ensure Image is Properly Sized */}
                                <div className="flex flex-col w-[700px]  md:w-[80%]">
                                    <Image
                                        src={getFullImageUrl(post.featureImage)}
                                        alt="Blog Image"
                                        width={80}
                                        height={80}
                                        className="rounded-lg object-cover w-full h-full"
                                    />
                                </div>

                                <Link href={`/blog/${post._id}`} className="flex-grow">
                                    <div className="ml-4 flex flex-col h-full w-full py-5">
                                        {/* Blog Title */}
                                        <h3 className="font-semibold text-sm">{post.title || "No Title"}</h3>

                                        {/* Date */}
                                        <p className="text-gray-500 text-xs">
                                            {new Date(post.createdAt || "").toLocaleDateString()}
                                        </p>

                                        {/* Tags and Categories */}
                                        <div className="flex space-x-2 mt-1">
                                            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                                {post.tag}
                                            </span>
                                            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                                {post.category || "Uncategorized"}
                                            </span>
                                        </div>

                                        {/* Blog Content */}
                                        <p className="text-gray-600 text-xs line-clamp-2 flex-grow ">
                                            {post.content?.substring(0, 250) || "No content available"}...
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            {/* All Blogs Section */}
            <h2 className="text-2xl font-semibold text-center mb-4">All Blogs</h2>
            <div className="w-full md:container md:px-12 px-7 mx-auto ">
                <div className="flex flex-col gap-2">
                    {blogs.map((post: BlogPost, index: number) => (
                        <div key={index} className="bg-white shadow rounded-lg p-4 border flex flex-col  items-center mb-4  sm:flex-row ">
                            <div className="md:mr-4 ]">
                                <Image
                                    src={getFullImageUrl(post.featureImage)}
                                    alt="Blog Image"
                                    width={150}
                                    height={150}
                                    className="rounded-lg w-[500px]  md:w-full h-[150px] md:h-full object-cover"
                                />
                            </div>

                            <Link href={`/blog/${post._id}`}>
                                <div className="ml-4 flex flex-col h-full w-full">
                                    <h3 className="font-semibold text-md">{post.title || "No Title"}</h3>
                                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                                        {post.content?.substring(0, 150) || "No content available"}...
                                    </p>
                                    <p className="text-gray-500 text-xs mt-2">
                                        {new Date(post.createdAt || "").toLocaleDateString()}
                                    </p>
                                    <div className="flex space-x-2 mt-1">
                                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                            {post.category || "Uncategorized"}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>


            </div>


            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mb-10 mt-5">
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

                {blogs.length === appliedFilters.limit && (
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="w-10 h-10 flex items-center justify-center rounded-full font-semibold bg-blue-600 text-white"
                    >
                        Next
                    </button>
                )}
            </div>

            <div className="w-full container  ">
                <Subscribe />
            </div>

        </div>
    );
}
