"use client";
import Link from "next/link";
import React from "react";

const MySubscription = () => {
  return (
    <section className="w-full px-5 py-36 bg-[#F5F9FF]">
      <div className="w-full max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-xl md:text-2xl font-semibold mb-6">My Package</h1>

        {/* Subscription Box */}
        <div className="border rounded-lg bg-white shadow-md p-5 md:p-8">
          <div className="flex items-center justify-between gap-4">
            {/* Subscription Details */}
            <div className="flex items-start gap-4">
              <input
                type="radio"
                name="subscription"
                className="mt-1 w-5 h-5 text-primary focus:ring-blue-500"
                checked
                readOnly
              />
              <div>
                <h2 className="text-lg md:text-xl font-semibold">
                  Standard Subscription
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  $109.99 USD / 30 days &bull; $109.99 USD billed every 30 days
                </p>
                <p className="text-sm text-gray-500">
                  Price excludes applicable taxes
                </p>
              </div>
            </div>

            {/* Renew Button */}
            <button className="px-4 py-2 bg-primary hover:bg-blue-700 transition text-white rounded-md">
              Renew
            </button>
          </div>
        </div>

        {/* Upgrade Package Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/subscriptions">
            <button className="px-4 py-2 bg-primary hover:bg-blue-700 transition text-white rounded-md">
              Upgrade Package
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MySubscription;
