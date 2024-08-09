import React from 'react';
import MainLayout from "@/layouts/MainLayout";

const InfoSection = ({ title, content }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2 text-primary-dark">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default function DeliveryTimeHelp() {
  const sections = [
    {
      title: "How Our Delivery Slot System Works",
      content: "At Doorbell, we use a dynamic delivery slot system to ensure efficient and timely deliveries. We offer a limited number of delivery slots per hour, which directly corresponds to the number of drivers available in our pool at any given time. This system helps us maintain high-quality service and realistic delivery times."
    },
    {
      title: "Why We Use This System",
      content: "This approach allows us to: 1) Provide accurate delivery estimates, 2) Ensure drivers aren't overworked, 3) Maintain food quality by preventing long wait times, and 4) Balance demand across our service area. By matching our capacity to real-time driver availability, we can offer you the best possible delivery experience."
    },
    {
      title: "How Slots Are Allocated",
      content: "Delivery slots are allocated on a first-come, first-served basis. When you place an order, you'll see the available time slots based on our current driver capacity. If a particular time slot is full, it won't be shown as an option. We update these slots in real-time as orders are placed and driver availability changes."
    },
    {
      title: "Peak Hours and Limited Availability",
      content: "During peak hours (typically lunch and dinner times), delivery slots may fill up quickly. We recommend placing your order in advance if you need delivery during these busy periods. Keep in mind that unexpected events like bad weather can also affect driver availability and, consequently, the number of available slots."
    },
    {
      title: "What If No Slots Are Available?",
      content: "If you don't see any available slots that work for you, we suggest trying again in a short while. Our driver pool is dynamic, and new slots may open up as drivers become available or as we adjust to demand. Alternatively, you can try scheduling your order for a later time when more slots are likely to be available."
    },
    {
      title: "Improving Our Service",
      content: "We're constantly working to expand our driver pool and improve our allocation system. Your patience and understanding help us maintain a balanced, efficient service that benefits all our customers. We appreciate your support as we grow and enhance our delivery capabilities."
    }
  ];

  return (
    <MainLayout title="Delivery Time Help | Doorbell">
      <div className="bg-white px-4 sm:px-6 py-24 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Understanding Our Delivery Time Slots
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            At Doorbell, we strive to provide the best possible delivery experience. Part of this commitment
            involves managing our delivery times efficiently. Here&apos;s a detailed explanation of how our
            delivery slot system works and why we use it:
          </p>

          {sections.map((section, index) => (
            <InfoSection key={index} {...section} />
          ))}

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700 font-semibold">
              Tip: For the best chance of getting your preferred delivery time, try to place your order
              in advance, especially during peak hours. Keep an eye out for new slots that may open up
              if your initial preferred time isn&apos;t available.
            </p>
          </div>

          <p className="mt-8 text-lg text-gray-700">
            We@re committed to transparency and continuous improvement. If you have any questions about
            our delivery slot system or suggestions for how we can serve you better, please don&apos;t hesitate
            to contact our customer support team. Thank you for choosing Doorbell for your delivery needs!
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
