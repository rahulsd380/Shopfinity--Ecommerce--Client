import ResetPasswordPage from '@/components/ResetPasswordPage/ResetPasswordPage';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ResetPasswordPage />
  </Suspense>
  );
};

export default page;