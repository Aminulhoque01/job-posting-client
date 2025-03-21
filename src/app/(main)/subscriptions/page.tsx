import Subscriptions from "@/components/Pages/Subscriptions/Subscriptions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Subscription | 1Plus1 Dating website",
  description: "Subscription page",
  keywords: ["subscription", "page", "example"],
};
const page = () => {
  return <Subscriptions />;
};

export default page;
