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

const featuresTranslations = {
  en: {
    nav: {
      products: "Products",
      pricing: "Pricing",
      docs: "Docs",
      logIn: "Log in",
    },
    hero: {
      title: "Everything you need to control your business",
      subtitle: "From Telegram and Gmail to organized Notion workspace",
      description: "BizStruct Assistant captures, classifies, and organizes all your work automatically.",
    },
    telegram: {
      title: "Capture from Telegram",
      description: "Use simple commands to capture tasks, projects, clients, and finances directly from Telegram.",
      commands: [
        {
          command: "/task",
          description: "Create a task in Notion. Example: /task Review Q4 report by Friday",
        },
        {
          command: "/project",
          description: "Create a new project. Example: /project Website redesign",
        },
        {
          command: "/client",
          description: "Add a new client. Example: /client Acme Corp - Software development",
        },
        {
          command: "/finance",
          description: "Record a financial transaction. Example: /finance $500 - Invoice payment from Acme",
        },
        {
          command: "/all",
          description: "Let AI classify your message automatically into the right category (task, project, client, or finance).",
        },
      ],
      benefits: [
        "No need to switch apps—capture everything from Telegram",
        "AI-powered classification for smart organization",
        "Automatic creation of structured records in Notion",
        "Works with your existing Telegram workflow",
      ],
    },
    gmail: {
      title: "Gmail → Notion Inbox",
      description: "Connect your Gmail account once and automatically sync all important emails to your Notion Inbox.",
      features: [
        "Automatic email capture to Notion Inbox",
        "AI classification of email content",
        "Link emails to tasks, projects, or clients",
        "Never lose important information from your inbox",
        "Search and organize emails in Notion",
      ],
      setup: "Authorize Gmail once during setup, and BizStruct Assistant will handle the rest automatically.",
    },
    summary: {
      title: "Daily Summary in Telegram",
      description: "Get a smart morning report delivered to your Telegram every day with everything you need to know.",
      includes: [
        "Today's tasks and priorities",
        "Overdue items that need attention",
        "New projects and updates",
        "Key business metrics and stats",
        "Recent client activity",
      ],
      time: "Delivered every morning at your preferred time",
    },
    notion: {
      title: "Structured Notion Workspace",
      description: "All captured information is automatically organized into clean, structured Notion databases.",
      databases: [
        {
          name: "Tasks",
          description: "All your tasks with priorities, due dates, and status tracking",
        },
        {
          name: "Projects",
          description: "Project management with timelines, milestones, and progress tracking",
        },
        {
          name: "Clients",
          description: "Client database with contact info, project history, and communication logs",
        },
        {
          name: "Finances",
          description: "Financial records with income, expenses, and transaction tracking",
        },
        {
          name: "Inbox",
          description: "Unified inbox for all emails and messages that need processing",
        },
      ],
      benefits: [
        "Automatic database creation during setup",
        "Smart relations between tasks, projects, and clients",
        "Customizable templates and views",
        "Full control over your data in Notion",
      ],
    },
    ai: {
      title: "AI-Powered Classification",
      description: "BizStruct Assistant uses AI to automatically classify and organize your messages and emails.",
      capabilities: [
        "Understands context and intent from your messages",
        "Automatically assigns the right category (task, project, client, finance)",
        "Extracts key information like dates, amounts, and priorities",
        "Creates structured records with proper tags and relations",
        "Learns from your usage patterns over time",
      ],
    },
    cta: {
      title: "Ready to get started?",
      description: "Start your 3-day free trial and see how BizStruct Assistant can transform your workflow.",
      button: "Start 3-day free trial",
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
      title: "Всё, что нужно для управления бизнесом",
      subtitle: "От Telegram и Gmail к организованному рабочему пространству Notion",
      description: "BizStruct Assistant захватывает, классифицирует и организует всю вашу работу автоматически.",
    },
    telegram: {
      title: "Захват из Telegram",
      description: "Используйте простые команды для захвата задач, проектов, клиентов и финансов прямо из Telegram.",
      commands: [
        {
          command: "/task",
          description: "Создать задачу в Notion. Пример: /task Просмотреть отчёт Q4 до пятницы",
        },
        {
          command: "/project",
          description: "Создать новый проект. Пример: /project Редизайн сайта",
        },
        {
          command: "/client",
          description: "Добавить нового клиента. Пример: /client Acme Corp - Разработка ПО",
        },
        {
          command: "/finance",
          description: "Записать финансовую транзакцию. Пример: /finance $500 - Оплата счёта от Acme",
        },
        {
          command: "/all",
          description: "Позвольте ИИ автоматически классифицировать ваше сообщение в правильную категорию (задача, проект, клиент или финансы).",
        },
      ],
      benefits: [
        "Не нужно переключаться между приложениями—захватывайте всё из Telegram",
        "ИИ-классификация для умной организации",
        "Автоматическое создание структурированных записей в Notion",
        "Работает с вашим существующим рабочим процессом Telegram",
      ],
    },
    gmail: {
      title: "Gmail → Notion Inbox",
      description: "Подключите свой аккаунт Gmail один раз и автоматически синхронизируйте все важные письма в ваш Notion Inbox.",
      features: [
        "Автоматический захват писем в Notion Inbox",
        "ИИ-классификация содержимого писем",
        "Связывание писем с задачами, проектами или клиентами",
        "Никогда не теряйте важную информацию из вашего inbox",
        "Поиск и организация писем в Notion",
      ],
      setup: "Авторизуйте Gmail один раз во время настройки, и BizStruct Assistant сделает всё остальное автоматически.",
    },
    summary: {
      title: "Ежедневная сводка в Telegram",
      description: "Получайте умный утренний отчёт в Telegram каждый день со всем, что вам нужно знать.",
      includes: [
        "Задачи и приоритеты на сегодня",
        "Просроченные дела, требующие внимания",
        "Новые проекты и обновления",
        "Ключевые бизнес-метрики и статистика",
        "Недавняя активность клиентов",
      ],
      time: "Доставляется каждое утро в удобное для вас время",
    },
    notion: {
      title: "Структурированное рабочее пространство Notion",
      description: "Вся захваченная информация автоматически организуется в чистые, структурированные базы данных Notion.",
      databases: [
        {
          name: "Задачи",
          description: "Все ваши задачи с приоритетами, сроками и отслеживанием статуса",
        },
        {
          name: "Проекты",
          description: "Управление проектами с временными рамками, вехами и отслеживанием прогресса",
        },
        {
          name: "Клиенты",
          description: "База данных клиентов с контактной информацией, историей проектов и логами общения",
        },
        {
          name: "Финансы",
          description: "Финансовые записи с доходами, расходами и отслеживанием транзакций",
        },
        {
          name: "Inbox",
          description: "Единый inbox для всех писем и сообщений, требующих обработки",
        },
      ],
      benefits: [
        "Автоматическое создание баз данных во время настройки",
        "Умные связи между задачами, проектами и клиентами",
        "Настраиваемые шаблоны и представления",
        "Полный контроль над вашими данными в Notion",
      ],
    },
    ai: {
      title: "ИИ-классификация",
      description: "BizStruct Assistant использует ИИ для автоматической классификации и организации ваших сообщений и писем.",
      capabilities: [
        "Понимает контекст и намерение из ваших сообщений",
        "Автоматически назначает правильную категорию (задача, проект, клиент, финансы)",
        "Извлекает ключевую информацию, такую как даты, суммы и приоритеты",
        "Создаёт структурированные записи с правильными тегами и связями",
        "Учится на ваших паттернах использования со временем",
      ],
    },
    cta: {
      title: "Готовы начать?",
      description: "Начните свой 3-дневный бесплатный пробный период и посмотрите, как BizStruct Assistant может преобразовать ваш рабочий процесс.",
      button: "Начать 3-дневный пробный период",
    },
  },
}

export default function FeaturesPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = featuresTranslations[language]

  const heroRef = useRef<HTMLDivElement>(null)
  const telegramRef = useRef<HTMLDivElement>(null)
  const gmailRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  const notionRef = useRef<HTMLDivElement>(null)
  const aiRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const heroVisible = useIntersectionObserver(heroRef)
  const telegramVisible = useIntersectionObserver(telegramRef)
  const gmailVisible = useIntersectionObserver(gmailRef)
  const summaryVisible = useIntersectionObserver(summaryRef)
  const notionVisible = useIntersectionObserver(notionRef)
  const aiVisible = useIntersectionObserver(aiRef)
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

          {/* Telegram Section */}
          <div
            ref={telegramRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              telegramVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.telegram.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">{t.telegram.description}</p>
              </div>

              {/* Commands */}
              <div className="w-full flex flex-col gap-3">
                {t.telegram.commands.map((cmd, index) => (
                  <div key={index} className="w-full p-4 bg-white border border-[#E0DEDB] rounded-lg flex flex-col gap-2">
                    <div className="text-[#49423D] text-sm font-semibold leading-5 font-sans font-mono">
                      {cmd.command}
                    </div>
                    <div className="text-[#605A57] text-sm font-normal leading-5 font-sans">{cmd.description}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {t.telegram.benefits.map((benefit, index) => (
                  <div key={index} className="flex justify-start items-start gap-3">
                    <div className="w-5 h-5 relative flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      {benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gmail Section */}
          <div
            ref={gmailRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              gmailVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.gmail.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">{t.gmail.description}</p>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.gmail.features.map((feature, index) => (
                  <div key={index} className="flex justify-start items-start gap-3">
                    <div className="w-5 h-5 relative flex items-center justify-center flex-shrink-0 mt-0.5">
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

              <div className="w-full p-4 bg-[#F7F5F3] rounded-lg">
                <p className="text-[#605A57] text-sm font-normal leading-5 font-sans">{t.gmail.setup}</p>
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
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.summary.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">{t.summary.description}</p>
              </div>

              <div className="w-full p-4 bg-white border border-[#E0DEDB] rounded-lg flex flex-col gap-3">
                <div className="text-[#49423D] text-sm font-semibold leading-5 font-sans">Includes:</div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                  {t.summary.includes.map((item, index) => (
                    <div key={index} className="flex justify-start items-start gap-3">
                      <div className="w-4 h-4 relative flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-[#605A57] text-xs font-normal leading-4 font-sans mt-2">{t.summary.time}</div>
              </div>
            </div>
          </div>

          {/* Notion Section */}
          <div
            ref={notionRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              notionVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.notion.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">{t.notion.description}</p>
              </div>

              <div className="w-full flex flex-col gap-3">
                {t.notion.databases.map((db, index) => (
                  <div key={index} className="w-full p-4 bg-white border border-[#E0DEDB] rounded-lg flex flex-col gap-1">
                    <div className="text-[#49423D] text-sm font-semibold leading-5 font-sans">{db.name}</div>
                    <div className="text-[#605A57] text-sm font-normal leading-5 font-sans">{db.description}</div>
                  </div>
                ))}
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {t.notion.benefits.map((benefit, index) => (
                  <div key={index} className="flex justify-start items-start gap-3">
                    <div className="w-5 h-5 relative flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      {benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Section */}
          <div
            ref={aiRef}
            className={`self-stretch px-4 sm:px-6 md:px-8 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex justify-start items-start ${
              aiVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
            }`}
          >
            <div className="w-full max-w-[900px] flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  {t.ai.title}
                </h2>
                <p className="text-[#605A57] text-base font-normal leading-6 font-sans">{t.ai.description}</p>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.ai.capabilities.map((capability, index) => (
                  <div key={index} className="flex justify-start items-start gap-3">
                    <div className="w-5 h-5 relative flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      {capability}
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

