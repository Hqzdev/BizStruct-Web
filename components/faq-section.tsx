"use client"

import { useState, useRef, useEffect } from "react"
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

interface FAQItem {
  question: string
  answer: string
}

const faqTranslations = {
  en: {
    title: "Frequently Asked Questions",
    description: "Learn how BizStruct Assistant connects Telegram, Gmail, and Notion",
    descriptionLine2: "to keep your tasks, projects, clients, and finances under control.",
    faqData: [
      {
        question: "What is BizStruct Assistant and who is it for?",
        answer:
          "BizStruct Assistant is a Telegram bot and Control Center that connects Telegram, Gmail, and Notion. It is built for founders, operators, and small teams that live in chats and email but want Notion to stay perfectly structured without manual work.",
      },
      {
        question: "How does the Telegram bot actually work?",
        answer:
          "You talk to the bot using simple commands like /task, /project, /client, /finance or /all, forward messages, or send files. AI classifies each input, extracts key fields like deadlines, amounts, and client names, and creates the right record in your Notion databases.",
      },
      {
        question: "How does email integration with Gmail work?",
        answer:
          "You connect your Gmail account once via OAuth. BizStruct Assistant then pulls emails into a Notion Inbox, classifies them (task, client, finance, project, other), and stores links back to the original email so you never lose context.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer 24/7 customer support, dedicated account managers for enterprise clients, comprehensive documentation, and onboarding assistance to help you get started quickly.",
      },
      {
        question: "Is my data secure with BizStruct Assistant?",
        answer:
          "We take security seriously. Authentication goes through official providers (like Gmail OAuth), and data is stored in your Notion workspace. We follow industry best practices for encryption and access control so your business information stays private.",
      },
      {
        question: "How do I get started with BizStruct Assistant?",
        answer:
          "Start by connecting your Telegram, Notion, and Gmail. Then configure your Notion databases for Tasks, Projects, Clients, Finances, and Inbox. From there, just talk to the bot—within a day you&apos;ll have a central, living Control Center for your business.",
      },
    ],
  },
  ru: {
    title: "Часто задаваемые вопросы",
    description: "Узнайте, как BizStruct Assistant соединяет Telegram, Gmail и Notion",
    descriptionLine2: "чтобы держать ваши задачи, проекты, клиентов и финансы под контролем.",
    faqData: [
      {
        question: "Что такое BizStruct Assistant и для кого он?",
        answer:
          "BizStruct Assistant — это Telegram-бот и Центр управления, который соединяет Telegram, Gmail и Notion. Он создан для основателей, операторов и небольших команд, которые живут в чатах и почте, но хотят, чтобы Notion оставался идеально структурированным без ручной работы.",
      },
      {
        question: "Как на самом деле работает Telegram-бот?",
        answer:
          "Вы общаетесь с ботом, используя простые команды, такие как /task, /project, /client, /finance или /all, пересылаете сообщения или отправляете файлы. ИИ классифицирует каждый ввод, извлекает ключевые поля, такие как дедлайны, суммы и имена клиентов, и создаёт правильную запись в ваших базах данных Notion.",
      },
      {
        question: "Как работает интеграция с Gmail?",
        answer:
          "Вы подключаете свой аккаунт Gmail один раз через OAuth. BizStruct Assistant затем загружает письма в Notion Inbox, классифицирует их (задача, клиент, финансы, проект, другое) и сохраняет ссылки на оригинальные письма, чтобы вы никогда не теряли контекст.",
      },
      {
        question: "Какую поддержку вы предоставляете?",
        answer:
          "Мы предлагаем поддержку клиентов 24/7, выделенных менеджеров аккаунтов для корпоративных клиентов, подробную документацию и помощь в онбординге, чтобы помочь вам быстро начать работу.",
      },
      {
        question: "Безопасны ли мои данные с BizStruct Assistant?",
        answer:
          "Мы серьёзно относимся к безопасности. Аутентификация проходит через официальных провайдеров (например, Gmail OAuth), а данные хранятся в вашем рабочем пространстве Notion. Мы следуем лучшим практикам индустрии для шифрования и контроля доступа, чтобы ваша бизнес-информация оставалась конфиденциальной.",
      },
      {
        question: "Как начать работу с BizStruct Assistant?",
        answer:
          "Начните с подключения Telegram, Notion и Gmail. Затем настройте свои базы данных Notion для Задач, Проектов, Клиентов, Финансов и Inbox. После этого просто общайтесь с ботом — в течение дня у вас будет центральный, живой Центр управления для вашего бизнеса.",
      },
    ],
  },
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

interface FAQSectionProps {
  language?: "en" | "ru"
}

export default function FAQSection({ language = "en" }: FAQSectionProps) {
  const t = faqTranslations[language]
  const faqData = t.faqData
  const [openItems, setOpenItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div
      ref={sectionRef}
      className={`w-full flex justify-center items-start ${
        isVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
      }`}
    >
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            {t.title}
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            {t.description}
            <br className="hidden md:block" />
            {t.descriptionLine2}
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
