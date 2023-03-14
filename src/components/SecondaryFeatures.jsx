import { useId } from 'react'

import { Container } from '@/components/Container'
import Title from "@/components/Title";
import {Bag, Chinese, Motorbike} from "@/components/HomeIcons";

const features = [
  {
    name: 'Food',
    description:
      'Order food from your favorite restaurants and get it delivered to your door.',
    icon: <Chinese />,
  },
  {
    name: 'Groceries',
    description:
      'Find anything you need from supermarkets, convenience stores, and more.',
    icon: <Bag />,
  },
  {
    name: 'Courier',
    description:
      'Send anything in your city with our courier service. We’ll get it there in a flash.',
    icon: <Motorbike />,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <Title title="Zonsezo, Delivered!" />
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="p-8 flex lg:flex-col gap-x-6 justify-between"
            >
                <div className="w-2/3 lg:w-1/3 lg:mx-auto">
                    {feature.icon}
                </div>
                <div>
                    <h3 className="text-xl lg:my-4 lg:text-center font-semibold text-gray-900">
                        {feature.name}
                    </h3>
                    <p className="mt-2 text-lg text-gray-700 lg:text-center">{feature.description}</p>
                </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
