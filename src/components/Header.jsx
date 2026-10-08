import BackButton from './BackButton.jsx'
import LanguageSelector from './LanguageSelector.jsx'
import DateTime from './DateTime.jsx'

function Logo() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" aria-hidden="true">
      <rect x="17" y="3" width="14" height="42" rx="7" fill="#1d6fd6" />
      <rect x="3" y="17" width="42" height="14" rx="7" fill="#1d6fd6" />
      <path d="M24 24 C24 11 35 7 44 9 C44 20 35 26 24 24 Z" fill="#2bb673" />
    </svg>
  )
}

export default function Header({ ui, language, languages, onLanguageChange, onBack }) {
  const locale = languages.find((item) => item.code === language)?.locale

  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center px-8 py-3">
      <div className="flex justify-start">
        {onBack && <BackButton label={ui.back} onClick={onBack} />}
      </div>

      <div className="flex items-center gap-3">
        <Logo />
        <div>
          <h1 className="text-4xl font-extrabold leading-none tracking-wide text-navy-800">
            {ui.brandName}
          </h1>
          <p className="mt-1 text-lg font-medium text-navy-700">{ui.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-6">
        <div className="hidden xl:block">
          <DateTime locale={locale} />
        </div>
        <LanguageSelector languages={languages} language={language} onChange={onLanguageChange} />
      </div>
    </header>
  )
}
