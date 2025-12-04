"use client"

import { useState, useRef, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"
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

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

const docTranslations = {
  en: {
    hero: {
      badge: "How BizStruct Assistant works",
      title: "From chaotic chats and emails to a clean Notion workspace",
      description: "BizStruct Assistant captures everything from Telegram and Gmail,",
      descriptionLine2: "sorts it with AI, and keeps Notion as your single source of truth.",
    },
    telegram: {
      title: "Capture from Telegram",
      subtitle: "Simple commands for powerful organization",
      description: "Use simple commands in Telegram to capture tasks, projects, clients, and finances directly into your Notion workspace.",
      commands: [
        {
          command: "/task",
          description: "Create a task in Notion. Example: /task Review Q4 report by Friday",
          example: "/task Review Q4 report by Friday",
        },
        {
          command: "/project",
          description: "Create a new project. Example: /project Website redesign",
          example: "/project Website redesign",
        },
        {
          command: "/client",
          description: "Add a new client. Example: /client Acme Corp - Software development",
          example: "/client Acme Corp - Software development",
        },
        {
          command: "/finance",
          description: "Record a financial transaction. Example: /finance $500 - Invoice payment from Acme",
          example: "/finance $500 - Invoice payment from Acme",
        },
        {
          command: "/all",
          description: "Let AI classify your message automatically into the right category (task, project, client, or finance).",
          example: "/all Need to follow up with the client about the proposal",
        },
      ],
    },
    gmail: {
      title: "Gmail → Notion Inbox",
      subtitle: "Automatic email organization",
      description: "Connect your Gmail account once and let BizStruct Assistant automatically save all important emails into your Notion Inbox.",
      features: [
        "Automatic sync of all emails to Notion",
        "AI-powered classification of important emails",
        "No need to manually forward or copy emails",
        "All emails organized in one place",
      ],
    },
    summary: {
      title: "Daily Summary in Telegram",
      subtitle: "Your morning business report",
      description: "Every morning, receive a smart summary in Telegram with everything you need to know about your business.",
      includes: [
        "Today's tasks and priorities",
        "Overdue items that need attention",
        "New projects and updates",
        "Key business metrics and stats",
      ],
    },
    gettingStarted: {
      title: "Getting Started",
      subtitle: "Set up in minutes",
      steps: [
        {
          step: "1",
          title: "Start the bot",
          description: "Open @Bizstruct_bot in Telegram and send /start to begin.",
        },
        {
          step: "2",
          title: "Connect Notion",
          description: "Authorize BizStruct Assistant to access your Notion workspace.",
        },
        {
          step: "3",
          title: "Connect Gmail (optional)",
          description: "If you want email sync, authorize Gmail access in the bot settings.",
        },
        {
          step: "4",
          title: "Start capturing",
          description: "Use commands like /task, /project, /client, or /finance to start organizing your work.",
        },
      ],
    },
    cta: {
      title: "Ready to organize your business?",
      description: "Start using BizStruct Assistant today and turn chaos into clarity.",
      button: "Start for free",
    },
  },
  ru: {
    hero: {
      badge: "Как работает BizStruct Assistant",
      title: "От хаотичных чатов и писем к чистому рабочему пространству Notion",
      description: "BizStruct Assistant захватывает всё из Telegram и Gmail,",
      descriptionLine2: "сортирует это с помощью ИИ и держит Notion как единственный источник правды.",
    },
    telegram: {
      title: "Захват из Telegram",
      subtitle: "Простые команды для мощной организации",
      description: "Используйте простые команды в Telegram для захвата задач, проектов, клиентов и финансов прямо в ваше рабочее пространство Notion.",
      commands: [
        {
          command: "/task",
          description: "Создать задачу в Notion. Пример: /task Проверить отчет Q4 до пятницы",
          example: "/task Проверить отчет Q4 до пятницы",
        },
        {
          command: "/project",
          description: "Создать новый проект. Пример: /project Редизайн сайта",
          example: "/project Редизайн сайта",
        },
        {
          command: "/client",
          description: "Добавить нового клиента. Пример: /client Acme Corp - Разработка ПО",
          example: "/client Acme Corp - Разработка ПО",
        },
        {
          command: "/finance",
          description: "Записать финансовую транзакцию. Пример: /finance $500 - Оплата счета от Acme",
          example: "/finance $500 - Оплата счета от Acme",
        },
        {
          command: "/all",
          description: "Позвольте ИИ автоматически классифицировать ваше сообщение в правильную категорию (задача, проект, клиент или финансы).",
          example: "/all Нужно связаться с клиентом по поводу предложения",
        },
      ],
    },
    gmail: {
      title: "Gmail → Notion Inbox",
      subtitle: "Автоматическая организация писем",
      description: "Подключите свой аккаунт Gmail один раз, и BizStruct Assistant автоматически сохранит все важные письма в ваш Notion Inbox.",
      features: [
        "Автоматическая синхронизация всех писем в Notion",
        "Классификация важных писем с помощью ИИ",
        "Не нужно вручную пересылать или копировать письма",
        "Все письма организованы в одном месте",
      ],
    },
    summary: {
      title: "Ежедневная сводка в Telegram",
      subtitle: "Ваш утренний бизнес-отчет",
      description: "Каждое утро получайте умную сводку в Telegram со всем, что вам нужно знать о вашем бизнесе.",
      includes: [
        "Задачи и приоритеты на сегодня",
        "Просроченные элементы, требующие внимания",
        "Новые проекты и обновления",
        "Ключевые бизнес-метрики и статистика",
      ],
    },
    gettingStarted: {
      title: "Начало работы",
      subtitle: "Настройка за минуты",
      steps: [
        {
          step: "1",
          title: "Запустите бота",
          description: "Откройте @Bizstruct_bot в Telegram и отправьте /start для начала.",
        },
        {
          step: "2",
          title: "Подключите Notion",
          description: "Авторизуйте BizStruct Assistant для доступа к вашему рабочему пространству Notion.",
        },
        {
          step: "3",
          title: "Подключите Gmail (опционально)",
          description: "Если вы хотите синхронизацию писем, авторизуйте доступ к Gmail в настройках бота.",
        },
        {
          step: "4",
          title: "Начните захватывать",
          description: "Используйте команды типа /task, /project, /client или /finance, чтобы начать организовывать свою работу.",
        },
      ],
    },
    cta: {
      title: "Готовы организовать свой бизнес?",
      description: "Начните использовать BizStruct Assistant сегодня и превратите хаос в ясность.",
      button: "Начать бесплатно",
    },
  },
}

export default function DocumentationPage() {
  const [language, setLanguage] = useState<Language>("en")
  const heroRef = useRef<HTMLDivElement>(null)
  const telegramRef = useRef<HTMLDivElement>(null)
  const gmailRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  const gettingStartedRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const heroVisible = useIntersectionObserver(heroRef)
  const telegramVisible = useIntersectionObserver(telegramRef)
  const gmailVisible = useIntersectionObserver(gmailRef)
  const summaryVisible = useIntersectionObserver(summaryRef)
  const gettingStartedVisible = useIntersectionObserver(gettingStartedRef)
  const ctaVisible = useIntersectionObserver(ctaRef)

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

  const t = docTranslations[language]

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <Header />
      <div className="pt-16">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:max-w-[1400px] xl:max-w-[1600px] mx-auto flex flex-col justify-start items-start">
          {/* Hero Section */}
          <div
            ref={heroRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 flex justify-start items-start ${
              heroVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <Badge
                icon={
                  <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
                }
                text={t.hero.badge}
              />
              <h1 className="text-left text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-left text-[#605A57] text-base font-normal leading-7 font-sans">
                {t.hero.description}
                <br />
                {t.hero.descriptionLine2}
              </p>
            </div>
          </div>

          {/* Telegram Commands Section */}
          <div
            ref={telegramRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              telegramVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[1000px] flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.telegram.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">{t.telegram.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.telegram.commands.map((cmd, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-[#E0DEDB] rounded-lg flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 bg-[#F7F5F3] rounded text-[#37322F] text-sm font-mono font-semibold">
                        {cmd.command}
                      </div>
                    </div>
                    <p className="text-[#605A57] text-sm font-normal leading-5 font-sans">{cmd.description}</p>
                    {cmd.example && (
                      <div className="mt-2 p-3 bg-[#F7F5F3] rounded text-[#37322F] text-xs font-mono">
                        {cmd.example}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gmail Section */}
          <div
            ref={gmailRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] bg-white flex justify-start items-start ${
              gmailVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.gmail.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">{t.gmail.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.gmail.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#37322F]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-[#605A57] text-sm font-normal leading-5 font-sans">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Daily Summary Section */}
          <div
            ref={summaryRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              summaryVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.summary.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">{t.summary.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.summary.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#37322F]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-[#605A57] text-sm font-normal leading-5 font-sans">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div
            ref={gettingStartedRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] bg-white flex justify-start items-start ${
              gettingStartedVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.gettingStarted.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">
                  {t.gettingStarted.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {t.gettingStarted.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#37322F] text-white flex items-center justify-center text-sm font-semibold">
                      {step.step}
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <h3 className="text-[#49423D] text-lg font-semibold leading-tight font-sans">{step.title}</h3>
                      <p className="text-[#605A57] text-sm font-normal leading-5 font-sans">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            ref={ctaRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              ctaVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <h2 className="text-left text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                {t.cta.title}
              </h2>
              <p className="text-left text-[#605A57] text-base font-normal leading-6 font-sans max-w-[800px]">
                {t.cta.description}
              </p>
              <a
                href="https://t.me/Bizstruct_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-[10px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors"
              >
                <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                <div className="flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                  {t.cta.button}
                </div>
              </a>
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

