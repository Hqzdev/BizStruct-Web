"use client"

import { useRef, useState, useEffect } from "react"
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

const pricingTranslations = {
  en: {
    badge: "Plans & Pricing",
    title: "Simple one-time pricing for your assistant",
    description: "Try BizStruct Assistant free for 3 days.",
    descriptionLine2: "Then unlock lifetime access with a single one-time payment.",
    planTitle: "Lifetime Access",
    planDescription:
      "3-day free trial, then a single one-time payment for lifetime access to BizStruct Assistant — no subscriptions, no recurring fees.",
    price: "$30",
    priceLabel: "one-time payment",
    priceNote: "Includes all current features and future updates for this version of BizStruct Assistant.",
    cta: "Start 3-day free trial",
    ctaNote: "After the trial ends, you'll be charged a one-time payment of",
    ctaNoteAmount: "$30",
    ctaNoteEnd: ". No subscriptions, cancel anytime during the trial.",
    features: [
      "Telegram bot for your main account",
      "Gmail → Notion Inbox capture",
      "Tasks, projects, clients, and finances in Notion",
      "Daily Summary in Telegram every morning",
      "AI classification of all incoming messages and emails",
    ],
  },
  ru: {
    badge: "Планы и цены",
    title: "Простая единоразовая цена для вашего ассистента",
    description: "Попробуйте BizStruct Assistant бесплатно 3 дня.",
    descriptionLine2: "Затем получите пожизненный доступ за один единоразовый платёж.",
    planTitle: "Пожизненный доступ",
    planDescription:
      "3 дня бесплатного пробного периода, затем один единоразовый платёж за пожизненный доступ к BizStruct Assistant — без подписок, без повторяющихся платежей.",
    price: "$30",
    priceLabel: "единоразовый платёж",
    priceNote: "Включает все текущие функции и будущие обновления для этой версии BizStruct Assistant.",
    cta: "Начать 3-дневный пробный период",
    ctaNote: "После окончания пробного периода с вас будет списан единоразовый платёж в размере",
    ctaNoteAmount: "$30",
    ctaNoteEnd: ". Без подписок, отмените в любое время во время пробного периода.",
    features: [
      "Telegram бот для вашего основного аккаунта",
      "Захват Gmail → Notion Inbox",
      "Задачи, проекты, клиенты и финансы в Notion",
      "Ежедневная сводка в Telegram каждое утро",
      "ИИ-классификация всех входящих сообщений и писем",
    ],
  },
}

interface PricingSectionProps {
  language?: "en" | "ru"
}

export default function PricingSection({ language = "en" }: PricingSectionProps) {
  const t = pricingTranslations[language]
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)

  return (
    <div
      ref={sectionRef}
      className={`w-full flex flex-col justify-center items-center gap-2 ${
        isVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
      }`}
    >
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          {/* Pricing Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#37322F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              {t.badge}
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            {t.title}
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            {t.description}
            <br />
            {t.descriptionLine2}
          </div>
        </div>
      </div>

      {/* Single Pricing Card Section */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          {/* Left Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          {/* Single Plan Card */}
          <div className="flex-1 flex justify-center items-center py-12">
            <div className="w-full max-w-[640px] px-6 py-8 bg-white border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-8 rounded-lg">
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">{t.planTitle}</div>
                <div className="w-full max-w-[360px] text-[rgba(41,37,35,0.80)] text-sm font-normal leading-5 font-sans">
                  {t.planDescription}
                </div>
              </div>

              {/* Price */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                  <div className="flex items-baseline gap-2">
                    <div className="text-[#37322F] text-5xl font-medium leading-[60px] font-serif">{t.price}</div>
                    <div className="text-[#847971] text-sm font-medium font-sans">{t.priceLabel}</div>
                  </div>
                  <div className="text-[#605A57] text-sm font-normal font-sans">
                    {t.priceNote}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="self-stretch flex flex-col sm:flex-row justify-start sm:items-center items-stretch gap-3">
                <a
                  href="https://t.me/Bizstruct_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:w-auto w-full px-4 py-[10px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors"
                >
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                    {t.cta}
                  </div>
                </a>
                <div className="text-[#847971] text-xs sm:text-sm font-normal leading-5 font-sans">
                  {t.ctaNote} <span className="font-semibold">{t.ctaNoteAmount}</span> {t.ctaNoteEnd}
                </div>
              </div>

              {/* Features */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2 pt-2 border-t border-[rgba(55,50,47,0.12)] mt-2">
                {t.features.map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
