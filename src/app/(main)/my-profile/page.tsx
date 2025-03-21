import MyProfile from "@/components/Pages/MyProfile/MyProfile";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Profile | 1Plus1 Dating website",
  description: "My Profile page",
  keywords: ["my profile", "page", "example"],
};
const page = () => {
  return <MyProfile/>;
};

export default page;
