"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Target, Zap } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function AboutClient() {
  const { t } = useTranslation('common')
  
  const values = [
    {
      icon: Clock,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description'),
    },
    {
      icon: Users,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description'),
    },
    {
      icon: Target,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
    {
      icon: Zap,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
  ]
  return (
    <main className="flex min-h-screen flex-col">
      <section className="pt-32 pb-12 md:pt-40 bg-purple-600">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-primary-foreground">
              {t('about.title')}
            </h1>
            <p className="mb-8 text-lg text-primary-foreground">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="mb-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground text-center">{t('about.ourMission')}</h2>
              <p className="text-primary-foreground mb-6 text-center">
                {t('about.missionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('about.ourValues')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}