import JobPage from "@/components/Pages/ApplyJob/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Apply jobs | job posting website",
  description: "jobs posting page",
  keywords: ["apply jobs", "page", "example"],
};
const page = () => {
  return <JobPage />;
};

export default page;