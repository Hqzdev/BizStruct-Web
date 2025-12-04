"use client"

import { useState, useEffect, useRef } from "react"
import type React from "react"

// Dashboard visualization component similar to numbers-that-speak
function DashboardVisualization({ type }: { type: 0 | 1 | 2 }) {
  const themeVars = {
    "--nts-surface": "#ffffff",
    "--nts-text-primary": "#2f3037",
    "--nts-text-secondary": "rgba(47,48,55,0.8)",
    "--nts-text-muted": "rgba(55,50,47,0.7)",
    "--nts-border": "rgba(47,48,55,0.12)",
    "--nts-shadow": "rgba(47,48,55,0.06)",
  } as React.CSSProperties

  // Telegram Commands Dashboard (Card 0)
  if (type === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "transparent",
          ...themeVars,
        }}
      >
        <div
          className="border border-[rgba(0,0,0,0.08)]"
          style={{
            width: "100%",
            height: "100%",
            background: "var(--nts-surface)",
            borderRadius: "6.261px",
            boxShadow:
              "0px 0px 0px 0.783px rgba(47,48,55,0.12), 0px 1.565px 3.13px -0.783px rgba(47,48,55,0.06), 0px 2.348px 4.696px -1.174px rgba(47,48,55,0.06)",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "18.783px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18.783px",
              width: "100%",
              height: "100%",
              flexGrow: 1,
            }}
          >
            {/* Header Section */}
            <div
              style={{
                display: "flex",
                gap: "6.261px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6.261px",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "10.174px",
                    lineHeight: "18.783px",
                    color: "var(--nts-text-secondary)",
                    whiteSpace: "pre",
                  }}
                >
                  Telegram Commands
                </div>
                <div
                  className="tracking-widest"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "18.783px",
                    lineHeight: "20.348px",
                    letterSpacing: "-0.587px",
                    color: "var(--nts-text-primary)",
                    whiteSpace: "pre",
                  }}
                >
                  /task • /project • /client
                </div>
              </div>
            </div>

            {/* Commands List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "9.391px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                flexGrow: 1,
              }}
            >
              {[
                { command: "/task", label: "Create Task", count: "12" },
                { command: "/project", label: "New Project", count: "8" },
                { command: "/client", label: "Add Client", count: "5" },
                { command: "/finance", label: "Record Finance", count: "3" },
                { command: "/all", label: "Sync All", count: "1" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "9.391px",
                    backgroundColor: "rgba(0,0,0,0.02)",
                    borderRadius: "4px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "3.13px" }}>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: "9.391px",
                        lineHeight: "14.087px",
                        color: "var(--nts-text-primary)",
                      }}
                    >
                      {item.command}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "7.826px",
                        lineHeight: "12.522px",
                        color: "var(--nts-text-muted)",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "9.391px",
                      lineHeight: "14.087px",
                      color: "var(--nts-text-secondary)",
                      backgroundColor: "rgba(0,0,0,0.05)",
                      padding: "3.13px 6.261px",
                      borderRadius: "3px",
                    }}
                  >
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Gmail Inbox Dashboard (Card 1)
  if (type === 1) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "transparent",
          ...themeVars,
        }}
      >
        <div
          className="border border-[rgba(0,0,0,0.08)]"
          style={{
            width: "100%",
            height: "100%",
            background: "var(--nts-surface)",
            borderRadius: "6.261px",
            boxShadow:
              "0px 0px 0px 0.783px rgba(47,48,55,0.12), 0px 1.565px 3.13px -0.783px rgba(47,48,55,0.06), 0px 2.348px 4.696px -1.174px rgba(47,48,55,0.06)",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "18.783px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18.783px",
              width: "100%",
              height: "100%",
              flexGrow: 1,
            }}
          >
            {/* Header Section */}
            <div
              style={{
                display: "flex",
                gap: "6.261px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6.261px",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "10.174px",
                    lineHeight: "18.783px",
                    color: "var(--nts-text-secondary)",
                    whiteSpace: "pre",
                  }}
                >
                  Gmail Inbox
                </div>
                <div
                  className="tracking-widest"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "18.783px",
                    lineHeight: "20.348px",
                    letterSpacing: "-0.587px",
                    color: "var(--nts-text-primary)",
                    whiteSpace: "pre",
                  }}
                >
                  47 emails synced
                </div>
              </div>
            </div>

            {/* Email List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6.261px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                flexGrow: 1,
              }}
            >
              {[
                { from: "Client A", subject: "Project Update", time: "2h ago", unread: true },
                { from: "Team Lead", subject: "Meeting Notes", time: "5h ago", unread: true },
                { from: "Finance", subject: "Invoice #1234", time: "1d ago", unread: false },
                { from: "Client B", subject: "New Request", time: "2d ago", unread: false },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "9.391px",
                    width: "100%",
                    padding: "9.391px",
                    backgroundColor: item.unread ? "rgba(0,0,0,0.03)" : "transparent",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "6.261px",
                      height: "6.261px",
                      borderRadius: "50%",
                      backgroundColor: item.unread ? "#5D4E37" : "transparent",
                      marginTop: "4px",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "3.13px", flexGrow: 1 }}>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: item.unread ? 600 : 500,
                        fontSize: "9.391px",
                        lineHeight: "14.087px",
                        color: "var(--nts-text-primary)",
                      }}
                    >
                      {item.from}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "7.826px",
                        lineHeight: "12.522px",
                        color: "var(--nts-text-muted)",
                      }}
                    >
                      {item.subject}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "7.826px",
                      lineHeight: "12.522px",
                      color: "var(--nts-text-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Daily Summary Dashboard (Card 2)
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "transparent",
        ...themeVars,
      }}
    >
      <div
        className="border border-[rgba(0,0,0,0.08)]"
        style={{
          width: "100%",
          height: "100%",
          background: "var(--nts-surface)",
          borderRadius: "6.261px",
          boxShadow:
            "0px 0px 0px 0.783px rgba(47,48,55,0.12), 0px 1.565px 3.13px -0.783px rgba(47,48,55,0.06), 0px 2.348px 4.696px -1.174px rgba(47,48,55,0.06)",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "18.783px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18.783px",
            width: "100%",
            height: "100%",
            flexGrow: 1,
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              gap: "6.261px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6.261px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "10.174px",
                  lineHeight: "18.783px",
                  color: "var(--nts-text-secondary)",
                  whiteSpace: "pre",
                }}
              >
                Daily Summary
              </div>
              <div
                className="tracking-widest"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "18.783px",
                  lineHeight: "20.348px",
                  letterSpacing: "-0.587px",
                  color: "var(--nts-text-primary)",
                  whiteSpace: "pre",
                }}
              >
                Today&apos;s Overview
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9.391px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              flexGrow: 1,
            }}
          >
            {[
              { label: "Today&apos;s Tasks", value: "12", color: "#5D4E37" },
              { label: "Overdue", value: "3", color: "#8B6F47" },
              { label: "New Projects", value: "2", color: "#5D4E37" },
              { label: "Completed", value: "8", color: "#5D4E37" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "9.391px",
                  backgroundColor: "rgba(0,0,0,0.02)",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "9.391px",
                    lineHeight: "14.087px",
                    color: "var(--nts-text-secondary)",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "12.522px",
                    lineHeight: "18.783px",
                    color: item.color,
                    backgroundColor: "rgba(93,78,55,0.1)",
                    padding: "3.13px 6.261px",
                    borderRadius: "3px",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
    badge: "How BizStruct Assistant works",
    title: "From chaotic chats and emails to a clean Notion workspace",
    description: "BizStruct Assistant captures everything from Telegram and Gmail,",
    descriptionLine2: "sorts it with AI, and keeps Notion as your single source of truth.",
    cards: [
      {
        title: "Capture from Telegram in one command",
        description: "Use /task, /project, /client, /finance or /all\nand let AI create the right Notion record for you.",
      },
      {
        title: "Turn Gmail into a structured inbox",
        description: "Authorize Gmail once and automatically save\nall important emails into your Notion Inbox.",
      },
      {
        title: "Daily Summary in your Telegram",
        description: "Every morning you get today&apos;s tasks, overdue work,\nnew projects and key stats in one message.",
      },
    ],
  },
  ru: {
    badge: "Как работает BizStruct Assistant",
    title: "От хаотичных чатов и писем к чистому рабочему пространству Notion",
    description: "BizStruct Assistant захватывает всё из Telegram и Gmail,",
    descriptionLine2: "сортирует это с помощью ИИ и держит Notion как единственный источник правды.",
    cards: [
      {
        title: "Захват из Telegram одной командой",
        description: "Используйте /task, /project, /client, /finance или /all\nи позвольте ИИ создать правильную запись Notion для вас.",
      },
      {
        title: "Превратите Gmail в структурированный inbox",
        description: "Авторизуйте Gmail один раз и автоматически сохраняйте\nвсе важные письма в ваш Notion Inbox.",
      },
      {
        title: "Ежедневная сводка в вашем Telegram",
        description: "Каждое утро вы получаете задачи на сегодня, просроченную работу,\nновые проекты и ключевую статистику в одном сообщении.",
      },
    ],
  },
}

interface DocumentationSectionProps {
  language?: "en" | "ru"
}

export default function DocumentationSection({ language = "en" }: DocumentationSectionProps) {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const t = docTranslations[language]
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)

  const cards = [
    {
      title: t.cards[0].title,
      description: t.cards[0].description,
      image: "/modern-dashboard-interface-with-data-visualization.jpg",
    },
    {
      title: t.cards[1].title,
      description: t.cards[1].description,
      image: "/analytics-dashboard.png",
    },
    {
      title: t.cards[2].title,
      description: t.cards[2].description,
      image: "/team-collaboration-interface-with-shared-workspace.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div
      ref={sectionRef}
      className={`w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-start ${
        isVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
      }`}
    >
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-start items-start gap-6">
        <div className="w-full max-w-[900px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-start gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text={t.badge}
          />
          <div className="self-stretch text-left flex justify-start flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            {t.title}
          </div>
          <div className="self-stretch text-left text-[#605A57] text-base font-normal leading-7 font-sans">
            {t.description}
            <br />
            {t.descriptionLine2}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
                      : "border border-[rgba(2,6,23,0.08)]"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-[rgba(50,45,43,0.08)] overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-[#322D2B] animate-[progressBar_5s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-auto rounded-lg flex flex-col justify-center items-center gap-2 order-1 md:order-2 md:px-0 px-[00]">
            <div className="w-full md:w-[580px] h-[250px] md:h-[420px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-lg flex flex-col justify-start items-start">
              <div className="w-full h-full transition-all duration-300">
                <DashboardVisualization type={activeCard as 0 | 1 | 2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
