
import BlogPage from "@/components/Pages/Blog/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | 1Plus1 Dating website",
  description: "About us page",
  keywords: ["about us", "page", "example"],
};
const page = () => {
  return <BlogPage/>
};

export default page;