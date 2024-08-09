import React from 'react';
import MainLayout from "@/layouts/MainLayout";

const DeliveryStep = ({ title, description }) => (
  <div className="mb-8 border rounded-lg p-4 shadow-sm">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

export default function DeliveryHelp() {
  const deliverySteps = [
    {
      title: "Waiting Confirmation",
      description: "We're cross-checking with service providers to ensure your order can be processed. This step helps prevent any issues with availability or special requests."
    },
    {
      title: "Waiting Assignment",
      description: "We're in the process of assigning the nearest available driver to your order. This ensures faster delivery and fresher food."
    },
    {
      title: "Picked Up",
      description: "Great news! The rider has picked up your order and is on the way to your location. You can track their progress in real-time through our app."
    },
    {
      title: "Delivered",
      description: "The rider has arrived at your gate. Please be ready to receive your order. Remember to check that everything is correct before the rider leaves."
    },
    {
      title: "Fulfilled",
      description: "Your order is complete! We hope you enjoy your meal. Don't forget to rate your experience and provide feedback to help us improve our service."
    }
  ];

  return (
    <MainLayout title="Delivery Help | Doorbell">
      <div className="bg-white px-4 py-8 sm:px-6 sm:py-24 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Understanding Our Delivery Process
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            At Doorbell, we strive to make your delivery experience as smooth and transparent as possible.
            Here's a step-by-step guide to help you understand our delivery process:
          </p>
          {deliverySteps.map((step, index) => (
            <DeliveryStep key={index} {...step} />
          ))}
          <p className="mt-8 text-lg text-gray-700">
            If you have any questions or concerns during any stage of the delivery process,
            please don't hesitate to contact our customer support team. We're here to help!
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
