import AddPhoto from "@/components/Pages/AddPhoto/AddPhoto";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Photo | 1Plus1 Dating website",
  description: "Add Photo page",
  keywords: ["add photo", "page", "example"],
};
const page = () => {
  return <AddPhoto />;
};

export default page;
