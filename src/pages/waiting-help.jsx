import React from 'react';
import MainLayout from "@/layouts/MainLayout";

const InfoSection = ({ title, content }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default function WaitingHelp() {
  const infoSections = [
    {
      title: "What does 'Waiting for Confirmation' mean?",
      content: "When your order is in the 'Waiting for Confirmation' stage, it means we're in the process of verifying your order details with the restaurant or service provider. This crucial step ensures that your order can be fulfilled accurately and efficiently."
    },
    {
      title: "Why is this step necessary?",
      content: "This step helps prevent issues such as unavailable items, special preparation requests, or any discrepancies in pricing or menu options. It's our way of double-checking that everything is in order before we proceed with your delivery."
    },
    {
      title: "How long does it usually take?",
      content: "Typically, this process takes about 5-10 minutes. However, during peak hours or for complex orders, it might take a bit longer. Rest assured, we're working as quickly as possible to confirm your order."
    },
    {
      title: "What happens next?",
      content: "Once your order is confirmed, it moves to the 'Waiting Assignment' stage, where we'll match your order with the nearest available delivery driver. From there, you'll be able to track the progress of your order in real-time through our app."
    },
    {
      title: "What if there's an issue with my order?",
      content: "If we encounter any problems during the confirmation process (e.g., an item is unavailable), we'll contact you promptly to resolve the issue. This might be through the app, SMS, or a phone call, depending on the urgency and your contact preferences."
    }
  ];

  return (
    <MainLayout title="Waiting for Confirmation Help | Doorbell">
      <div className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Understanding the &apos;Waiting for Confirmation&apos; Stage
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            At Doorbell, we want to ensure your order is processed smoothly from start to finish.
            The &apos;Waiting for Confirmation&apos; stage is an important part of this process. Here&apos;s everything
            you need to know about this stage:
          </p>
          {infoSections.map((section, index) => (
            <InfoSection key={index} {...section} />
          ))}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700">
              Tip: Keep an eye on your phone and our app during this stage. If we need to reach you about your order,
              we&apos;ll send you a notification or give you a call.
            </p>
          </div>
          <p className="mt-8 text-lg text-gray-700">
            If you have any other questions or concerns while waiting for your order confirmation,
            please don&apos;t hesitate to contact our customer support team through the app or website.
            We&apos;re here to help ensure your Doorbell experience is as smooth as possible!
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
