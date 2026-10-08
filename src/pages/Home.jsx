import Header from '../components/Header.jsx'
import DepartmentCard from '../components/DepartmentCard.jsx'
import { pick } from '../utils/i18n.js'

export default function Home({ questions, onSelectDepartment, ...headerProps }) {
  const { ui, language } = headerProps

  return (
    <div className="flex h-full flex-col">
      <Header {...headerProps} />
      <main className="flex-1 overflow-y-auto px-10 pb-8 pt-4">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-extrabold text-navy-800">{ui.findYourWay}</h2>
          <p className="mt-3 text-2xl text-navy-700">{ui.tapDepartment}</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6">
          {questions.map((item) => (
            <DepartmentCard
              key={item.id}
              name={pick(item.department, language)}
              icon={item.icon}
              color={item.color}
              onClick={() => onSelectDepartment(item)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
