"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/16/solid"

export default function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "JP",
    serviceType: "",
    hearAboutUs: "",
    message: "",
    agreeToPrivacy: false
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.agreeToPrivacy) {
      toast({
        title: "Privacy Policy Agreement Required",
        description: "Please agree to our privacy policy to continue.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Company: ${formData.company}\nPhone: ${formData.phone} (${formData.country})\nService Type: ${formData.serviceType}\nHow did you hear about us: ${formData.hearAboutUs}\n\nMessage:\n${formData.message}`,
          recaptchaToken: ''
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 2 hours during business hours.",
        })
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          country: "JP",
          serviceType: "",
          hearAboutUs: "",
          message: "",
          agreeToPrivacy: false
        })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle vertical lines pattern on the right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="verticalLines" x="0" y="0" width="20" height="400" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="400" stroke="#6B7280" strokeWidth="0.5" opacity="0.3"/>
                <line x1="5" y1="0" x2="5" y2="400" stroke="#6B7280" strokeWidth="0.3" opacity="0.2"/>
                <line x1="10" y1="0" x2="10" y2="400" stroke="#6B7280" strokeWidth="0.5" opacity="0.3"/>
                <line x1="15" y1="0" x2="15" y2="400" stroke="#6B7280" strokeWidth="0.3" opacity="0.2"/>
                <line x1="20" y1="0" x2="20" y2="400" stroke="#6B7280" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#verticalLines)"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-light tracking-tight text-gray-900 sm:text-6xl"
            >
              Contact AKRIN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Get answers to your questions about our IT solutions and services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-purple-600">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        aria-label="Country"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
                      >
                        <option value="JP">JP</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="AU">AU</option>
                        <option value="CA">CA</option>
                        <option value="DE">DE</option>
                        <option value="FR">FR</option>
                        <option value="SG">SG</option>
                        <option value="KR">KR</option>
                        <option value="CN">CN</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="text"
                      placeholder="123-456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              {/* Type of Service */}
              <div className="sm:col-span-2">
                <label htmlFor="service-type" className="block text-sm/6 font-semibold text-gray-900">
                  Type of Service
                </label>
                <div className="mt-2.5">
                  <select
                    id="service-type"
                    name="service-type"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  >
                    <option value="">Select a service...</option>
                    <option value="Managed IT Support">Managed IT Support</option>
                    <option value="Cloud Solutions & Migration">Cloud Solutions & Migration</option>
                    <option value="Cybersecurity & Compliance">Cybersecurity & Compliance</option>
                    <option value="Network & Infrastructure">Network & Infrastructure</option>
                    <option value="AI-Powered Automation">AI-Powered Automation</option>
                    <option value="IT Consulting & Strategy">IT Consulting & Strategy</option>
                    <option value="Project Management">Project Management</option>
                  </select>
                </div>
              </div>

              {/* How did you hear about us */}
              <div className="sm:col-span-2">
                <label htmlFor="hear-about-us" className="block text-sm/6 font-semibold text-gray-900">
                  How did you hear about us?
                </label>
                <div className="mt-2.5">
                  <select
                    id="hear-about-us"
                    name="hear-about-us"
                    value={formData.hearAboutUs}
                    onChange={(e) => setFormData({...formData, hearAboutUs: e.target.value})}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  >
                    <option value="">Select an option...</option>
                    <option value="Web Search">Web Search</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="From a Partner">From a Partner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                    placeholder="Tell us about your IT needs and how we can help..."
                  />
                </div>
              </div>

              {/* Privacy Policy Agreement */}
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <div
                    className={`group relative inline-flex w-8 shrink-0 rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 cursor-pointer ${
                      formData.agreeToPrivacy ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                    onClick={() => setFormData({...formData, agreeToPrivacy: !formData.agreeToPrivacy})}
                  >
                    <span
                      className={`size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out ${
                        formData.agreeToPrivacy ? 'translate-x-3.5' : 'translate-x-0'
                      }`}
                    />
                    <input
                      id="agree-to-policies"
                      name="agree-to-policies"
                      type="checkbox"
                      aria-label="Agree to policies"
                      checked={formData.agreeToPrivacy}
                      onChange={(e) => setFormData({...formData, agreeToPrivacy: e.target.checked})}
                      className="sr-only"
                    />
                  </div>
                </div>
                <label
                  htmlFor="agree-to-policies"
                  className="text-sm/6 text-gray-600 cursor-pointer"
                  onClick={() => setFormData({...formData, agreeToPrivacy: !formData.agreeToPrivacy})}
                >
                  By selecting this, you agree to our{' '}
                  <a
                    href="/privacy"
                    className="font-semibold whitespace-nowrap text-purple-600 hover:text-purple-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send message"
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  )
}
