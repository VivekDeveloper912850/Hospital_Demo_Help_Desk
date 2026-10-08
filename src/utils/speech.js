// All text-to-speech logic lives here (browser Web Speech API, works offline
// when the device provides a local voice).

const synth = typeof window !== 'undefined' ? window.speechSynthesis : null

// App language code -> BCP-47 speech language.
const SPEECH_LANGS = {
  en: 'en-IN',
  hi: 'hi-IN',
}

let currentUtterance = null

export function isSpeechSupported() {
  return Boolean(synth) && typeof SpeechSynthesisUtterance !== 'undefined'
}

// Android sometimes reports "hi_IN" instead of "hi-IN".
function normalizeLang(lang) {
  return (lang || '').toLowerCase().replace('_', '-')
}

// Picks the best installed voice for the requested language without
// hardcoding any voice name. Returns null if nothing suitable exists.
function pickVoice(speechLang) {
  const voices = synth.getVoices()
  if (!voices.length) return null

  const target = normalizeLang(speechLang)
  const prefix = target.split('-')[0]

  const exact = voices.filter((v) => normalizeLang(v.lang) === target)
  const sameLanguage = voices.filter((v) => normalizeLang(v.lang).startsWith(prefix))

  return (
    exact.find((v) => v.localService) ||
    exact[0] ||
    sameLanguage.find((v) => v.localService) ||
    sameLanguage[0] ||
    null
  )
}

export function isSpeaking() {
  return Boolean(synth) && (synth.speaking || synth.pending)
}

export function stopSpeech() {
  if (!synth) return
  if (currentUtterance) {
    // Detach handlers so a cancelled utterance does not report "finished".
    currentUtterance.onstart = null
    currentUtterance.onend = null
    currentUtterance.onerror = null
    currentUtterance = null
  }
  synth.cancel()
}

export function speakText(text, language = 'en', { onStart, onEnd } = {}) {
  if (!isSpeechSupported() || !text) {
    if (onEnd) onEnd()
    return
  }

  // Always stop previous speech first so two outputs never overlap.
  stopSpeech()

  const speechLang = SPEECH_LANGS[language] || language
  const utterance = new SpeechSynthesisUtterance(text)
  const voice = pickVoice(speechLang)

  // Setting lang lets the device choose a matching voice even when
  // no voice object was found; otherwise it uses the device default.
  utterance.lang = voice ? voice.lang : speechLang
  if (voice) utterance.voice = voice
  utterance.rate = 0.9
  utterance.pitch = 1
  utterance.volume = 1

  utterance.onstart = () => {
    if (onStart) onStart()
  }
  const finish = () => {
    if (currentUtterance === utterance) currentUtterance = null
    if (onEnd) onEnd()
  }
  utterance.onend = finish
  utterance.onerror = finish

  currentUtterance = utterance
  synth.speak(utterance)
}

// Some browsers load voices asynchronously; touching getVoices early warms them up.
if (synth) {
  synth.getVoices()
  if (typeof synth.addEventListener === 'function') {
    synth.addEventListener('voiceschanged', () => synth.getVoices())
  }
}
