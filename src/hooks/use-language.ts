import { useEffect, useState } from 'react'

type Language = 'cs' | 'vi'

const detectDeviceLanguage = (): Language => {
  if (typeof window === 'undefined') return 'vi'
  
  const browserLanguage = navigator.language || navigator.languages?.[0] || 'vi'
  const languageCode = browserLanguage.toLowerCase()
  
  // Check for Czech language variants
  if (languageCode.startsWith('cs') || languageCode === 'cs-cz') {
    return 'cs'
  }
  
  // Check for Vietnamese language variants
  if (languageCode.startsWith('vi') || languageCode === 'vi-vn') {
    return 'vi'
  }
  
  // Default to Vietnamese for all other languages
  return 'vi'
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      // First check if user has a saved preference
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage) {
        return savedLanguage
      }
      // If no saved preference, detect from device language
      return detectDeviceLanguage()
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