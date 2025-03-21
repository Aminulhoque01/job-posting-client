"use client";
import InputComponent from "@/components/ui/InputComponent";
import logo from "@/assets/logo/dating-logo.png";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { RegisterFormValues } from "@/types/authTypes";
import { Checkbox, Form } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import sniginpic from "@/assets/singnpic.jpg";
import Button from "@/components/ui/Button";
import Image from "next/image";

const Register = () => {
  const router = useRouter();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const onFinish = async (values: RegisterFormValues) => {
    const registrationData = { ...values, role: "user" };

    try {
      const res = await registerUser(registrationData).unwrap();
      console.log(res);

      toast.success(res.message);
      router.push(`/verify-email?email=${registrationData.email}&type=register`);
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
      {/* Background Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(0, 0, 255, 0.6)", // Blue background with transparency
        }}
      ></div>

      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto z-10 relative">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg px-8 py-6">

          <div className="flex justify-center">
            <Image src={logo} alt="logo" width={180} height={80} className="" />
          </div>

          <div className=" mb-8 space-y-2">
            <h2 className="text-3xl font-semibold text-black mt-4">Register Your Account</h2>

          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <InputComponent placeholder="Full Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <InputComponent placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <InputComponent placeholder="Password" isPassword />
            </Form.Item>

            <Form.Item>
              <Checkbox className="text-black">
                I accept <span className="text-blue-500">Terms & Condition</span>
              </Checkbox>
            </Form.Item>

            <Button type="submit" loading={isLoading} className="w-full">
              Register
            </Button>
          </Form>
          <p className="text-center text-sm text-black mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;





// import sniginpic from "@/assets/singnpic.jpg"
// import React from "react";

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen bg-cover bg-center flex items-center justify-center"  style={{
//       backgroundImage: `url(${sniginpic.src})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}>
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
//         {/* Logo */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-blue-600">WERKSTEKKIE</h1>
//         </div>

//         {/* Sign In Title */}
//         <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//           Please Sign In
//         </h2>

//         {/* Form */}
//         <form>
//           {/* Email Input */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Your Email
//             </label>
//             <input
//               type="email"
//               placeholder="example@gmail.com"
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15 12h.01M9 12h.01M12 12h.01M12 12h.01M12 15h.01M9 15h.01M15 15h.01M12 9h.01M9 9h.01M15 9h.01"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//               />
//               <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
//                 Remember me
//               </label>
//             </div>
//             <a href="#" className="text-sm text-blue-600 hover:underline">
//               Forgot password?
//             </a>
//           </div>

//           {/* Sign In Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Sign in
//           </button>
//         </form>

//         {/* Sign Up Link */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Don't have an account?{" "}
//           <a href="#" className="text-blue-600 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

