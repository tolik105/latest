'use client'

import { useState } from 'react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      // Here you would typically send the email to your newsletter service
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('Thank you for subscribing! You\'ll receive our latest insights soon.')
      setEmail('')
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 mb-3 md:mb-4 tracking-tight">
        Stay Updated with IT Insights
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-normal">
        Get the latest technology insights, cybersecurity updates, and IT best practices delivered to your inbox.
        Join thousands of IT professionals who trust AKRIN for expert guidance.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto" aria-label="Newsletter subscription">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address for newsletter subscription
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="newsletter-form flex-1 px-3 md:px-4 py-3 md:py-4 border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent text-base rounded-lg"
          required
          disabled={isSubmitting}
          aria-describedby="newsletter-description"
        />
        <p id="newsletter-description" className="sr-only">
          Subscribe to receive IT insights and technology updates from AKRIN experts
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-medium transition-colors whitespace-nowrap text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2"
          aria-label="Subscribe to AKRIN newsletter"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {message && (
        <p className={`mt-4 text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
