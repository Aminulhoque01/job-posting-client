
import AboutUs from "@/components/Pages/AboutUs/AboutUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | 1Plus1 Dating website",
  description: "About us page",
  keywords: ["about us", "page", "example"],
};
const page = () => {
  return <AboutUs />
};

export default page;
