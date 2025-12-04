"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { getStoredLanguage, setStoredLanguage, type Language } from "@/lib/language"
import SmartSimpleBrilliant from "../components/smart-simple-brilliant"
import YourWorkInSync from "../components/your-work-in-sync"
import EffortlessIntegration from "../components/effortless-integration-updated"
import NumbersThatSpeak from "../components/numbers-that-speak"
import DocumentationSection from "../components/documentation-section"
import TestimonialsSection from "../components/testimonials-section"
import FAQSection from "../components/faq-section"
import PricingSection from "../components/pricing-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import { SocialProof } from "../components/social-proof"

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

// Notion Dashboard Visualization Component
function NotionDashboardVisualization({ type, language }: { type: 0 | 1 | 2; language: Language }) {
  const themeVars = {
    "--nts-surface": "#ffffff",
    "--nts-text-primary": "#2f3037",
    "--nts-text-secondary": "rgba(47,48,55,0.8)",
    "--nts-text-muted": "rgba(55,50,47,0.7)",
    "--nts-border": "rgba(47,48,55,0.12)",
    "--nts-shadow": "rgba(47,48,55,0.06)",
  } as React.CSSProperties

  const t = translations[language]

  // Card 0: Telegram Capture - Notion Inbox View
  if (type === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "var(--nts-surface)",
          ...themeVars,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            boxSizing: "border-box",
            gap: "16px",
          }}
        >
          {/* Notion Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "3px",
                backgroundColor: "#37322F",
              }}
            />
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--nts-text-primary)",
              }}
            >
              BizStruct Inbox
            </div>
          </div>

          {/* Database View */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
            {/* Table Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                gap: "12px",
                padding: "8px 12px",
                backgroundColor: "rgba(0,0,0,0.02)",
                borderRadius: "4px",
                fontSize: "11px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "var(--nts-text-muted)",
              }}
            >
              <div>Item</div>
              <div>Type</div>
              <div>Source</div>
              <div>Status</div>
            </div>

            {/* Table Rows */}
            {[
              { item: "Review Q4 financials", type: "Task", source: "Telegram", status: "New" },
              { item: "Client onboarding call", type: "Project", source: "Telegram", status: "In Progress" },
              { item: "Invoice #1234", type: "Finance", source: "Gmail", status: "New" },
              { item: "Team standup notes", type: "Task", source: "Telegram", status: "Done" },
              { item: "New client inquiry", type: "Client", source: "Gmail", status: "New" },
            ].map((row, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  gap: "12px",
                  padding: "10px 12px",
                  backgroundColor: index % 2 === 0 ? "transparent" : "rgba(0,0,0,0.01)",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <div style={{ color: "var(--nts-text-primary)", fontWeight: 500 }}>{row.item}</div>
                <div
                  style={{
                    color: "var(--nts-text-secondary)",
                    fontSize: "11px",
                    padding: "2px 6px",
                    backgroundColor: "rgba(93,78,55,0.1)",
                    borderRadius: "3px",
                    display: "inline-block",
                    width: "fit-content",
                  }}
                >
                  {row.type}
                </div>
                <div style={{ color: "var(--nts-text-muted)", fontSize: "11px" }}>{row.source}</div>
                <div
                  style={{
                    color: row.status === "Done" ? "#5D4E37" : row.status === "In Progress" ? "#8B6F47" : "var(--nts-text-muted)",
                    fontSize: "11px",
                    fontWeight: row.status === "New" ? 600 : 400,
                  }}
                >
                  {row.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Card 1: Gmail → Notion - AI Classification View
  if (type === 1) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "var(--nts-surface)",
          ...themeVars,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            boxSizing: "border-box",
            gap: "16px",
          }}
        >
          {/* Notion Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "3px",
                backgroundColor: "#37322F",
              }}
            />
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--nts-text-primary)",
              }}
            >
              AI Classification
            </div>
          </div>

          {/* Classification Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
            {[
              {
                title: "Email: Project Update",
                from: "client@example.com",
                classified: "Project → Q4 Campaign",
                tags: ["Client", "Urgent"],
              },
              {
                title: "Email: Invoice Payment",
                from: "finance@example.com",
                classified: "Finance → Invoice #1234",
                tags: ["Finance", "Payment"],
              },
              {
                title: "Email: Meeting Request",
                from: "team@example.com",
                classified: "Task → Schedule Meeting",
                tags: ["Task", "Calendar"],
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "16px",
                  backgroundColor: "rgba(0,0,0,0.02)",
                  borderRadius: "6px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "var(--nts-text-primary)",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    color: "var(--nts-text-muted)",
                  }}
                >
                  From: {item.from}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#5D4E37",
                    fontWeight: 500,
                    marginTop: "4px",
                  }}
                >
                  → {item.classified}
                </div>
                <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                  {item.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      style={{
                        fontSize: "10px",
                        padding: "3px 8px",
                        backgroundColor: "rgba(93,78,55,0.1)",
                        borderRadius: "3px",
                        color: "#5D4E37",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Card 2: Daily Summary - Telegram View
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "var(--nts-surface)",
        ...themeVars,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          boxSizing: "border-box",
          gap: "16px",
        }}
      >
        {/* Telegram Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            paddingBottom: "16px",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#0088cc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            BS
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "var(--nts-text-primary)",
            }}
          >
            BizStruct Assistant
          </div>
        </div>

        {/* Summary Message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flexGrow: 1,
            backgroundColor: "rgba(0,136,204,0.05)",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid rgba(0,136,204,0.1)",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: "var(--nts-text-primary)",
              marginBottom: "4px",
            }}
          >
            📊 Daily Summary - Today
          </div>

          {[
            { label: "Today's Tasks", value: "12", icon: "✓" },
            { label: "Overdue", value: "3", icon: "⚠️" },
            { label: "New Projects", value: "2", icon: "📁" },
            { label: "Revenue (MTD)", value: "$47,231", icon: "💰" },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: index < 3 ? "1px solid rgba(0,0,0,0.05)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "14px" }}>{stat.icon}</span>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "var(--nts-text-secondary)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#5D4E37",
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Reusable Badge Component
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

const translations = {
  en: {
    nav: {
      products: "Products",
      pricing: "Pricing",
      docs: "Docs",
      logIn: "Log in",
    },
    hero: {
      title: "Your business Control Center",
      titleLine2: "in Telegram & Notion",
      description: "Capture everything from Telegram and Gmail into structured tasks, projects, clients and finances in Notion,",
      descriptionLine2: "then get a smart Daily Summary in Telegram every morning.",
      cta: "Start for free",
    },
    features: {
      card1: {
        title: "Capture from Telegram",
        description: "Use /task, /project, /client, /finance commands or /all for AI-powered classification. Everything flows into Notion automatically.",
      },
      card2: {
        title: "Gmail → Notion Inbox",
        description: "All emails automatically sync to Notion Inbox with AI classification. Never lose important information again.",
      },
      card3: {
        title: "Daily Summary",
        description: "Get a smart morning report in Telegram with today's tasks, overdue items, new projects, and key business metrics.",
      },
    },
    dashboard: {
      card0: "Unified inbox showing everything captured from Telegram and Gmail into Notion",
      card1: "AI classification turning raw messages into structured tasks, projects, clients, and finances",
      card2: "Daily Summary view with today's tasks, overdue items, new leads, and key business stats",
    },
    socialProof: {
      badge: "Social Proof",
      title: "Trusted by founders who value their time",
      description: "Business owners use BizStruct Assistant to turn chaos into clarity,",
      descriptionLine2: "capturing work from anywhere and organizing it in Notion automatically.",
    },
    bento: {
      badge: "Workflows overview",
      title: "Built for founders who live in Telegram and Gmail",
      description: "Stop juggling chats, emails, and notes.",
      descriptionLine2: "BizStruct Assistant captures everything into Notion and keeps your day ruthlessly prioritized.",
      smart: {
        title: "Smart capture, zero manual sorting",
        description: "Every message, email, and file is turned into a clean Notion record with the right tags, relations, and priorities.",
      },
      sync: {
        title: "Your team, always on the same page",
        description: "Telegram updates, email threads, and Notion databases stay linked so nobody misses a task, client, or deadline.",
      },
      integration: {
        title: "Effortless integrations",
        description: "Connect Telegram, Gmail, and Notion once – BizStruct Assistant keeps everything in sync in the background.",
      },
      numbers: {
        title: "Numbers that actually matter",
        description: "See how many tasks came from Telegram, which clients generate the most work, and what is overdue – all in one Control Center.",
      },
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
      title: "Центр управления бизнесом",
      titleLine2: "в Telegram и Notion",
      description: "Захватывайте всё из Telegram и Gmail в структурированные задачи, проекты, клиентов и финансы в Notion,",
      descriptionLine2: "и получайте умную ежедневную сводку в Telegram каждое утро.",
      cta: "Начать бесплатно",
    },
    features: {
      card1: {
        title: "Захват из Telegram",
        description: "Используйте команды /task, /project, /client, /finance или /all для классификации с помощью ИИ. Всё автоматически попадает в Notion.",
      },
      card2: {
        title: "Gmail → Notion Inbox",
        description: "Все письма автоматически синхронизируются в Notion Inbox с классификацией ИИ. Больше не теряйте важную информацию.",
      },
      card3: {
        title: "Ежедневная сводка",
        description: "Получайте умный утренний отчёт в Telegram с задачами на сегодня, просроченными делами, новыми проектами и ключевыми метриками бизнеса.",
      },
    },
    dashboard: {
      card0: "Единый inbox, показывающий всё, что захвачено из Telegram и Gmail в Notion",
      card1: "Классификация ИИ превращает сырые сообщения в структурированные задачи, проекты, клиентов и финансы",
      card2: "Вид ежедневной сводки с задачами на сегодня, просроченными делами, новыми лидами и ключевой статистикой бизнеса",
    },
    socialProof: {
      badge: "Социальное доказательство",
      title: "Доверяют основатели, ценящие своё время",
      description: "Владельцы бизнеса используют BizStruct Assistant, чтобы превратить хаос в ясность,",
      descriptionLine2: "захватывая работу откуда угодно и автоматически организуя её в Notion.",
    },
    bento: {
      badge: "Обзор рабочих процессов",
      title: "Создано для основателей, которые живут в Telegram и Gmail",
      description: "Прекратите жонглировать чатами, письмами и заметками.",
      descriptionLine2: "BizStruct Assistant захватывает всё в Notion и держит ваш день безжалостно приоритизированным.",
      smart: {
        title: "Умный захват, без ручной сортировки",
        description: "Каждое сообщение, письмо и файл превращается в чистую запись Notion с правильными тегами, связями и приоритетами.",
      },
      sync: {
        title: "Ваша команда всегда на одной волне",
        description: "Обновления Telegram, цепочки писем и базы данных Notion остаются связанными, чтобы никто не пропустил задачу, клиента или дедлайн.",
      },
      integration: {
        title: "Беспроблемные интеграции",
        description: "Подключите Telegram, Gmail и Notion один раз – BizStruct Assistant держит всё в синхронизации в фоновом режиме.",
      },
      numbers: {
        title: "Цифры, которые действительно важны",
        description: "Смотрите, сколько задач пришло из Telegram, какие клиенты генерируют больше всего работы, и что просрочено – всё в одном Центре управления.",
      },
    },
  },
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const [language, setLanguage] = useState<Language>("en")
  const mountedRef = useRef(true)
  const t = translations[language]

  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const socialProofRef = useRef<HTMLDivElement>(null)
  const bentoRef = useRef<HTMLDivElement>(null)

  // Intersection observers
  const heroVisible = useIntersectionObserver(heroRef)
  const featuresVisible = useIntersectionObserver(featuresRef)
  const socialProofVisible = useIntersectionObserver(socialProofRef)
  const bentoVisible = useIntersectionObserver(bentoRef)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2 // 2% every 100ms = 5 seconds total
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    setLanguage(getStoredLanguage())

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail)
    }

    window.addEventListener("languageChange" as any, handleLanguageChange)
    return () => {
      mountedRef.current = false
      window.removeEventListener("languageChange" as any, handleLanguageChange)
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  const getDashboardContent = () => {
    switch (activeCard) {
      case 0:
        return <div className="text-[#828387] text-sm">{t.dashboard.card0}</div>
      case 1:
        return <div className="text-[#828387] text-sm">{t.dashboard.card1}</div>
      case 2:
        return <div className="text-[#828387] text-sm">{t.dashboard.card2}</div>
      default:
        return <div className="text-[#828387] text-sm">{t.dashboard.card0}</div>
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-start page-load">
      <div className="relative flex flex-col justify-start items-start w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:max-w-[1400px] xl:max-w-[1600px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

            <div className="self-stretch pt-[9px] overflow-hidden flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
              {/* Navigation - always visible at the top under the main header */}
              <div className="w-full h-16 sm:h-20 md:h-24 lg:h-[96px] fixed inset-x-0 top-[10px] flex justify-start items-center z-40 px-6 sm:px-8 md:px-12 lg:px-12 xl:px-16">

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-center items-center">
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                    BizStruct
                    </div>
                  </div>
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
              className={`pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-start px-2 sm:px-4 md:px-8 lg:px-0 w-full ${
                heroVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
              }`}
            >
              <div className="w-full max-w-[1200px] lg:w-[1200px] flex flex-col justify-start items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-start items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[900px] lg:w-[900px] text-left flex justify-start flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif transition-smooth">
                    {t.hero.title}
                    <br />
                    {t.hero.titleLine2}
                  </div>
                  <div className="w-full max-w-[700px] lg:w-[700px] text-left flex justify-start flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans lg:text-lg font-medium text-sm transition-smooth">
                    {t.hero.description}
                    <br className="hidden sm:block" />
                    {t.hero.descriptionLine2}
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                  <a
                    href="https://t.me/Bizstruct_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center transition-smooth hover-lift cursor-pointer"
                  >
                    <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                    <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                      {t.hero.cta}
                    </div>
                  </a>
                </div>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              <div className="w-full max-w-[1200px] lg:w-[1200px] xl:w-[1400px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-start items-start gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                <div className="w-full max-w-[1200px] lg:w-[1200px] xl:w-[1400px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start">
                  {/* Dashboard Content */}
                  <div className="self-stretch flex-1 flex justify-start items-start">
                    {/* Main Content */}
                    <div className="w-full h-full flex items-start justify-start">
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Notion Dashboard Visualization */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 0 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <NotionDashboardVisualization type={0} language={language} />
                        </div>

                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 1 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <NotionDashboardVisualization type={1} language={language} />
                        </div>

                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 2 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <NotionDashboardVisualization type={2} language={language} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-start items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>

                <div
                  ref={featuresRef}
                  className={`flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-start items-stretch gap-0 ${
                    featuresVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
                  }`}
                >
                  {/* Feature Cards */}
                  <FeatureCard
                    title={t.features.card1.title}
                    description={t.features.card1.description}
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureCard
                    title={t.features.card2.title}
                    description={t.features.card2.description}
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureCard
                    title={t.features.card3.title}
                    description={t.features.card3.description}
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Proof Section */}
              <div
                ref={socialProofRef}
                className={`w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-start ${
                  socialProofVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
                }`}
              >
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-start items-start gap-6">
                  <div className="w-full max-w-[800px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-start gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="3" width="4" height="6" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="2" y="4" width="1" height="1" fill="#37322F" />
                          <rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
                          <rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
                          <rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
                          <rect x="8" y="2" width="1" height="1" fill="#37322F" />
                          <rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
                          <rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
                          <rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
                          <rect x="8" y="5" width="1" height="1" fill="#37322F" />
                          <rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
                        </svg>
                      }
                      text={t.socialProof.badge}
                    />
                    <div className="w-full max-w-[800px] text-left flex justify-start flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      {t.socialProof.title}
                    </div>
                    <div className="self-stretch text-left text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      {t.socialProof.description}
                      <br className="hidden sm:block" />
                      {t.socialProof.descriptionLine2}
                    </div>
                  </div>
                </div>

                {/* Logo Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-start items-start border-t border-b-0">
                  <SocialProof />
                </div>
              </div>

              {/* Bento Grid Section */}
              <div
                ref={bentoRef}
                className={`w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-start ${
                  bentoVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
                }`}
              >
                {/* Header Section */}
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1400px] xl:max-w-[1600px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-start items-start gap-6">
                  <div className="w-full max-w-[900px] lg:w-[900px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-start gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="1" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="7" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                        </svg>
                      }
                      text={t.bento.badge}
                    />
                    <div className="w-full max-w-[900px] lg:w-[900px] text-left flex justify-start flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      {t.bento.title}
                    </div>
                    <div className="self-stretch text-left text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      {t.bento.description}
                      <br />
                      {t.bento.descriptionLine2}
                    </div>
                  </div>
                </div>

                {/* Bento Grid Content */}
                <div className="self-stretch flex justify-start items-start">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Top Left - Smart. Simple. Brilliant. */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 transition-smooth hover:bg-white/30">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          {t.bento.smart.title}
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          {t.bento.smart.description}
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                        <SmartSimpleBrilliant
                          width="100%"
                          height="100%"
                          theme="light"
                          className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
                        />
                      </div>
                    </div>

                    {/* Top Right - Your work, in sync */}
                    <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 transition-smooth hover:bg-white/30">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                          {t.bento.sync.title}
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          {t.bento.sync.description}
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden text-right items-center justify-center">
                        <YourWorkInSync
                          width="400"
                          height="250"
                          theme="light"
                          className="scale-60 sm:scale-75 md:scale-90"
                        />
                      </div>
                    </div>

                    {/* Bottom Left - Effortless integration */}
                    <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent transition-smooth hover:bg-white/30">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          {t.bento.integration.title}
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          {t.bento.integration.description}
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                          <EffortlessIntegration width={400} height={250} className="max-w-full max-h-full" />
                        </div>
                        {/* Gradient mask for soft bottom edge */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Bottom Right - Numbers that speak */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 transition-smooth hover:bg-white/30">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          {t.bento.numbers.title}
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          {t.bento.numbers.description}
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <NumbersThatSpeak
                            width="100%"
                            height="100%"
                            theme="light"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        {/* Gradient mask for soft bottom edge */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
                        {/* Fallback content if component doesn't render */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 hidden">
                          <div className="flex flex-col items-center gap-2 p-4">
                            <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-sm text-green-600">Growth Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Section */}
              <DocumentationSection language={language} />

              
              {/* Pricing Section */}
              <PricingSection language={language} />

              {/* FAQ Section */}
              <FAQSection language={language} />

              {/* CTA Section */}
              <CTASection language={language} />

              {/* Footer Section */}
              <FooterSection language={language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// FeatureCard component definition inline to fix import error
function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 transition-smooth ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80 hover:bg-white/50 hover:shadow-sm"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
          <div
            className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
