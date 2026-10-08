import { ArrowLeft } from 'lucide-react'

export default function BackButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 py-2 text-xl font-semibold text-navy-900 shadow active:scale-95"
    >
      <ArrowLeft className="h-6 w-6" />
      {label}
    </button>
  )
}
