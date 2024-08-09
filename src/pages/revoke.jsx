import { useState } from 'react'
import MainLayout from '@/layouts/MainLayout'

export default function Revoke() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // TODO: Implement the API call to handle data revocation
    console.log('Data revocation requested for:', email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-lg p-4 text-center">
        <h2 className="mb-3 text-2xl font-bold">Request Received</h2>
        <p>
          Your request to revoke your data from Doorbell Zatheka has been
          received. Our team will process this within the standard retention
          period of 30 days.
        </p>
      </div>
    )
  }

  return (
    <MainLayout title={'Revoke | Doorbell - Zonse Momo App'}>
      <div className="mx-auto my-32 max-w-lg p-4">
        <h1 className="mb-4 text-center text-3xl font-bold">Revoke My Data</h1>
        <p className="mb-4">
          To revoke your data from Doorbell Zatheka, please enter your email
          address. Revocation means that we will delete your personal data from
          our systems. This includes:
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>Account details</li>
          <li>Order history</li>
          <li>Any other identifiable information</li>
        </ul>
        <p>Certain anonymized data may be retained for analytical purposes.</p>
        <div className="my-4 bg-blue-100 p-3">
          <p>
            <strong>Why it&apos;s important:</strong> Data revocation ensures
            your right to privacy and control over your personal information.
            It&apos;s part of our commitment to your data security.
          </p>
          <p>
            <strong>Retention Period:</strong> After your request, there is a
            standard retention period of 30 days during which your data will be
            processed for deletion.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <label htmlFor="email" className="mb-2 block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Revoke My Data
          </button>
        </form>
      </div>
    </MainLayout>
  )
}
