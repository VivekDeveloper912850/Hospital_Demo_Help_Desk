import Header from '../components/Header.jsx'
import QuestionList from '../components/QuestionList.jsx'

export default function Questions({ questions, selectedId, onSelectQuestion, ...headerProps }) {
  const { ui, language } = headerProps

  return (
    <div className="flex h-full flex-col">
      <Header {...headerProps} />
      <main className="flex-1 overflow-y-auto px-10 pb-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white/70 shadow-lg">
          <div className="bg-navy-800 px-6 py-4 text-center text-white">
            <h2 className="text-3xl font-bold">{ui.faqTitle}</h2>
            <p className="mt-1 text-lg text-sky-200">{ui.faqSubtitle}</p>
          </div>

          <div className="p-4">
            <QuestionList
              questions={questions}
              language={language}
              selectedId={selectedId}
              onSelect={onSelectQuestion}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
