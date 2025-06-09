"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"
import { RecaptchaV2 } from "@/components/recaptcha-v2"
import { useToast } from "@/hooks/use-toast"

export default function ContactClient() {
  const { t } = useTranslation('common')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!recaptchaToken) {
      toast({
        title: "Error",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }
    
    setIsSubmitting(true)
    
    // Store form reference before async operations
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      recaptchaToken: recaptchaToken || null,
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      
      let result
      try {
        result = await response.json()
        console.log('Response data:', result)
      } catch (jsonError) {
        console.error('Failed to parse response:', jsonError)
        result = { message: 'Message sent successfully!' }
      }
      
      if (response.ok) {
        console.log('Showing success toast')
        toast({
          title: "Success!",
          description: result.message || "Your message has been sent successfully!",
        })
        // Reset form
        form.reset()
        setRecaptchaToken(null)
      } else {
        console.log('Showing error toast')
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="pt-24 pb-12 md:pt-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t('contact.title')}</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.sendMessage')}</CardTitle>
                <CardDescription>
                  {t('contact.formDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea id="message" name="message" placeholder="How can we help?" required />
                  </div>
                  <RecaptchaV2 onVerify={setRecaptchaToken} />
                  <Button type="submit" className="w-full" disabled={isSubmitting || !recaptchaToken}>
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.sendButton')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('contact.info.title')}</CardTitle>
                <CardDescription>{t('contact.info.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t('contact.info.address')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.info.addressText')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t('contact.info.phone')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.info.phoneText')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t('contact.info.email')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.info.emailText')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t('contact.info.businessHours')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.info.weekdays')}
                      <br />
                      {t('contact.info.weekends')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}