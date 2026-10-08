import { ChevronRight } from 'lucide-react'
import { getDepartmentIcon, getDepartmentTheme } from '../utils/departmentStyle.js'

export default function DepartmentCard({ name, icon, color, onClick }) {
  const Icon = getDepartmentIcon(icon)
  const theme = getDepartmentTheme(color)

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-[112px] items-center gap-5 rounded-2xl bg-white/90 p-5 text-left shadow-md active:scale-95 active:bg-sky-100"
    >
      <div
        className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${theme.soft}`}
      >
        <Icon className={`h-10 w-10 ${theme.text}`} strokeWidth={2} />
      </div>
      <span className="flex-1 text-2xl font-bold leading-tight text-navy-900">{name}</span>
      <ChevronRight className="h-7 w-7 shrink-0 text-slate-400" />
    </button>
  )
}
