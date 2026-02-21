"use client"

import { useState, useRef, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import FooterSection from "@/components/footer-section"
import { getStoredLanguage, setStoredLanguage, type Language } from "@/lib/language"

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
    nav: {
      products: "Products",
      pricing: "Pricing",
      docs: "Docs",
      logIn: "Log in",
    },
    hero: {
      title: "Simple, transparent pricing",
      subtitle: "One payment. Lifetime access. No subscriptions.",
      description: "Start with a 3-day free trial. If you love it, unlock lifetime access with a single 1399₽ payment.",
    },
    plan: {
      title: "Lifetime Access",
      badge: "Best Value",
      price: "1399₽",
      priceLabel: "one-time payment",
      description: "Get lifetime access to BizStruct Assistant with all current features and future updates for this version.",
      trial: "3-day free trial",
      trialDescription: "Try everything risk-free. Cancel anytime during the trial period.",
      cta: "Start 3-day free trial",
      ctaNote: "After the trial ends, you'll be charged a one-time payment of 1399₽. No subscriptions, cancel anytime during the trial.",
    },
    features: {
      title: "Everything included",
      items: [
        "Telegram bot for your main account",
        "Gmail → Notion Inbox automatic sync",
        "AI-powered classification of messages and emails",
        "Tasks, projects, clients, and finances in Notion",
        "Daily Summary in Telegram every morning",
        "Automatic record creation in Notion databases",
        "Smart priority detection and tagging",
        "All future updates for this version",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "What happens after the 3-day trial?",
          answer: "After your 3-day free trial ends, you'll be charged a one-time payment of 1399₽ for lifetime access. You can cancel anytime during the trial period if you decide it's not for you.",
        },
        {
          question: "What does 'lifetime access' mean?",
          answer: "Lifetime access means you get all current features and all future updates for this version of BizStruct Assistant. No recurring payments, no subscriptions—just one payment and you're set.",
        },
        {
          question: "Can I cancel during the trial?",
          answer: "Yes! You can cancel at any time during the 3-day trial period. You won't be charged anything if you cancel before the trial ends.",
        },
        {
          question: "What if I need help setting up?",
          answer: "We provide setup guides and support to help you connect Telegram, Gmail, and Notion. Just reach out through the bot or our support channels.",
        },
        {
          question: "Do I need a Notion account?",
          answer: "Yes, you'll need a Notion account and workspace to use BizStruct Assistant. The bot will help you set up the required databases during onboarding.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards and payment methods through our secure payment processor. All payments are processed securely.",
        },
      ],
    },
  },
  ru: {
    nav: {
      products: "Продукты",
      pricing: "Цены",
      docs: "Документы",
      logIn: "Войти",
    },
    hero: {
      title: "Простое, прозрачное ценообразование",
      subtitle: "Один платёж. Пожизненный доступ. Без подписок.",
      description: "Начните с 3-дневного бесплатного пробного периода. Если вам понравится, получите пожизненный доступ за один платёж в размере 1399₽.",
    },
    plan: {
      title: "Пожизненный доступ",
      badge: "Лучшее предложение",
      price: "1399₽",
      priceLabel: "единоразовый платёж",
      description: "Получите пожизненный доступ к BizStruct Assistant со всеми текущими функциями и будущими обновлениями для этой версии.",
      trial: "3-дневный бесплатный пробный период",
      trialDescription: "Попробуйте всё без риска. Отмените в любое время в течение пробного периода.",
      cta: "Начать 3-дневный пробный период",
      ctaNote: "После окончания пробного периода с вас будет списан единоразовый платёж в размере 1399₽. Без подписок, отмените в любое время в течение пробного периода.",
    },
    features: {
      title: "Всё включено",
      items: [
        "Telegram бот для вашего основного аккаунта",
        "Автоматическая синхронизация Gmail → Notion Inbox",
        "ИИ-классификация сообщений и писем",
        "Задачи, проекты, клиенты и финансы в Notion",
        "Ежедневная сводка в Telegram каждое утро",
        "Автоматическое создание записей в базах данных Notion",
        "Умное определение приоритетов и тегирование",
        "Все будущие обновления для этой версии",
      ],
    },
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          question: "Что происходит после 3-дневного пробного периода?",
          answer: "После окончания вашего 3-дневного бесплатного пробного периода с вас будет списан единоразовый платёж в размере 1399₽ за пожизненный доступ. Вы можете отменить в любое время в течение пробного периода, если решите, что это не для вас.",
        },
        {
          question: "Что означает 'пожизненный доступ'?",
          answer: "Пожизненный доступ означает, что вы получаете все текущие функции и все будущие обновления для этой версии BizStruct Assistant. Без повторяющихся платежей, без подписок—просто один платёж, и всё готово.",
        },
        {
          question: "Могу ли я отменить в течение пробного периода?",
          answer: "Да! Вы можете отменить в любое время в течение 3-дневного пробного периода. С вас ничего не будет списано, если вы отмените до окончания пробного периода.",
        },
        {
          question: "Что если мне нужна помощь с настройкой?",
          answer: "Мы предоставляем руководства по настройке и поддержку, чтобы помочь вам подключить Telegram, Gmail и Notion. Просто свяжитесь с нами через бота или наши каналы поддержки.",
        },
        {
          question: "Нужен ли мне аккаунт Notion?",
          answer: "Да, вам понадобится аккаунт и рабочее пространство Notion для использования BizStruct Assistant. Бот поможет вам настроить необходимые базы данных во время онбординга.",
        },
        {
          question: "Какие способы оплаты вы принимаете?",
          answer: "Мы принимаем все основные кредитные карты и способы оплаты через наш безопасный платёжный процессор. Все платежи обрабатываются безопасно.",
        },
      ],
    },
  },
}

export default function PricingPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = pricingTranslations[language]

  const heroRef = useRef<HTMLDivElement>(null)
  const planRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const heroVisible = useIntersectionObserver(heroRef)
  const planVisible = useIntersectionObserver(planRef)
  const featuresVisible = useIntersectionObserver(featuresRef)
  const faqVisible = useIntersectionObserver(faqRef)

  useEffect(() => {
    setLanguage(getStoredLanguage())

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail)
    }

    window.addEventListener("languageChange" as any, handleLanguageChange)
    return () => {
      window.removeEventListener("languageChange" as any, handleLanguageChange)
    }
  }, [])

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-start">
      <div className="relative flex flex-col justify-start items-start w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:max-w-[1400px] xl:max-w-[1600px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Navigation */}
          <div className="w-full h-16 sm:h-20 md:h-24 lg:h-[96px] fixed inset-x-0 top-[10px] flex justify-start items-center z-40 px-6 sm:px-8 md:px-12 lg:px-12 xl:px-16">
            <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
              <div className="flex justify-center items-center">
                <Link href="/" className="flex justify-start items-center">
                  <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                    BizStruct
                  </div>
                </Link>
                <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                  <Link href="/features" className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-smooth hover:text-[#37322F] cursor-pointer">
                      {t.nav.products}
                    </div>
                  </Link>
                  <Link href="/pricing" className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-smooth hover:text-[#37322F] cursor-pointer">
                      {t.nav.pricing}
                    </div>
                  </Link>
                  <Link href="/documentation" className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-smooth hover:text-[#37322F] cursor-pointer">
                      {t.nav.docs}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    const newLanguage = language === "en" ? "ru" : "en"
                    setLanguage(newLanguage)
                    setStoredLanguage(newLanguage)
                    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }))
                  }}
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
                  className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center transition-smooth hover:scale-105 hover:shadow-md cursor-pointer"
                >
                  <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
                    {t.nav.logIn}
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div
            ref={heroRef}
            className={`self-stretch pt-32 sm:pt-40 md:pt-48 pb-12 md:pb-16 flex flex-col justify-start items-start gap-6 ${
              heroVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] px-6 flex flex-col justify-start items-start gap-4">
              <h1 className="text-left text-[#49423D] text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight font-sans tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-left text-[#605A57] text-lg md:text-xl font-normal leading-7 font-sans">
                {t.hero.subtitle}
              </p>
              <p className="text-left text-[#605A57] text-base font-normal leading-6 font-sans max-w-[800px]">
                {t.hero.description}
              </p>
            </div>
          </div>

          {/* Plan Section */}
          <div
            ref={planRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              planVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[800px] px-6 py-8 bg-white border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-8 rounded-lg">
              {/* Badge */}
              <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs w-fit">
                <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
                  {t.plan.badge}
                </div>
              </div>

              {/* Plan Title */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.plan.title}
                </div>
                <div className="text-[#605A57] text-sm font-normal leading-5 font-sans">
                  {t.plan.description}
                </div>
              </div>

              {/* Price */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex items-baseline gap-2">
                  <div className="text-[#37322F] text-5xl md:text-6xl font-medium leading-[60px] font-serif">
                    {t.plan.price}
                  </div>
                  <div className="text-[#847971] text-sm font-medium font-sans">{t.plan.priceLabel}</div>
                </div>
              </div>

              {/* Trial Info */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2 p-4 bg-[#F7F5F3] rounded-lg">
                <div className="text-[#49423D] text-sm font-semibold leading-5 font-sans">{t.plan.trial}</div>
                <div className="text-[#605A57] text-sm font-normal leading-5 font-sans">{t.plan.trialDescription}</div>
              </div>

              {/* CTA Button */}
              <div className="self-stretch flex flex-col gap-3">
                <a
                  href="https://t.me/Bizstruct_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-[10px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors"
                >
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                    {t.plan.cta}
                  </div>
                </a>
                <div className="text-[#847971] text-xs font-normal leading-5 font-sans text-left">
                  {t.plan.ctaNote}
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div
            ref={featuresRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              featuresVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                {t.features.title}
              </h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.features.items.map((feature, index) => (
                  <div key={index} className="flex justify-start items-center gap-3">
                    <div className="w-5 h-5 relative flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#37322F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[rgba(55,50,47,0.80)] text-sm font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            ref={faqRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              faqVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                {t.faq.title}
              </h2>
              <div className="w-full flex flex-col gap-4">
                {t.faq.items.map((item, index) => (
                  <div key={index} className="w-full p-4 bg-white border border-[#E0DEDB] rounded-lg flex flex-col gap-2">
                    <div className="text-[#49423D] text-sm font-semibold leading-5 font-sans">{item.question}</div>
                    <div className="text-[#605A57] text-sm font-normal leading-5 font-sans">{item.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="self-stretch mt-12">
            <FooterSection language={language} />
          </div>
        </div>
      </div>
    </div>
  )
}

