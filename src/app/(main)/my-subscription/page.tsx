import MySubscription from "@/components/Pages/MySubscription/MySubscription";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Subscription | 1Plus1 Dating website",
  description: "My Subscription page",
  keywords: ["my subscription", "page", "example"],
};
const page = () => {
  return <MySubscription />;
};

export default page;
