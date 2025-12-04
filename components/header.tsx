"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getStoredLanguage, setStoredLanguage, type Language } from "@/lib/language"

const navTranslations = {
  en: {
    products: "Products",
    pricing: "Pricing",
    docs: "Docs",
    logIn: "Log in",
  },
  ru: {
    products: "Продукты",
    pricing: "Цены",
    docs: "Документы",
    logIn: "Войти",
  },
}

export function Header() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    setLanguage(getStoredLanguage())
  }, [])

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "ru" : "en"
    setLanguage(newLanguage)
    setStoredLanguage(newLanguage)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }))
  }

  const t = navTranslations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#37322f]/6 bg-[#f7f5f3]">
      <div className="max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:max-w-[1400px] xl:max-w-[1600px]">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-[#37322f] font-semibold text-lg hover:opacity-80">
              BizStruct
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/features"
                className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
              >
                {t.products}
              </Link>
              <Link
                href="/pricing"
                className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
              >
                {t.pricing}
              </Link>
              <Link
                href="/documentation"
                className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
              >
                {t.docs}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleLanguageToggle}
              className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center hover:bg-[#F7F5F3] transition-smooth hover:scale-105 cursor-pointer"
              aria-label="Toggle language"
            >
              <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
                {language === "en" ? "RU" : "EN"}
              </div>
            </button>
            <a
              href="https://t.me/Bizstruct_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" className="text-[#37322f] hover:bg-[#37322f]/5">
                {t.logIn}
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
