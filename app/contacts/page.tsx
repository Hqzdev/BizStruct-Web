"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"
import { getStoredLanguage, type Language } from "@/lib/language"

const contactsTranslations = {
  en: {
    title: "Contacts & requisites",
    subtitle: "Contact the seller and company details",
    contactsTitle: "Contact details",
    sellerName: "Seller name",
    sellerNamePlaceholder: "e.g. Individual Entrepreneur Ivanov I.I.",
    email: "Email",
    telegram: "Telegram bot",
    telegramLink: "t.me/BizStructBot",
    address: "Legal address",
    addressPlaceholder: "Registration address (fill in)",
    responseTime: "Response within 24 hours on business days",
    requisitesTitle: "Requisites",
    ogrn: "OGRN / OGRNIP",
    kpp: "KPP",
    requisitesIntro:
      "Payment is made via ЮKassa. The details below are used for issuing documents and contract settlements.",
    fullName: "Full name (IP / self-employed / LLC)",
    inn: "INN",
    bank: "Bank",
    bankAccount: "Checking account",
    bik: "BIK",
    corrAccount: "Correspondent account",
    backToHome: "Back to home",
  },
  ru: {
    title: "Контакты и реквизиты",
    subtitle: "Способ связи с продавцом и реквизиты организации",
    contactsTitle: "Контактные данные",
    sellerName: "Наименование продавца",
    sellerNamePlaceholder: "например: ИП Иванов И.И. или ООО «БизСтрукт»",
    email: "Email",
    telegram: "Telegram-бот",
    telegramLink: "t.me/BizStructBot",
    address: "Юридический адрес",
    addressPlaceholder: "Адрес регистрации (указать по факту)",
    responseTime: "Ответ в течение 24 часов в рабочие дни",
    requisitesTitle: "Реквизиты продавца",
    ogrn: "ОГРН / ОГРНИП",
    kpp: "КПП",
    requisitesIntro:
      "Оплата производится через платёжную систему ЮKassa. Реквизиты ниже используются для выставления документов и расчётов по договору.",
    fullName: "Полное наименование (ФИО ИП / самозанятого / ООО)",
    inn: "ИНН",
    bank: "Банк",
    bankAccount: "Расчётный счёт",
    bik: "БИК",
    corrAccount: "Корр. счёт",
    backToHome: "На главную",
  },
}

// Placeholder data — replace with real data before publication
const PLACEHOLDER = {
  sellerName: "Strelkov Yaroslav",
  email: "wkeyqwert@icloud.com",
  telegramUrl: "https://t.me/Bizstruct_bot",
  telegramLabel: "t.me/Bizstruct_bot",
  address: "Российская Федерация",
  fullName: "Strelkov Yaroslav",
  inn: "590616975703",
  ogrn: "—",
  kpp: "—",
  bank: "Tbank",
  bankAccount: "40817810300086053853",
  bik: "044525974",
  corrAccount: "30101810145250000974",
}

export default function ContactsPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = contactsTranslations[language]

  useEffect(() => {
    setLanguage(getStoredLanguage())
    const handleLanguageChange = () => setLanguage(getStoredLanguage())
    window.addEventListener("languageChange" as any, handleLanguageChange)
    return () => window.removeEventListener("languageChange" as any, handleLanguageChange)
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#F7F5F3] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:max-w-[1400px] xl:max-w-[1600px] mx-auto pt-24 pb-16">
        <div className="max-w-2xl mx-auto space-y-12">
          <div>
            <h1 className="text-[#49423D] text-3xl md:text-4xl font-semibold tracking-tight">{t.title}</h1>
            <p className="text-[#605A57] mt-2 text-sm">{t.subtitle}</p>
          </div>

          <section className="space-y-4">
            <h2 id="contacts" className="text-[#49423D] text-xl font-semibold">
              {t.contactsTitle}
            </h2>
            <div className="bg-white border border-[#E0DEDB] rounded-lg p-6 space-y-4 text-sm">
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-medium uppercase tracking-wide mb-1">
                  {t.sellerName}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.sellerName}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-medium uppercase tracking-wide mb-1">
                  {t.email}
                </div>
                <a
                  href={`mailto:${PLACEHOLDER.email}`}
                  className="text-[#49423D] hover:text-[#37322F] underline underline-offset-2"
                >
                  {PLACEHOLDER.email}
                </a>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-medium uppercase tracking-wide mb-1">
                  {t.telegram}
                </div>
                <a
                  href={PLACEHOLDER.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#49423D] hover:text-[#37322F] underline underline-offset-2"
                >
                  {PLACEHOLDER.telegramLabel}
                </a>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-medium uppercase tracking-wide mb-1">
                  {t.address}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.address}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-medium uppercase tracking-wide mb-1">
                  {t.responseTime}
                </div>
                <div className="text-[#605A57]">{t.responseTime}</div>
              </div>
            </div>
          </section>

          <section id="requisites" className="space-y-4 scroll-mt-24">
            <h2 className="text-[#49423D] text-xl font-semibold">{t.requisitesTitle}</h2>
            <p className="text-[#605A57] text-sm">{t.requisitesIntro}</p>
            <div className="bg-white border border-[#E0DEDB] rounded-lg p-6 space-y-4 text-sm font-mono">
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-sans font-medium uppercase tracking-wide mb-1">
                  {t.fullName}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.fullName}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-sans font-medium uppercase tracking-wide mb-1">
                  {t.ogrn}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.ogrn}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-sans font-medium uppercase tracking-wide mb-1">
                  {t.inn}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.inn}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-sans font-medium uppercase tracking-wide mb-1">
                  {t.kpp}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.kpp}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-sans font-medium uppercase tracking-wide mb-1">
                  {t.bank}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.bank}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-sans font-medium uppercase tracking-wide mb-1">
                  {t.bankAccount}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.bankAccount}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-sans font-medium uppercase tracking-wide mb-1">
                  {t.bik}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.bik}</div>
              </div>
              <div>
                <div className="text-[rgba(73,66,61,0.6)] text-xs font-sans font-medium uppercase tracking-wide mb-1">
                  {t.corrAccount}
                </div>
                <div className="text-[#49423D]">{PLACEHOLDER.corrAccount}</div>
              </div>
            </div>
          </section>

          <div className="pt-4">
            <Link
              href="/"
              className="text-[#49423D] text-sm font-medium hover:text-[#37322F] underline underline-offset-2"
            >
              ← {t.backToHome}
            </Link>
          </div>
        </div>
      </main>
      <FooterSection language={language} />
    </div>
  )
}
