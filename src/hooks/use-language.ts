import { useEffect, useState } from 'react'

type Language = 'cs' | 'vi'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'vi'
    }
    return 'vi'
  })

  const setLanguageValue = (language: Language) => {
    localStorage.setItem('language', language)
    setLanguage(language)
    // Auto refresh page when language changes
    window.location.reload()
  }

  return {
    language,
    setLanguage: setLanguageValue,
  }
}