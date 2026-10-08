import { useEffect, useState } from 'react'
import data from './data/hospitalQuestions.json'
import uiText from './data/uiText.json'
import Home from './pages/Home.jsx'
import Questions from './pages/Questions.jsx'
import Answer from './pages/Answer.jsx'
import { loadLanguage, saveLanguage } from './utils/i18n.js'

const questions = data.questions
const languages = uiText.languages
const languageCodes = languages.map((item) => item.code)

export default function App() {
  const [screen, setScreen] = useState('home')
  const [selected, setSelected] = useState(null)
  // Single language state for the whole app; every screen reads it from here.
  const [language, setLanguage] = useState(() =>
    loadLanguage(languageCodes, uiText.defaultLanguage)
  )

  useEffect(() => {
    saveLanguage(language)
  }, [language])

  const ui = { brandName: uiText.brandName, ...uiText.text[language] }

  const shared = {
    ui,
    language,
    languages,
    onLanguageChange: setLanguage,
  }

  const openQuestions = (item) => {
    setSelected(item)
    setScreen('questions')
  }

  const openAnswer = (item) => {
    setSelected(item)
    setScreen('answer')
  }

  if (screen === 'answer' && selected) {
    const number = questions.findIndex((item) => item.id === selected.id) + 1
    return (
      <Answer
        key={selected.id}
        item={selected}
        number={number}
        onBack={() => setScreen('questions')}
        {...shared}
      />
    )
  }

  if (screen === 'questions') {
    return (
      <Questions
        questions={questions}
        selectedId={selected ? selected.id : null}
        onSelectQuestion={openAnswer}
        onBack={() => setScreen('home')}
        {...shared}
      />
    )
  }

  return <Home questions={questions} onSelectDepartment={openQuestions} {...shared} />
}
