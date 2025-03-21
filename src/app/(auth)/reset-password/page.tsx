import ResetPassword from '@/components/Pages/Auth/ResetPassword/ResetPassword';
import { Metadata } from 'next';
import React from 'react';
export const metadata : Metadata = {
  title: 'Reset Password | 1Plus1 Dating website',
  description: 'This is the reset password page for our application',
  keywords: ['reset password', 'page', 'example'],
};
const ResetPasswordPage = () => {
  return <ResetPassword/>;
};

export default ResetPasswordPage;
