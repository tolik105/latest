"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Cookie, Shield, BarChart, Users } from "lucide-react"

export default function CookiesPage() {
  const { t } = useTranslation('common')
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false
  })

  useEffect(() => {
    // Load saved preferences
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      setPreferences({
        necessary: true,
        analytics: true,
        marketing: true,
        personalization: true
      })
    }
  }, [])

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', 'custom')
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    
    // Update consent for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied'
      })
    }
    
    // Show success message
    alert('Cookie preferences saved successfully!')
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
    
    alert('All cookies accepted!')
  }

  const declineOptional = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    }
    setPreferences(onlyNecessary)
    localStorage.setItem('cookie-consent', 'declined')
    localStorage.setItem('cookie-preferences', JSON.stringify(onlyNecessary))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
    
    alert('Optional cookies declined!')
  }

  return (
    <main className="min-h-screen py-16">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="h-6 w-6 text-primary" />
                  About Cookies
                </CardTitle>
                <CardDescription>
                  Understanding how we use cookies on our website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with the best possible experience and allow certain features to work.
                </p>
                <p>
                  We use cookies to understand how you use our website, remember your preferences, 
                  and improve our services. You can control which cookies you allow below.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Necessary Cookies
                    </div>
                    <Switch 
                      checked={preferences.necessary} 
                      disabled={true}
                      className="data-[state=checked]:bg-[hsl(var(--primary))]"
                    />
                  </CardTitle>
                  <CardDescription>Always active</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    These cookies are essential for the website to function properly. They enable basic 
                    functions like page navigation, secure areas access, and language preferences. 
                    The website cannot function properly without these cookies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Analytics Cookies
                    </div>
                    <Switch 
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => setPreferences({...preferences, analytics: checked})}
                    />
                  </CardTitle>
                  <CardDescription>Help us improve our website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website's functionality 
                    and content.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Marketing Cookies
                    </div>
                    <Switch 
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => setPreferences({...preferences, marketing: checked})}
                    />
                  </CardTitle>
                  <CardDescription>Personalized advertisements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    These cookies are used to deliver advertisements that are relevant to you and your 
                    interests. They also help limit the number of times you see an advertisement and 
                    measure the effectiveness of advertising campaigns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cookie className="h-5 w-5 text-primary" />
                      Personalization Cookies
                    </div>
                    <Switch 
                      checked={preferences.personalization}
                      onCheckedChange={(checked) => setPreferences({...preferences, personalization: checked})}
                    />
                  </CardTitle>
                  <CardDescription>Remember your preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    These cookies allow the website to remember choices you make (such as your language 
                    preference or the region you are in) and provide enhanced, more personal features.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={savePreferences}
              >
                Save My Preferences
              </Button>
              <Button 
                onClick={acceptAll}
                variant="outline"
              >
                Accept All Cookies
              </Button>
              <Button 
                onClick={declineOptional}
                variant="ghost"
              >
                Essential Only
              </Button>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>More Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">How to manage cookies in your browser</h3>
                  <p className="text-sm text-gray-600">
                    Most web browsers allow you to control cookies through their settings. You can set 
                    your browser to refuse cookies or delete certain cookies. However, if you block or 
                    delete cookies, some features of our website may not work properly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Updates to this policy</h3>
                  <p className="text-sm text-gray-600">
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. Please revisit this page 
                    periodically to stay informed about our use of cookies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact us</h3>
                  <p className="text-sm text-gray-600">
                    If you have any questions about our use of cookies, please contact us at{' '}
                    <a href="mailto:privacy@akrin.jp" className="text-purple-600 hover:underline">
                      privacy@akrin.jp
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}