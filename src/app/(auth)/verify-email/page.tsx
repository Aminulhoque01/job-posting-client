import VerifyEmail from '@/components/Pages/Auth/VerifyEmail/VerifyEmail';
import { Metadata } from 'next';
import React from 'react';
export const metadata : Metadata = {
  title: 'Verify Email | 1Plus1 Dating website',
  description: 'This is the verify email page for our application',
  keywords: ['verify Email', 'page', 'example'],
};
const VerifyEmailPage = () => {
  return <VerifyEmail />;
};

export default VerifyEmailPage;
