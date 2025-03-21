"use client"

import HeroSection from "@/components/Pages/Home/HeroSection";

import Jobs from "@/components/Pages/Home/Jobs";
import SuccessStory from "@/components/Pages/Home/SuccessStory";
import React from "react";


const Home = () => {
  return (
    <section className="">
      
      <HeroSection  />
      <Jobs />
      <SuccessStory />
    </section>
  );
};

export default Home;


