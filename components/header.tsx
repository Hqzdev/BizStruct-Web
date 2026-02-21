"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { getStoredLanguage, setStoredLanguage, type Language } from "@/lib/language"

const navTranslations = {
  en: {
    products: "Products",
    pricing: "Pricing",
    docs: "Docs",
    logIn: "Log in",
    pay: "Pay",
    price: "1 399 ₽",
    paymentTitle: "Payment",
    paymentPrice: "1 399 ₽",
    paymentOnce: "One-time payment, lifetime access",
    paymentTrial: "3-day free trial",
    paymentMethod: "ЮKassa",
    payOnSite: "Pay on site",
    paymentNote: "Payment in the Telegram bot is not available yet.",
  },
  ru: {
    products: "Продукты",
    pricing: "Цены",
    docs: "Документы",
    logIn: "Войти",
    pay: "Оплатить",
    price: "1 399 ₽",
    paymentTitle: "Оплата",
    paymentPrice: "1 399 ₽",
    paymentOnce: "Единоразовый платёж, доступ навсегда",
    paymentTrial: "Пробный период 3 дня",
    paymentMethod: "ЮKassa",
    payOnSite: "Оплатить на сайте",
    paymentNote: "В Telegram-боте оплата пока недоступна.",
  },
}

const BOT_URL = "https://t.me/Bizstruct_bot"

export function Header() {
  const [language, setLanguage] = useState<Language>("en")
  const [paymentOpen, setPaymentOpen] = useState(false)

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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Payment block in header: opens payment dialog */}
            <button
              type="button"
              onClick={() => setPaymentOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#37322f] text-[#FBFAF9] text-sm font-medium hover:bg-[#2A2520] transition-colors shadow-[0px_1px_2px_rgba(55,50,47,0.12)] cursor-pointer"
            >
              <span className="font-semibold">{t.price}</span>
              <span className="opacity-90 text-xs">{t.pay}</span>
            </button>
            <Dialog open={paymentOpen} onOpenChange={setPaymentOpen}>
              <DialogContent className="bg-[#F7F5F3] border-[#E0DEDB] text-[#49423D] sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-[#37322f]">{t.paymentTitle}</DialogTitle>
                  <DialogDescription className="text-[#605A57] text-left">
                    <span className="text-2xl font-semibold text-[#37322f]">{t.paymentPrice}</span>
                    <span className="block mt-2 text-sm font-normal">{t.paymentOnce}</span>
                    <span className="block mt-1 text-sm">{t.paymentTrial}</span>
                    <span className="block mt-1 text-sm">{t.paymentMethod}</span>
                    <span className="block mt-3 text-xs text-[#847971]">{t.paymentNote}</span>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start pt-4">
                  <Link
                    href="/pricing"
                    className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-[#37322f] text-[#FBFAF9] text-sm font-medium hover:bg-[#2A2520] transition-colors"
                    onClick={() => setPaymentOpen(false)}
                  >
                    {t.payOnSite}
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <button
              onClick={handleLanguageToggle}
              className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center hover:bg-[#F7F5F3] transition-smooth hover:scale-105 cursor-pointer"
              aria-label="Toggle language"
            >
              <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
                {language === "en" ? "RU" : "EN"}
              </div>
            </button>
            <a href={BOT_URL} target="_blank" rel="noopener noreferrer">
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
