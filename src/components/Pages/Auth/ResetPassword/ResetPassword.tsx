"use client";
import logo from "@/assets/logo/dating-logo.png";
import authBannerImage from "@/assets/auth/dating-auth.png";
import InputComponent from "@/components/ui/InputComponent";
import Button from "@/components/ui/Button";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { Form } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import sniginpic from "@/assets/singnpic.jpg";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const onFinish = async (values: ResetPasswordFormValues) => {
    try {
      const res = await resetPassword({
        email,
        newPassword: values.password,
      }).unwrap();
      toast.success(res.message);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex h-full md:h-screen w-full"
      style={{
        backgroundImage: `url(${sniginpic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Color Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust color and opacity for the overlay
        }}
      ></div>

      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto z-10 relative">
        <div className="w-full max-w-xl bg-[#7E8CA4] rounded-lg shadow-lg px-8 py-6">
          <div className="text-center mb-8">
            <div className="w-28 h-28 mx-auto relative space-y-2">
            <div className="flex justify-center">
              <Image src={logo} alt="logo" width={180} height={80} className="" />
            </div>

            
            </div>
            <h2 className="text-3xl font-semibold text-white mt-4">
              Reset Your Password
            </h2>
            <p className="text-white">
              Enter your new password to reset your account password.
            </p>
          </div>
          <Form layout="vertical" onFinish={onFinish} className="space-y-5">
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter a new password",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters",
                },
              ]}
              hasFeedback
            >
              <InputComponent isPassword placeholder="New Password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match"));
                  },
                }),
              ]}
              hasFeedback
            >
              <InputComponent isPassword placeholder="Confirm New Password" />
            </Form.Item>
            <Button loading={isLoading} type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="mt-5 text-center">
            <Link href="/login" className="hover:underline ml-1 text-white">
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src={authBannerImage}
          alt="Forgot Password Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
