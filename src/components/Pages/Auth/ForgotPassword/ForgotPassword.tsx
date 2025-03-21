"use client";
import InputComponent from "@/components/ui/InputComponent";
import { Form } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import sniginpic from "@/assets/singnpic.jpg";
import logo from "@/assets/logo/dating-logo.png";
import Image from "next/image";


interface LoginFormValues {
  email: string;
}

const ForgotPassword = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const router = useRouter();

  const onFinish = async (values: LoginFormValues) => {
    try {
      const res = await forgotPassword({ email: values.email }).unwrap();
      toast.success(res.message);
      router.push(`/verify-email?email=${values.email}&type=forgot-password`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex h-full md:h-screen w-full"
      style={{
        backgroundImage: `url(${sniginpic.src})`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Color Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(3, 47, 243, 0.71)", // Background overlay with black color and 40% opacity
        }}
      ></div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto z-10 relative">
        {/* Card with white background */}
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg px-8 py-6">
          <div className="text-center mb-8">
            <div className="flex justify-center">
              <Image src={logo} alt="logo" width={180} height={80} className="" />
            </div>

          
            <h2 className="text-3xl font-semibold text-black mt-4">
              Forgot Your Password?
            </h2>
            <p className="text-gray-600">
              Please enter the email address linked to your account. We&apos;ll send a one-time password (OTP) to your email for verification.
            </p>
          </div>
          <Form layout="vertical" onFinish={onFinish} className="space-y-5">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <InputComponent placeholder="Enter your email" />
            </Form.Item>
            <Button type="submit" loading={isLoading} className="w-full">
              Send OTP
            </Button>
          </Form>
          <div className="mt-5 text-center">
            <Link
              href="/login"
              className="text-black font-semibold hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
