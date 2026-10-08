import { ChevronRight } from 'lucide-react'
import { getDepartmentTheme } from '../utils/departmentStyle.js'

export default function QuestionItem({ number, question, color, highlighted, onClick }) {
  const theme = getDepartmentTheme(color)

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[58px] w-full items-center gap-5 rounded-xl bg-white px-4 py-2 text-left shadow active:scale-[0.99] active:bg-sky-100 ${
        highlighted ? 'ring-4 ring-care-500' : ''
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white ${theme.solid}`}
      >
        {number}
      </span>
      <span className="flex-1 text-2xl font-semibold text-navy-900">{question}</span>
      <ChevronRight className="h-7 w-7 shrink-0 text-slate-400" />
    </button>
  )
}
