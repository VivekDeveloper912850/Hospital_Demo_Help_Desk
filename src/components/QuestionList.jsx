import QuestionItem from './QuestionItem.jsx'
import { pick } from '../utils/i18n.js'

export default function QuestionList({ questions, language, selectedId, onSelect }) {
  return (
    <div className="space-y-2">
      {questions.map((item, index) => (
        <QuestionItem
          key={item.id}
          number={index + 1}
          question={pick(item.question, language)}
          color={item.color}
          highlighted={item.id === selectedId}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  )
}
