import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/layouts/MainLayout';

export default function Business() {
  const router = useRouter();
  
  useEffect(() => {  
    router.push(`/#list`)
  }, [router]);

  return (
    <MainLayout title="Business | Doorbell">
      <div className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Redirecting...
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Please wait while we redirect you to our business page.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}