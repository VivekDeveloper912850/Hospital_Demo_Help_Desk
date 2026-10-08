import { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import AnswerPanel from '../components/AnswerPanel.jsx'
import LocationVisual from '../components/LocationVisual.jsx'
import { speakText, stopSpeech, isSpeechSupported } from '../utils/speech.js'
import { pick } from '../utils/i18n.js'

export default function Answer({ item, number, ...headerProps }) {
  const { ui, language } = headerProps
  const [speaking, setSpeaking] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const supported = isSpeechSupported()

  const answerText = pick(item.answer, language)
  const floor = pick(item.floor, language)

  const play = useCallback(() => {
    setSpeaking(true)
    speakText(answerText, language, {
      onEnd: () => {
        setSpeaking(false)
        setHasPlayed(true)
      },
    })
  }, [answerText, language])

  // Speak automatically when the answer opens or the language changes.
  // The cleanup stops any previous speech before the next one starts.
  useEffect(() => {
    setHasPlayed(false)
    play()
    return () => stopSpeech()
  }, [play])

  return (
    <div className="flex h-full flex-col">
      <Header {...headerProps} />
      <main className="flex flex-1 flex-col overflow-y-auto px-10 pb-6">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col overflow-hidden rounded-2xl bg-white/70 shadow-lg">
          <div className="flex items-center gap-5 bg-navy-800 px-6 py-3 text-white">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-extrabold text-navy-800">
              {number}
            </span>
            <h2 className="text-3xl font-bold">{pick(item.question, language)}</h2>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-5 p-5">
            <LocationVisual
              department={pick(item.department, language)}
              icon={item.icon}
              color={item.color}
              floor={floor}
              room={pick(item.room, language)}
            />
            <AnswerPanel
              ui={ui}
              answer={answerText}
              floor={floor}
              speaking={speaking}
              hasPlayed={hasPlayed}
              supported={supported}
              onListen={play}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
