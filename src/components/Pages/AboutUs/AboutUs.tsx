"use client";
import React from "react";
import aboutUs from "@/assets/about/about.jpg";
import aboutUs2 from "@/assets/about/about2.jpg";
import Image from "next/image";
import Link from "next/link";
import SubscribeSection from "../Home/Subscriptions";

const AboutUs = () => {
  return (
    <div className="container w-full mt-20 ">
      <div className="mt-10">

        <div className="w-full   mx-auto md:py-10 py-5 ">

          <div className="md:px-8 px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Empowering Careers, <br /> Enabling Success
                </h1>
                <p className="text-gray-600 mb-6">
                  Whether you&apos;re searching for your dream job or looking to hire top
                  talent, our platform is designed to deliver exceptional results.
                  With a commitment to innovation and trust, we are reshaping the
                  way people find and fill opportunities.
                </p>

                <Link href="/contact-us">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Contact Us
                  </button>

                </Link>
              </div>


              <div className="flex justify-center">
                <Image src={aboutUs} alt={"about"} className="rounded-lg shadow-md" />
              </div>
            </div>


            <div className="my-12"></div>


            <div className="grid grid-cols-1 lg:grid-cols-2  items-center">

              <div className="flex justify-center">

                <Image src={aboutUs2} alt={"about"} className="rounded-lg shadow-md" />
              </div>

              <div className="bg-white md:p-8 py-8 md:py-0">
                <h2 className="text-blue-600 font-semibold text-sm uppercase mb-2">
                  Find Jobs
                </h2>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Create free account and start applying for your dream job today
                </h3>
                <p className="text-gray-600 mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum is simply dummy.
                </p>
                <div className="mt-6 flex justify-start lg:justify-end">
                  <Link href="/browser-job">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="md:mt-10">
            <SubscribeSection />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
