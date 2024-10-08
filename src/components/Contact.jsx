import { Button } from '@/components/Button'
import Title from '@/components/Title'
import formatFormData from '@/utils/formatFormData'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'
;('use client')
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import ToastContainer from './toast/toastContainer'
import { useToast } from './toast/use-toast'

export default function Contact() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <ContactForm />
    </GoogleReCaptchaProvider>
  )
}

function ContactForm() {
  const maxCharacters = 500
  const [description, setDescription] = useState('')
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [phone, setPhone] = useState()
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [isOverLimit, setIsOverLimit] = useState(false)
  const formRef = useRef()
  const { toast } = useToast()
  const [error, setError] = useState('')

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
    setIsOverLimit(description.length > maxCharacters)
  }

  const clearForm = () => {
    formRef.current?.reset()
    setPhone('')
    setDescription('')
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
        const response = await fetch('/api/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

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
      const token = await executeRecaptcha('register')

      if (formData) {
        const data = Object.fromEntries(formData)

        const formattedData = await formatFormData(data)

        await sendMail(formattedData, token)

        clearForm()

        toast({
          title: 'Form Submitted!',
          description:
            "Thank you for getting in touch us, we'll get back to you soon",
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

  return (
    <div id={'list'} className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          width={1024}
          height={768}
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://res.cloudinary.com/tiyeni/image/upload/v1723219047/owen-bruce-hcET0JIGXoI-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className=" px-6 lg:px-8">
          <div className="relative p-3">
            {' '}
            <div className=" mx-auto  max-w-xl lg:mx-0 lg:max-w-lg">
              <Title title="List Your Business with Us" center={false} />
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Join Doorbell! Get discovered. No worrying about logistics of
                getting your product to your customers!
              </p>

              <GoogleReCaptcha refreshReCaptcha={refreshReCaptcha} />
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                method="POST"
                className={`mt-16 select-none  space-y-4 transition-all duration-300 ${
                  formLoading ? 'pointer-events-none blur-sm' : ''
                }`}
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-base font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-base font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-base font-semibold leading-6 text-gray-900"
                    >
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
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
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
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
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="message"
                        className="block text-base font-semibold leading-6 text-gray-900"
                      >
                        Business Information
                      </label>
                    </div>

                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        onChange={handleDescriptionChange}
                        placeholder="Tell us more about your business..."
                        value={description}
                        rows={8}
                        maxLength={maxCharacters}
                        aria-describedby="message-description"
                        className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                        sm:text-sm sm:leading-6`}
                        required
                      />
                      {/* Overlay to highlight excess text */}
                      {isOverLimit && (
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            color: 'transparent', // Make sure original text is not visible
                            backgroundColor: 'red', // Set background color for excess text
                            WebkitBackgroundClip: 'text', // Only the excess text will be red
                            backgroundClip: 'text',
                          }}
                        >
                          {description.slice(maxCharacters)}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end">
                      <p id="message-description" className="text-gray-400">
                        {maxCharacters - description.length} characters left
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <Button className="select-none bg-primary" type="submit">
                    Send message
                  </Button>
                </div>
              </form>
              {formLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                  <div className="h-8 w-8 animate-spin rounded-full border-b-4 border-t-4 border-primary"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
