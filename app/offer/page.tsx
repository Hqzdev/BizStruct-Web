"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"
import { getStoredLanguage, type Language } from "@/lib/language"

const offerTranslations = {
  en: {
    title: "Offer and refund",
    subtitle: "Terms of service and refund procedure",
    consentNote: "By paying for the service, you agree to the terms of this offer.",
    section1Title: "1. Subject and provision of the service",
    section1Text:
      "The service is provided in electronic form through the Telegram bot BizStruct. To use it you need: a Telegram account, connection of email (Gmail, etc.) and Notion according to the bot instructions. Access to the functionality after payment is provided within the period specified in this offer (e.g. automatically after successful payment or within 24 hours). The seller undertakes to maintain the bot and applications; in case of scheduled maintenance, users will be notified where possible (e.g. in the bot or on the website). The user must comply with the rules of use and not violate the legislation of the Russian Federation or the rights of third parties.",
    section2Title: "2. Digital content and withdrawal",
    section2Text:
      "The service consists of access to digital content (bot functionality) that has no physical medium. Under the legislation of the Russian Federation, the buyer may refuse to perform the contract before access is provided (before activation of the subscription after payment). After access has been provided (subscription activated), withdrawal from the digital content is possible only with the seller’s consent, unless otherwise provided by law or contract.",
    section3Title: "3. Refund",
    section3Before: "Before activation: if the buyer withdraws before access is activated, a full refund will be made within 5–10 business days to the same payment method used.",
    section3After:
      "After activation: refund after the start of use is made upon the user’s request and at the seller’s decision (e.g. when it is technically impossible to use the service due to the seller’s fault). In other cases refund may not be made — this is stated in the offer.",
    section3Request:
      "A refund request must be sent to the email or contacts specified on the website. Consideration period: up to 10 business days; refund period: up to 10 business days from the date of a positive decision. Refunds via ЮKassa are made in accordance with the payment system’s rules (to the same card/wallet details).",
    section4Title: "4. Offer and acceptance",
    section4Text:
      "This offer is published on the website. By paying for the service, the buyer accepts the terms of this offer. The link to the offer may also be provided in the bot at the time of payment.",
    backToHome: "Back to home",
    contactsLink: "Contacts and requisites",
  },
  ru: {
    title: "Оферта и возврат",
    subtitle: "Условия предоставления услуг и процедура возврата",
    consentNote: "Оплачивая услугу, вы соглашаетесь с условиями настоящей оферты.",
    section1Title: "1. Условия предоставления услуг",
    section1Text:
      "Услуга оказывается в электронной форме через Telegram-бота BizStruct. Для использования необходимо: аккаунт Telegram, подключение почты (Gmail и др.) и Notion по инструкциям бота. Доступ к функционалу после оплаты предоставляется в срок, указанный в оферте (например, автоматически после успешной оплаты или в течение 24 часов). Продавец обязуется обеспечивать работоспособность бота и приложений; при плановых работах — уведомлять пользователей по возможности (в боте или на сайте). Пользователь обязан соблюдать правила использования сервиса и не нарушать законодательство РФ и права третьих лиц.",
    section2Title: "2. Цифровой контент и отказ от покупки",
    section2Text:
      "Услуга представляет собой предоставление доступа к цифровому контенту (функционалу бота), не имеющему материального носителя. В соответствии с законодательством РФ покупатель вправе отказаться от исполнения договора до момента предоставления доступа (до факта активации подписки после оплаты). После предоставления доступа (активации подписки) отказ от цифрового контента возможен только с согласия продавца, если иное не установлено законом или договором.",
    section3Title: "3. Возврат денежных средств",
    section3Before:
      "До активации подписки: при отказе покупателя до момента активации доступа — полный возврат средств в течение 5–10 рабочих дней на тот же способ оплаты, которым была произведена оплата.",
    section3After:
      "После активации: возврат после начала использования услуги осуществляется по заявлению пользователя и решению продавца (например, при технической невозможности пользоваться услугой по вине продавца). В остальных случаях возврат может не производиться — это указано в оферте.",
    section3Request:
      "Заявление на возврат направляется на email или через контакты, указанные на сайте. Срок рассмотрения — до 10 рабочих дней; срок возврата денег — до 10 рабочих дней с момента положительного решения. При возврате через ЮKassa возврат производится по правилам платёжной системы (на те же реквизиты карты/кошелька).",
    section4Title: "4. Оферта и согласие",
    section4Text:
      "На сайте размещена оферта (договор оферты). Оплачивая услугу, вы соглашаетесь с условиями оферты. Ссылку на оферту можно дублировать в боте при оплате.",
    backToHome: "На главную",
    contactsLink: "Контакты и реквизиты",
  },
}

export default function OfferPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = offerTranslations[language]

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
            <p className="text-[#605A57] mt-3 text-sm font-medium border-l-2 border-[#37322f]/20 pl-3">
              {t.consentNote}
            </p>
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
            <ul className="text-[#605A57] text-sm leading-relaxed space-y-2 list-disc pl-5">
              <li>{t.section3Before}</li>
              <li>{t.section3After}</li>
              <li>{t.section3Request}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[#49423D] text-lg font-semibold">{t.section4Title}</h2>
            <p className="text-[#605A57] text-sm leading-relaxed">{t.section4Text}</p>
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
