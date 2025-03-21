'use client';
import { useContactToAdminMutation } from '@/redux/features/contact/contactApi';
import { useGetMyProfileQuery } from '@/redux/features/profile/profileApi';
import { useState } from 'react';
import { BsSend } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineHeadset } from 'react-icons/md';

export default function ContactForm() {
  const [contactToAdmin, { isLoading, isError, isSuccess }] = useContactToAdminMutation();

  const { data } = useGetMyProfileQuery({});

  console.log(`sdfsdfsd`, data?.data?.attributes)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: data?.data?.attributes.email,
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await contactToAdmin(formData).unwrap();
      console.log('Message sent successfully:', response);
      alert('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center px-4 md:py-10 py-5 mt-20">
      <h2 className="text-3xl font-bold text-black mb-4">Drop Us a Line</h2>
      <p className="text-gray-800 text-center max-w-2xl mb-8">
        Have questions or need assistance? We&apos;re here to help. Reach out to our support team for any inquiries about your account, job applications, or employer services.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center mb-10">
        <div>
          <div className="text-blue-500 text-4xl"><MdOutlineHeadset className='m-auto' /></div>
          <p className="font-semibold mt-2">Contact Us</p>
          <p className="text-gray-800">+48 654-430-309</p>
        </div>
        <div className=''>
          <div className="text-blue-500 text-4xl"><BsSend className='m-auto' /></div>
          <p className="font-semibold mt-2">Email</p>
          <p className="text-gray-800">contact@hello.com</p>
        </div>
        <div className='sm:px-2'>
          <div className="text-blue-500 text-4xl"><CiLocationOn className='m-auto' /></div>
          <p className="font-semibold mt-2">Address</p>
          <p className="text-gray-800">Seattle, Washington, USA</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border p-6 rounded-lg w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
        </div>
        <div className="grid grid-cols-1 border md:grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            value={formData.subject}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-3 border rounded h-40 mb-4"
          onChange={handleChange}
          value={formData.message}
          required
        ></textarea>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#0842ab] text-white py-2 px-6 rounded hover:bg-[#0842ab] transition"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {isSuccess && <p className="text-green-600 text-center mt-4">Message sent successfully!</p>}
        {isError && <p className="text-red-600 text-center mt-4">Failed to send message.</p>}
      </form>
    </div>
  );
}
