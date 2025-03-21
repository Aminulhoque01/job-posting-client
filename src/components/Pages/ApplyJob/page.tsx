"use client";

import { useEffect, useState } from "react";
import { Button, Input, Form } from "antd";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useGetSingleJobQuery, useApplyToJobMutation } from "@/redux/features/alljobSearch/alljobSearch";
import { toast } from "sonner";

const Upload = dynamic(() => import("antd").then((mod) => mod.Upload), { ssr: false });

interface JobApplicationValues {
  name: string;
  email: string;
  phone: string;
  experience: string;
  fitReason?: string;
  coverLetter?: string;
}

// Define the structure of the error response
interface ErrorResponse {
  data: {
    message: string;
  };
}

export default function JobApplicationForm() {
  const { id } = useParams();
  const { data } = useGetSingleJobQuery(id);
  console.log(data?.data?.attributes?.result)

  const [applyToJob, { isLoading: applying }] = useApplyToJobMutation();

  const oneData = data?.data?.attributes?.result;
  const [form] = Form.useForm();
  const [file, setFile] = useState<File | null>(null);
  const [coverfile, setCoverFile] = useState<File | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = async (values: JobApplicationValues) => {
    if (!file) {
      toast.error("Please upload your resume.");
      return;
    }

    const formData = new FormData();
    formData.append("jobId", id as string);
    formData.append("fullName", values.name);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phone);
    formData.append("experience", values.experience);
    if (values.fitReason) formData.append("whyFitForRole", values.fitReason);
    if (values.coverLetter) formData.append("coverLetter", values.coverLetter);
    if (coverfile) formData.append("coverLetter", coverfile);
    formData.append("resume", file);

    try {
      const response = await applyToJob(formData).unwrap();
      toast.success(response.message || "Application submitted successfully!");
      form.resetFields();
      setFile(null);
    } catch (error) {
      // Typecast error to ErrorResponse
      const err = error as ErrorResponse;
      toast.error(err?.data?.message || "Failed to submit application.");
    }

    console.log(`formdata`, formData);
  };

  return (
    <div className=" min-h-screen mt-30 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{oneData?.title}</h1>
          <a href="#" className="text-blue-600 hover:underline text-sm mb-4 block">
            <p>{oneData?.company}</p>
          </a>
          <div className="flex items-center space-x-5 py-5">
            <div className='border rounded-md px-3 py- py-2'>{oneData.experinceLavel}</div>
            <div className='border  rounded-md px-3 py-2  '>{oneData.employmentType}</div>
          </div>
          <p className="text-gray-700 mb-6">{oneData?.description}</p>
        </div>

        <div className="w-full md:max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-4">
            <Form.Item name="name" label="Your Name" rules={[{ required: true, message: "Please enter your full name" }]}>
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item name="email" label="Your Email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item name="phone" label="Your Phone Number" rules={[{ required: true, message: "Please enter your phone number" }]}>
              <Input placeholder="Your Phone Number" />
            </Form.Item>

            <Form.Item name="experience" label="Experience (Years)" rules={[{ required: true, message: "Please enter your experience" }]}>
              <Input placeholder="1,2,3" />
            </Form.Item>

            <Form.Item name="fitReason" label="Why are you a good fit for this role?">
              <Input.TextArea placeholder="Write here.." />
            </Form.Item>

            <Form.Item name="coverLetter" label="Cover Letter" >
             
              <Upload
                beforeUpload={(file) => {
                  setCoverFile(file as File);
                  return false;
                }}
                maxCount={1} // Ensure only 1 file is uploaded
              >
                <Button >Select File</Button>
                
              </Upload>
            </Form.Item>

            <Form.Item name="resume" label="Upload Your CV/Resume" rules={[{ required: true, message: "Please upload your CV/Resume" }]}>
              <Upload
                beforeUpload={(file) => {
                  setFile(file as File);
                  return false;
                }}
                maxCount={1} // Ensure only 1 file is uploaded
              >
                <Button>Select File</Button>
              </Upload>
            </Form.Item>

            <Button type="primary" htmlType="submit" disabled={applying} className="w-full">
              {applying ? "Applying..." : "Apply Now"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}



