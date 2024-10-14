import Link from 'next/link'
import MainLayout from '@/layouts/MainLayout'
import formatFormData from '@/utils/formatFormData'
import React, { useEffect, useRef, useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'
;('use client')
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import ToastContainer from '@/components/toast/toastContainer'
import { useToast } from '@/components/toast/use-toast'
import { IconoirProvider, InfoCircle } from 'iconoir-react'
import { RequestReceivedMessage } from '@/components/RequestRecieved'

export default function Revoke() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <RevokeForm />
    </GoogleReCaptchaProvider>
  )
}

export function RevokeForm() {
  const inputRef = useRef(null)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phone, setPhone] = useState()
  const [customerNumber, setCustomerNumber] = useState('')
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const formRef = useRef()
  const { toast } = useToast()
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const input = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
    setCustomerNumber(input)
  }

  useEffect(() => {
    if (inputRef.current) {
      const formattedValue = formatDisplay(customerNumber)
      inputRef.current.value = formattedValue

      // Move cursor to end of input
      const len = formattedValue.length
      inputRef.current.setSelectionRange(len, len)
    }
  }, [customerNumber])

  const formatDisplay = (value) => {
    if (value.length <= 4) return value
    return `${value.slice(0, 4)}-${value.slice(4)}`.toUpperCase()
  }

  const clearForm = () => {
    formRef.current?.reset()
    setPhone('')
    setCustomerNumber('')
  }

  const sendMail = async (data, token) => {
    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.message === 'Success') {
        const response = await fetch('/api/revoke', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        setIsSubmitted(true)

        return response
      } else {
        setError('reCAPTCHA verification failed. Please try again.')
      }
    } catch (error) {
      setError('An error occurred. Please try again later.')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    const formData = new FormData(formRef.current)

    try {
      const token = await executeRecaptcha('revoke')

      if (formData) {
        const data = Object.fromEntries(formData)

        const formattedData = await formatFormData(data)

        await sendMail(formattedData, token)

        clearForm()

        toast({
          title: 'Form Submitted!',
          description:
            'Your request to revoke your data from Doorbell Zatheka has been received.',
          duration: 4000,
          type: 'success',
        })
      }
    } catch (err) {
      toast({
        description: error,
        duration: 4000,
        title: 'Error!',
        type: 'error',
      })
    } finally {
      setFormLoading(false)
      setRefreshReCaptcha(true)
      clearForm()
    }
  }

  const handleGoBack = () => {
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return <RequestReceivedMessage onGoBack={handleGoBack} />
  }

  return (
    <IconoirProvider
      iconProps={{
        color: '#5e5e5e',
        strokeWidth: 2,
        width: '1em',
        height: '1em',
      }}
    >
      <MainLayout title={'Revoke | Doorbell - Zonse Momo App'}>
        <div className="relative mx-auto my-32 max-w-lg select-none p-4">
          {formLoading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
          )}
          <h1 className="mb-4 text-center text-3xl font-bold">
            Revoke My Data
          </h1>
          <p className="mb-4">
            To revoke your data from Doorbell Zatheka, please enter your Phone
            Number and we will send you a One Time Pin to verify its indeed you.
            Revocation means that we will delete your personal data from our
            systems. This includes:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>Account details</li>
            <li>Order history</li>
            <li>Any other identifiable information</li>
          </ul>
          <p>
            Certain anonymized data may be retained for analytical purposes.
          </p>
          <div className="my-4 rounded-lg bg-blue-100 p-3">
            <p>
              <strong>Why it&apos;s important:</strong> Data revocation ensures
              your right to privacy and control over your personal information.
              It&apos;s part of our commitment to your data security.
            </p>
            <br></br>
            <p>
              <strong>Retention Period:</strong> After your request, there is a
              standard retention period of 30 days during which your data will
              be processed for deletion.
            </p>
          </div>
          <GoogleReCaptcha refreshReCaptcha={refreshReCaptcha} />
          <form onSubmit={handleSubmit} ref={formRef} className="mt-6">
            <div className="my-6 sm:col-span-2">
              <div className="flex justify-between text-sm leading-6">
                <label
                  htmlFor="customer_number"
                  className="block text-base font-semibold text-gray-900"
                >
                  Customer Number
                </label>
              </div>
              <div className="relative my-2.5">
                <input
                  ref={inputRef}
                  id="customer_number"
                  type="text"
                  maxLength={9} // Increased to allow for dash
                  name="customer_number"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <div className="flex items-center justify-start gap-2 text-sm leading-6 text-gray-400">
                  <InfoCircle />
                  <p id="customer-number-description">
                    This number can be found in account security
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between text-sm leading-6">
                <label
                  htmlFor="phone"
                  className="block text-base font-semibold text-gray-900"
                >
                  Phone
                </label>
              </div>
              <div className="my-2.5">
                <PhoneInput
                  id="phone"
                  country="MW"
                  name="phone"
                  autoComplete="tel"
                  aria-describedby="phone-description"
                  value={phone}
                  international={true}
                  withCountryCallingCode={true}
                  defaultCountry={'MW'}
                  onChange={setPhone}
                  maxLength={17}
                  useNationalFormatForDefaultCountryValue={true}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="flex items-center justify-start gap-2 text-sm leading-6">
                  <InfoCircle></InfoCircle>
                  <p id="phone-description" className="text-gray-400">
                    Use a valid phone number
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-blue-500 py-4 text-white hover:bg-blue-600"
            >
              Revoke My Data
            </button>
          </form>
        </div>

        <ToastContainer />
      </MainLayout>
    </IconoirProvider>
  )
}
