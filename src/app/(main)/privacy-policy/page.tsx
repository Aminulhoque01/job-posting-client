import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/PrivacyPolicy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | 1Plus1 Dating website",
  description: "Privacy Policy page",
  keywords: ["privacy policy", "page", "example"],
};
const page = () => {
  return <PrivacyPolicy />;
};

export default page;
