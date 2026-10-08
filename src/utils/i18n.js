// Small helpers for reading bilingual JSON values and remembering the language.

const STORAGE_KEY = 'dwar-mitra-language'

// value can be { en: "...", hi: "..." } or a plain string.
// Falls back to English, then to an empty string, so missing translations never crash the UI.
export function pick(value, language) {
  if (value && typeof value === 'object') {
    return value[language] ?? value.en ?? ''
  }
  return value ?? ''
}

export function loadLanguage(supportedCodes, defaultCode) {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && supportedCodes.includes(saved)) return saved
  } catch {
    // localStorage can be unavailable; fall through to the default.
  }
  return defaultCode
}

export function saveLanguage(code) {
  try {
    window.localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Ignore storage errors; remembering the language is optional.
  }
}
