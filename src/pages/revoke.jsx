import { useState } from 'react'
import Link from 'next/link'
import MainLayout from '@/layouts/MainLayout'

export default function ChangePhone() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [customerId, setCustomerId] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // TODO: Implement the API call to handle phone number change request
    // console.log('Phone number change requested for:', phoneNumber, 'Customer ID:', customerId)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-lg p-4 text-center">
        <h2 className="mb-3 text-2xl font-bold">Request Received</h2>
        <p>
          Your request to change your phone number has been received. Our team
          will get in touch with you soon to process this request.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <MainLayout title={'Change Phone Number | Doorbell - Zonse Momo App'}>
      <div className="mx-auto my-32 max-w-lg p-4">
        <h1 className="mb-4 text-center text-3xl font-bold">
          Change Phone Number
        </h1>
        <p className="mb-4">
          To request a change of your phone number, please enter your current
          phone number and customer ID. We will get in touch with you to verify
          your identity and process the change.
        </p>
        <div className="my-4 bg-blue-100 p-3">
          <p>
            <strong>Why it&apos;s important:</strong> Keeping your phone number
            up to date ensures you can access your account and receive important
            notifications.
          </p>
          <p>
            <strong>Processing Time:</strong> We aim to process your request
            within 2-3 business days.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <label htmlFor="phoneNumber" className="mb-2 block">
            Current Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <label htmlFor="customerId" className="mb-2 block">
            Customer ID:
          </label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2"
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Submit Change Request
          </button>
        </form>
      </div>
    </MainLayout>
  )
}
