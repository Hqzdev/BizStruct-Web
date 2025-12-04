// Language utility functions
export type Language = "en" | "ru"

const LANGUAGE_KEY = "bizstruct-language"

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en"
  const stored = localStorage.getItem(LANGUAGE_KEY)
  return stored === "ru" || stored === "en" ? stored : "en"
}

export function setStoredLanguage(language: Language): void {
  if (typeof window === "undefined") return
  localStorage.setItem(LANGUAGE_KEY, language)
}

