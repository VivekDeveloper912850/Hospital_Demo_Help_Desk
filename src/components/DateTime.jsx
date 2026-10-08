import { useEffect, useState } from 'react'

export default function DateTime({ locale }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(timer)
  }, [])

  const time = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString(locale, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="text-right">
      <p className="text-2xl font-bold leading-tight text-navy-900">{time}</p>
      <p className="text-sm text-navy-700">{date}</p>
    </div>
  )
}
