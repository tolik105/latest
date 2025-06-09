"use client"

import React, { useCallback, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

interface RecaptchaV2Props {
  onVerify: (token: string | null) => void
  onExpired?: () => void
  onError?: () => void
}

export function RecaptchaV2({ onVerify, onExpired, onError }: RecaptchaV2Props) {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!siteKey) {
    console.error('reCAPTCHA site key is not configured')
    return <div className="text-red-500 text-sm">reCAPTCHA not configured. Please check your environment variables.</div>
  }

  const handleChange = useCallback((token: string | null) => {
    console.log('reCAPTCHA token received:', token ? 'Token received' : 'Token cleared')
    onVerify(token)
  }, [onVerify])

  const handleExpired = useCallback(() => {
    console.log('reCAPTCHA expired')
    onVerify(null)
    if (onExpired) onExpired()
  }, [onExpired, onVerify])

  const handleError = useCallback(() => {
    console.error('reCAPTCHA error')
    onVerify(null)
    if (onError) onError()
  }, [onError, onVerify])

  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={handleChange}
        onExpired={handleExpired}
        onErrored={handleError}
        theme="light"
        size="normal"
      />
    </div>
  )
}