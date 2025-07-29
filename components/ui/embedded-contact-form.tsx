"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/16/solid"

export function EmbeddedContactForm() {
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
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mt-4 sm:mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="space-y-3 sm:space-y-4 md:space-y-5"
      >
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-xs font-medium text-gray-900 dark:text-white mb-1">
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="block w-full rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-xs font-medium text-gray-900 dark:text-white mb-1">
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="block w-full rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-xs font-medium text-gray-900 dark:text-white mb-1">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="block w-full rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-900 dark:text-white mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="block w-full rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone-number" className="block text-xs font-medium text-gray-900 dark:text-white mb-1">
            Phone number
          </label>
          <div className="flex rounded-md bg-white dark:bg-gray-700 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-purple-600">
            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              <select
                id="country"
                name="country"
                autoComplete="country"
                aria-label="Country"
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="col-start-1 row-start-1 w-full appearance-none rounded-l-md py-1.5 sm:py-2 pr-5 sm:pr-6 pl-2.5 sm:pl-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 bg-transparent"
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
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 dark:text-gray-400"
              />
            </div>
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              autoComplete="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="block min-w-0 grow py-1.5 sm:py-2 pr-2.5 sm:pr-3 text-xs sm:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline focus:outline-0 bg-transparent"
              placeholder="123-456-7890"
            />
          </div>
        </div>

        {/* Type of Service */}
        <div>
          <label htmlFor="service-type" className="block text-xs font-medium text-gray-900 dark:text-white mb-1">
            Type of Service
          </label>
          <select
            id="service-type"
            name="service-type"
            value={formData.serviceType}
            onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
            className="block w-full rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
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

        {/* How did you hear about us */}
        <div>
          <label htmlFor="hear-about-us" className="block text-xs font-medium text-gray-900 dark:text-white mb-1">
            How did you hear about us?
          </label>
          <select
            id="hear-about-us"
            name="hear-about-us"
            value={formData.hearAboutUs}
            onChange={(e) => setFormData({...formData, hearAboutUs: e.target.value})}
            className="block w-full rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
          >
            <option value="">Select an option...</option>
            <option value="Web Search">Web Search</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="From a Partner">From a Partner</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-gray-900 dark:text-white mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            required
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="block w-full rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 resize-none"
            placeholder="Tell us about your IT needs..."
          />
        </div>

        {/* Privacy Policy Agreement */}
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="agree-privacy"
              name="agree-privacy"
              type="checkbox"
              checked={formData.agreeToPrivacy}
              onChange={(e) => setFormData({...formData, agreeToPrivacy: e.target.checked})}
              className="h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
            />
          </div>
          <div className="ml-2 text-xs">
            <label htmlFor="agree-privacy" className="text-gray-600 dark:text-gray-400">
              I agree to the{' '}
              <a href="/privacy-policy" className="text-purple-600 hover:text-purple-500">
                privacy policy
              </a>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center px-4 py-2 sm:px-6 sm:py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 text-xs sm:text-sm"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500'
            }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </motion.form>
    </div>
  )
}
