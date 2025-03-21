'use client';
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { loggedUser, logoutUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { LoginFormValues } from "@/types/authTypes";
import { Checkbox, Form } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useState } from "react"; // Added useState
import Cookies from "js-cookie";
import Button from "@/components/ui/Button";
import logo from "@/assets/logo/dating-logo.png";
import Image from "next/image";
import InputComponent from "@/components/ui/InputComponent";
import sniginpic from "@/assets/singnpic.jpg";



const Login = () => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Use state to store the logout parameter
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    // This code will only run in the client-side environment
    const params = new URLSearchParams(window.location.search);
    const logoutParam = params.get("logout");
    if (logoutParam) {
      setLogout(true); // Set state for logout
    }

    // Auto-login on page refresh
    const token = Cookies.get("token");
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : null;
    const refreshToken = Cookies.get("refreshToken");

    if (token && user && refreshToken) {
      dispatch(loggedUser({ user, token, refreshToken }));
    }
  }, [dispatch]);

  // Handle logout if the logout state is true
  useEffect(() => {
    if (logout) {
      dispatch(logoutUser());
    }
  }, [logout, dispatch]);

  const onFinish = async (values: LoginFormValues) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res?.data?.attributes?.user?.role === "admin") {
        toast.error("You do not have access to the main website");
        return;
      }

      toast.success(res.message);

      const accessToken = res?.data?.attributes?.tokens?.accessToken;
      const refreshToken = res?.data?.attributes?.tokens?.refreshToken;

      // Store token in Redux and cookies
      dispatch(
        loggedUser({
          user: res?.data?.attributes?.user,
          token: accessToken,
          refreshToken: refreshToken,
        })
      );

      router.push("/");
    } catch (error) {
      console.error(error);
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
      {/* Color Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(3, 47, 243, 0.71)", // Background overlay with black color and 40% opacity
        }}
      ></div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto z-10 relative">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md px-8 py-5">
          <div className=" mb-8 space-y-2">

            <div className="flex justify-center">
              <Image src={logo} alt="logo" width={180} height={80} className="" />
            </div>

            <div className="pt-10 mb-8 space-y-2">
              <h2 className="text-3xl font-semibold text-black mt-4">Please Sign In</h2>

            </div>
          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}>
              <InputComponent placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}>
              <InputComponent placeholder="Password" isPassword />
            </Form.Item>
            <div className="flex justify-between items-center mb-4">
              <Checkbox className="text-black text-[#8c8d8f]">Remember me</Checkbox>
              <Link href="/forgot-password" className="text-sm text-[#8c8d8f] hover:underline hover:text-primary">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" loading={isLoading} className="w-full">
              Sign In
            </Button>
          </Form>
          <p className="text-center  text-sm text-black mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
