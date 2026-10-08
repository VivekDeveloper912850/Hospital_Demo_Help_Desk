export default function LanguageSelector({ languages, language, onChange }) {
  return (
    <div className="flex rounded-full bg-white p-1 shadow">
      {languages.map((item) => {
        const active = item.code === language
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => onChange(item.code)}
            aria-pressed={active}
            className={`min-h-[44px] rounded-full px-5 text-lg font-bold active:scale-95 ${
              active ? 'bg-navy-800 text-white' : 'text-navy-800'
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
