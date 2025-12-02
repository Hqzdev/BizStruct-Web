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

const ctaTranslations = {
  en: {
    title: "Ready to stop losing tasks in chats and email?",
    description: "Connect Telegram, Gmail, and Notion once and let BizStruct Assistant",
    descriptionLine2: "capture, classify, and summarize your work automatically.",
    cta: "Start for free",
  },
  ru: {
    title: "Готовы перестать терять задачи в чатах и почте?",
    description: "Подключите Telegram, Gmail и Notion один раз и позвольте BizStruct Assistant",
    descriptionLine2: "автоматически захватывать, классифицировать и суммировать вашу работу.",
    cta: "Начать бесплатно",
  },
}

interface CTASectionProps {
  language?: "en" | "ru"
}

export default function CTASection({ language = "en" }: CTASectionProps) {
  const t = ctaTranslations[language]
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)

  return (
    <div
      ref={sectionRef}
      className={`w-full relative overflow-hidden flex flex-col justify-center items-center gap-2 ${
        isVisible ? "animate-on-scroll animate-fade-in-up" : "animate-on-scroll"
      }`}
    >
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
              {t.title}
            </div>
            <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
              {t.description}
              <br />
              {t.descriptionLine2}
            </div>
          </div>
          <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-12">
            <div className="flex justify-start items-center gap-4">
              <a
                href="https://t.me/Bizstruct_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-12 py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors"
              >
                <div className="w-44 h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                <div className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                  {t.cta}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
