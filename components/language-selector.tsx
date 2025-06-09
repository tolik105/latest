"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { languages } from "@/utils/languages"
import { useTranslation } from "react-i18next"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSelector() {
  const { i18n } = useTranslation()
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode)
    i18n.changeLanguage(langCode)
  }

  // Use the language from context which is synced with i18n
  const currentLanguage = language || i18n.language || 'en'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-auto px-2">
          <Globe className="h-[1.2rem] w-[1.2rem] mr-2" />
          {languages.find((lang) => lang.code === currentLanguage)?.name || 'English'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code} 
            onClick={() => handleLanguageChange(lang.code)}
            className={currentLanguage === lang.code ? "bg-accent" : ""}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

