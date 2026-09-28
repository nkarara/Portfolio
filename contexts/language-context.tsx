"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import fr from "@/locales/fr.json"
import en from "@/locales/en.json"

type Language = "fr" | "en"

type Translations = typeof fr

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const translations = { fr, en }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    const initial = savedLanguage && (savedLanguage === "fr" || savedLanguage === "en") ? savedLanguage : "fr"
    setLanguageState(initial)
    document.documentElement.lang = initial
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
      document.documentElement.lang = lang
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
