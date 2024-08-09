import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

const BenefitSection = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2 text-primary-dark">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default function WhySignIn() {
  const benefits = [
    {
      title: "Personalized Experience",
      content: "When you're signed in, we can tailor your experience based on your preferences, order history, and favorite restaurants. This means quicker ordering and more relevant recommendations."
    },
    {
      title: "Faster Checkout",
      content: "Save your delivery addresses and payment methods securely for quicker, more convenient ordering. No need to enter your details every time!"
    },
    {
      title: "Order History",
      content: "Access your complete order history, making it easy to reorder your favorite meals or track your spending habits."
    },
    {
      title: "Exclusive Offers",
      content: "Receive personalized promotions and be the first to know about special deals from your favorite restaurants."
    },
    {
      title: "Seamless Multi-device Experience",
      content: "Start an order on your phone and finish it on your computer. Your account keeps everything in sync across all your devices."
    },
    {
      title: "Enhanced Customer Support",
      content: "If you need assistance, our support team can provide faster, more personalized help when you're signed in."
    }
  ];

  return (
    <MainLayout title="Why Sign In | Doorbell">
      <div className="bg-white px-4 py-8 sm:px-6 sm:py-24 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Why Sign In to Doorbell?
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            At Doorbell, we&apos;re committed to providing you with the best possible food delivery experience.
            Signing in to your account unlocks a range of benefits that make ordering easier, faster, and more
            personalized. Here&apos;s why creating an account and staying signed in is worth it:
          </p>

          {benefits.map((benefit, index) => (
            <BenefitSection key={index} {...benefit} />
          ))}

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">How We Handle Your Data</h2>
            <p className="mb-4 text-gray-700">
              We understand that your data is important, and we&apos;re committed to handling it responsibly and transparently:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your personal information is encrypted and stored securely.</li>
              <li>We never sell your data to third parties.</li>
              <li>You have full control over your data and can request to view, update, or delete it at any time.</li>
              <li>We only use your data to improve your experience and provide the services you&apos;ve requested.</li>
              <li>Our data practices comply with all relevant privacy laws and regulations.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              For more details, please read our <Link href="/privacy" className="text-primary-dark hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Ready to enhance your Doorbell experience?
            </p>
            <Link href="/signup" className="bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary-darker transition duration-300">
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
