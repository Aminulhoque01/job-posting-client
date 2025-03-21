
import Contact from "@/components/Pages/ContactUs/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Job Posting website",
  description: "Contuct page",
  keywords: ["my message", "page", "example"],
};
const page = () => {
  return <Contact />;
};

export default page;