"use client";
import { useState } from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useGetFaqQuery } from "@/redux/features/faq/faqApi";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [activeKey, setActiveKey] = useState<string[]>(["0"]);
  const { data, isLoading, isError } = useGetFaqQuery({});

  if (isLoading) {
    return <div>Loading FAQs...</div>;
  }

  if (isError) {
    return <div>Error fetching FAQs.</div>;
  }

  const faq: FaqItem[] = data?.data || []; // Ensure it's an array of FaqItem

  return (
    <div className=" flex flex-col items-center md:py-10 py-5 px-4 mt-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        {faq.length > 0 ? (
          faq.map((item, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() =>
                  setActiveKey((prev) => (prev.includes(String(index)) ? [] : [String(index)]))
                }
                className={`w-full text-left p-4 flex justify-between items-center font-medium ${
                  activeKey.includes(String(index)) ? "bg-[#0842ab] text-white" : "text-gray-800"
                }`}
              >
                {item.question}
                {activeKey.includes(String(index)) ? <MinusOutlined /> : <PlusOutlined />}
              </button>
              {activeKey.includes(String(index)) && item.answer && (
                <div className="p-4 text-gray-700 bg-gray-50">{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-700">No FAQs available.</div>
        )}
        <div className="mt-10 text-center">
          <p className="text-gray-600">Still have questions?</p>
          <p className="text-[#0842ab] font-medium">
            Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
          </p>
          <Button type="primary" className="mt-4 px-6 py-2 text-white bg-[#0842ab] hover:bg-[#0842ab] mb-10">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
