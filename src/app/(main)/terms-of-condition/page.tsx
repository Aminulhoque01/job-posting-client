import TermsOfCondition from "@/components/Pages/TermsOfCondition/TermsOfCondition";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Condition | 1Plus1 Dating website",
  description: "This is the terms of condition page for our application",
  keywords: ["terms of condition", "page", "example"],
};

const page = () => {
  return <TermsOfCondition />;
};

export default page;
