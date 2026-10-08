import { ArrowUp } from 'lucide-react'
import { getDepartmentIcon, getDepartmentTheme } from '../utils/departmentStyle.js'

// Illustrated hospital corridor with a hanging direction sign.
// Text on the sign comes from the JSON data of the selected question.
export default function LocationVisual({ department, icon, color, floor, room }) {
  const Icon = getDepartmentIcon(icon)
  const theme = getDepartmentTheme(color)

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden rounded-xl bg-sky-100 shadow">
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* ceiling, walls, floor */}
        <polygon points="0,0 400,0 260,95 140,95" fill="#f0f6fb" />
        <polygon points="0,0 140,95 140,205 0,300" fill="#cfe0ee" />
        <polygon points="400,0 260,95 260,205 400,300" fill="#c3d7e8" />
        <polygon points="0,300 400,300 260,205 140,205" fill="#e3d3b8" />
        <rect x="140" y="95" width="120" height="110" fill="#f6f9fc" />
        <rect x="180" y="120" width="40" height="85" fill="#7aa5c8" />
        <rect x="186" y="128" width="28" height="30" fill="#bcd6ea" />

        {/* ceiling lights */}
        <rect x="165" y="10" width="70" height="7" rx="3" fill="#ffffff" />
        <rect x="178" y="42" width="44" height="5" rx="2" fill="#ffffff" />
        <rect x="187" y="68" width="26" height="4" rx="2" fill="#ffffff" />

        {/* left doors */}
        <polygon points="30,72 60,84 60,259 30,280" fill="#8fb4d3" />
        <polygon points="85,95 110,105 110,225 85,242" fill="#8fb4d3" />
        {/* right doors */}
        <polygon points="370,72 340,84 340,259 370,280" fill="#86abcb" />
        <polygon points="315,95 290,105 290,225 315,242" fill="#86abcb" />

        {/* floor guide line */}
        <polygon points="196,300 204,300 202,205 198,205" fill="#2bb673" opacity="0.55" />

        {/* waiting chairs */}
        <rect x="318" y="238" width="62" height="16" rx="4" fill="#2f6f9f" />
        <rect x="322" y="224" width="54" height="16" rx="4" fill="#3c82b6" />
        <rect x="318" y="262" width="62" height="16" rx="4" fill="#2f6f9f" />
        <rect x="322" y="248" width="54" height="16" rx="4" fill="#3c82b6" />

        {/* plant */}
        <rect x="14" y="262" width="26" height="30" rx="4" fill="#9a6b43" />
        <ellipse cx="27" cy="250" rx="22" ry="16" fill="#3e9b57" />
        <ellipse cx="18" cy="236" rx="10" ry="16" fill="#4fb36a" />
        <ellipse cx="38" cy="238" rx="9" ry="15" fill="#2f8a4c" />
      </svg>

      <div className="absolute left-1/2 top-4 w-[68%] -translate-x-1/2 overflow-hidden rounded-lg shadow-lg">
        <div className="flex items-center justify-between gap-3 bg-navy-900 px-4 py-2 text-white">
          <div className="flex items-center gap-2">
            <Icon className={`h-6 w-6 ${theme.text}`} />
            <span className="text-xl font-bold leading-tight">{department}</span>
          </div>
          <ArrowUp className="h-7 w-7 shrink-0" />
        </div>
        <div className="bg-slate-200/95 px-4 py-2 text-center text-lg font-semibold leading-tight text-navy-900">
          <p>{room}</p>
          <p>{floor}</p>
        </div>
      </div>
    </div>
  )
}
