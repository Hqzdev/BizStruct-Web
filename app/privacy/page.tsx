"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"
import { getStoredLanguage, type Language } from "@/lib/language"

const privacyTranslations = {
  en: {
    title: "Privacy Policy",
    subtitle: "Personal data processing policy (in accordance with the requirements of Federal Law No. 152-FZ of 27.07.2006)",
    intro:
      "This document defines the policy of the seller (operator) in relation to the processing of personal data of users of the BizStruct website and Telegram bot.",
    section1Title: "1. Operator",
    section1Text:
      "The operator of personal data is the seller (self-employed / individual entrepreneur / legal entity), whose contact details and requisites are indicated on the Contacts and requisites page of this website.",
    section2Title: "2. Purposes of processing",
    section2Text:
      "Personal data are processed for: provision of access to the BizStruct service; execution of the offer agreement; communication with the user (support, refund requests); sending information about the service (if the user has agreed); compliance with the law.",
    section3Title: "3. Processed data",
    section3Text:
      "Depending on the method of interaction: contact details (e-mail, Telegram identifier, name), payment data (processed by the payment system ЮKassa in accordance with its rules), technical data (IP address, data in cookies when visiting the site).",
    section4Title: "4. Legal basis",
    section4Text:
      "Processing is carried out on the basis of the user's consent, execution of the contract, and legitimate interests of the operator in cases provided by law.",
    section5Title: "5. Storage and security",
    section5Text:
      "Personal data are stored for the period necessary for the stated purposes and in accordance with the law. The operator takes organizational and technical measures to protect data from unauthorized access.",
    section6Title: "6. Rights of the data subject",
    section6Text:
      "The user has the right to request access to their data, correction, deletion, restriction of processing, and to withdraw consent. To do this, contact the operator at the contacts specified on the website. You also have the right to lodge a complaint with the supervisory authority.",
    section7Title: "7. Cookies and site",
    section7Text:
      "The site may use cookies for technical operation and analytics. By continuing to use the site, you consent to the use of cookies in accordance with this policy.",
    section8Title: "8. Changes",
    section8Text:
      "The operator may update this policy. The current version is always available on this page. Continued use of the service after changes constitutes acceptance of the updated policy.",
    backToHome: "Back to home",
    contactsLink: "Contacts and requisites",
  },
  ru: {
    title: "Политика обработки персональных данных",
    subtitle: "В соответствии с требованиями ФЗ «О персональных данных» от 27.07.2006 № 152-ФЗ",
    intro:
      "Настоящий документ определяет политику продавца (оператора) в отношении обработки персональных данных пользователей сайта и Telegram-бота BizStruct.",
    section1Title: "1. Оператор",
    section1Text:
      "Оператором персональных данных является продавец (самозанятый / индивидуальный предприниматель / юридическое лицо), контактные данные и реквизиты которого указаны на странице «Контакты и реквизиты» данного сайта.",
    section2Title: "2. Цели обработки",
    section2Text:
      "Персональные данные обрабатываются в целях: предоставления доступа к сервису BizStruct; исполнения договора оферты; связи с пользователем (поддержка, заявки на возврат); направления информации об услуге (при наличии согласия пользователя); соблюдения требований законодательства.",
    section3Title: "3. Обрабатываемые данные",
    section3Text:
      "В зависимости от способа взаимодействия: контактные данные (e-mail, идентификатор Telegram, имя), данные об оплате (обрабатываются платёжной системой ЮKassa в соответствии с её правилами), технические данные (IP-адрес, данные в cookie при посещении сайта).",
    section4Title: "4. Правовые основания",
    section4Text:
      "Обработка осуществляется на основании согласия пользователя, исполнения договора, а также законных интересов оператора в случаях, предусмотренных законом.",
    section5Title: "5. Хранение и защита",
    section5Text:
      "Персональные данные хранятся в течение срока, необходимого для заявленных целей и в соответствии с законодательством. Оператор принимает организационные и технические меры для защиты данных от неправомерного доступа.",
    section6Title: "6. Права субъекта персональных данных",
    section6Text:
      "Пользователь вправе запросить доступ к своим данным, их уточнение, удаление, ограничение обработки, а также отозвать согласие. Для этого необходимо обратиться к оператору по контактам, указанным на сайте. Вы также имеете право подать жалобу в надзорный орган.",
    section7Title: "7. Файлы cookie и сайт",
    section7Text:
      "Сайт может использовать файлы cookie для технической работы и аналитики. Продолжая использовать сайт, вы соглашаетесь с использованием cookie в соответствии с настоящей политикой.",
    section8Title: "8. Изменения",
    section8Text:
      "Оператор вправе обновлять настоящую политику. Актуальная версия всегда доступна на данной странице. Продолжение использования сервиса после изменений означает принятие обновлённой политики.",
    backToHome: "На главную",
    contactsLink: "Контакты и реквизиты",
  },
}

export default function PrivacyPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = privacyTranslations[language]

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
        <div className="max-w-2xl mx-auto space-y-10">
          <div>
            <h1 className="text-[#49423D] text-3xl md:text-4xl font-semibold tracking-tight">{t.title}</h1>
            <p className="text-[#605A57] mt-2 text-sm">{t.subtitle}</p>
            <p className="text-[#605A57] mt-4 text-sm leading-relaxed">{t.intro}</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section1Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section1Text}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section2Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section2Text}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section3Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section3Text}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section4Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section4Text}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section5Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section5Text}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section6Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section6Text}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section7Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section7Text}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section8Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section8Text}</p>
          </section>

          <div className="pt-6 flex flex-col gap-2">
            <Link
              href="/"
              className="text-[#49423D] text-sm font-medium hover:text-[#37322F] underline underline-offset-2"
            >
              ← {t.backToHome}
            </Link>
            <Link
              href="/contacts"
              className="text-[#49423D] text-sm font-medium hover:text-[#37322F] underline underline-offset-2"
            >
              {t.contactsLink}
            </Link>
          </div>
        </div>
      </main>
      <FooterSection language={language} />
    </div>
  )
}
