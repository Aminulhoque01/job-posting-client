import { useState, useEffect } from "react";
import { Form, Input, Button, Upload } from "antd";
import { toast } from "sonner";
import { useApplyToJobMutation } from "@/redux/features/alljobSearch/alljobSearch";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  experience: string;
  fitReason?: string;
  coverLetter?: string;
}

const ApplicationForm = () => {
  const [form] = Form.useForm();
  const [applyToJob] = useApplyToJobMutation();
  const [file, setFile] = useState<File | null>(null);
  const [mounted, setMounted] = useState(false);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = async (values: FormValues) => {
    if (!file) {
      toast.error("Please upload your resume.");
      return;
    }

    const id = "some-job-id"; // Replace with actual job ID
    const formData = new FormData();
    formData.append("jobId", id);
    formData.append("fullName", values.name);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phone);
    formData.append("experience", values.experience);
    if (values.fitReason) formData.append("whyFitForRole", values.fitReason);
    if (values.coverLetter) formData.append("coverLetter", values.coverLetter);
    formData.append("resume", file);

    try {
      setApplying(true);
      const response = await applyToJob(formData).unwrap();
      toast.success(response.message || "Application submitted successfully!");
      form.resetFields();
      setFile(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error((error as { message: string })?.message || "Failed to submit application.");
      }
    } finally {
      setApplying(false);
    }
  };

  return (
    <div className="max-w-md mx-auto  p-6 rounded-lg shadow-md">
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

        <Form.Item name="coverLetter" label="Cover Letter">
          <Input.TextArea placeholder="Write here.." />
        </Form.Item>

        <Form.Item name="resume" label="Upload Your CV/Resume" rules={[{ required: true, message: "Please upload your CV/Resume" }]}>
          <Upload
            beforeUpload={(file) => {
              setFile(file);
              return false;
            }}
            maxCount={1}
          >
            <Button>Select File</Button>
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit" disabled={applying} className="w-full">
          {applying ? "Applying..." : "Apply Now"}
        </Button>
      </Form>
    </div>
  );
};

export default ApplicationForm;
