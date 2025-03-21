
import BrowseJobs from "@/components/Pages/JobBrowser/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Jobs  ",
  description: "My Message page",
  keywords: ["my message", "page", "example"],
};
const page = () => {
  return <BrowseJobs />;
};

export default page;