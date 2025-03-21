'use client';
import Image from 'next/image';
import BlogImage from "@/assets/blogImage.jpg";
import { useParams } from 'next/navigation';
import { useGetSingleblogQuery } from '@/redux/features/blog/blog';
import { ImageBaseUrl } from '@/redux/features/blog/ImageBaseUrl';


export default function BlogPost() {
    const { id } = useParams();

    const { data, error, isLoading } = useGetSingleblogQuery(id, {
        skip: !id,
    });

    if (isLoading) return <p>Loading blog details...</p>;
    if (error) return <p>Error loading blog details.</p>;
    if (!data?.data) return <p>No blog found.</p>;

    const blog = data?.data?.attributes;
    console.log("Blog Details:", blog);

    const getFullImageUrl = (path: string | undefined) => {
        if (!path) return "/default-image.jpg";
        if (path.startsWith("http")) return path;
        return `${ImageBaseUrl}${path}`;
    };

    if (blog.length > 0) {
        const { featureImage } = blog[0];
        console.log("Feature Image URL:", getFullImageUrl(featureImage));
    }

    return (
        <div className="min-h-screen px-6 py-8 mt-10">
            <div className="w-full container grid grid-cols-1 px-8 lg:grid-cols-3 gap-10 py-6 mt-10   m-auto">
                <div className="lg:col-span-2">
                    <Image
                        src={getFullImageUrl(blog?.featureImage)}
                        alt="Blog Image"
                        width={800}
                        height={700}
                        className="rounded-lg"
                    />
                    <p className="text-black text-sm mt-4">
                        {new Date(blog?.createdAt).toLocaleDateString()}
                    </p>

                    <div className="flex space-x-2 mt-2">
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                            {blog?.category}
                        </span>
                    
                    </div>

                    {/* Escape single quotes in the title */}
                    <h1 className="text-3xl font-bold mt-4">
                        {blog?.title?.replace(/'/g, '&#39;')}
                    </h1>

                    <div className="w-full p-6">
                        <div className="space-y-6 text-gray-800 leading-relaxed">
                            <p className="mt-4">{blog?.content}</p>
                            <p>
                                Landing your dream job takes effort, preparation, and persistence. By tailoring your application, building a strong online presence, networking, upskilling, and acing the interview, you’ll be well on your way to success.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 ">
                    <div className="w-full p-4 bg-white shadow-md rounded-lg space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                            />
                            <span className="absolute top-2 right-3 text-gray-400">🔍</span>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-semibold mb-3">Category</h3>
                            <div className="space-y-2">
                                {["Design", "Finance", "Software"].map((category, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm text-gray-700"
                                    >
                                        <span>{category}</span>
                                        <span className="bg-gray-300 text-xs px-2 py-1 rounded">120</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Design", "Inspire", "New Trend", "Best Job", "New Job"].map(
                                    (tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Latest Blog</h3>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                    <div key={index} className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm">
                                        <Image
                                            src={BlogImage}
                                            alt="Blog Image"
                                            width={60}
                                            height={60}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="text-sm">
                                            <h4 className="font-semibold">5 Essential Tips to Land Your Dream Job in 2024</h4>
                                            <p className="text-gray-500 text-xs">In today&apos;s competitive job market...</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-300 p-6 rounded-lg shadow-md text-white relative">
                        <div className="absolute top-2 right-4 w-8 h-8 bg-blue-600 rounded-full"></div>

                        <h3 className="font-semibold text-lg">Set Job reminder</h3>
                        <p className="text-sm mt-1">Enter your email address and get new job alert weekly</p>

                        <div className="mt-4 relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring focus:ring-blue-400"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-500">📧</span>
                        </div>

                        <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
                            Submit
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
