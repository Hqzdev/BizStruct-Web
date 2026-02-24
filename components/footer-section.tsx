"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import type React from "react"

// Hook for scroll animations
function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isVisible
}

const footerTranslations = {
  en: {
    tagline: "Your Telegram & Notion Control Center",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    contacts: "Contacts & legal",
    contactEmail: "Email",
    contactTelegram: "Telegram bot",
    contactAddress: "Address",
    contactResponse: "Response within 24 hours on business days",
    requisites: "Requisites",
    offer: "Terms & refund",
    privacy: "Privacy policy",
  },
  ru: {
    tagline: "Ваш Центр управления Telegram & Notion",
    product: "Продукт",
    features: "Функции",
    pricing: "Цены",
    contacts: "Контакты и реквизиты",
    contactEmail: "Email",
    contactTelegram: "Telegram-бот",
    contactAddress: "Юридический адрес",
    contactResponse: "Ответ в течение 24 часов в рабочие дни",
    requisites: "Реквизиты",
    offer: "Оферта и возврат",
    privacy: "Политика конфиденциальности",
  },
}

interface FooterSectionProps {
  language?: "en" | "ru"
}

export default function FooterSection({ language = "en" }: FooterSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const t = footerTranslations[language]

  return (
    <div
      ref={sectionRef}
      className={`w-full pt-10 flex flex-col justify-start items-start ${
        isVisible ? "animate-on-scroll animate-fade-in" : "animate-on-scroll"
      }`}
    >
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <div className="self-stretch flex justify-start items-center gap-3">
            <div className="text-center text-[#49423D] text-xl font-semibold leading-4 font-sans">BizStruct</div>
          </div>
          <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px] font-sans">
            {t.tagline}
          </div>

          
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[140px]">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-sans">
              {t.product}
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <Link href="/features" className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                {t.features}
              </Link>
              <Link href="/pricing" className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                {t.pricing}
              </Link>
            </div>
          </div>

          {/* Contacts & legal Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[140px]">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-sans">
              {t.contacts}
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <Link href="/contacts" className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                {t.contactEmail}, {t.contactTelegram}
              </Link>
              <Link href="/contacts#requisites" className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                {t.requisites}
              </Link>
              <Link href="/offer" className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                {t.offer}
              </Link>
              <Link href="/privacy" className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                {t.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Pattern */}
      <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[300px] h-16 border border-[rgba(3,7,18,0.08)]"
                style={{
                  left: `${i * 300 - 600}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
