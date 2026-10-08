import {
  Stethoscope,
  HeartPulse,
  Accessibility,
  Ear,
  ClipboardList,
  Pill,
  FlaskConical,
  Scan,
  Siren,
  Building2,
} from 'lucide-react'

// The JSON "icon" and "color" strings are mapped to visuals here.
// Unknown values fall back to a generic icon / blue theme.
const ICONS = {
  stethoscope: Stethoscope,
  'heart-pulse': HeartPulse,
  accessibility: Accessibility,
  bone: Accessibility,
  ear: Ear,
  'clipboard-list': ClipboardList,
  pill: Pill,
  flask: FlaskConical,
  'test-tube': FlaskConical,
  scan: Scan,
  siren: Siren,
}

const THEMES = {
  blue: { soft: 'bg-blue-100', text: 'text-blue-600', solid: 'bg-blue-600' },
  pink: { soft: 'bg-pink-100', text: 'text-pink-600', solid: 'bg-pink-500' },
  green: { soft: 'bg-emerald-100', text: 'text-emerald-600', solid: 'bg-emerald-500' },
  orange: { soft: 'bg-orange-100', text: 'text-orange-500', solid: 'bg-orange-500' },
  indigo: { soft: 'bg-indigo-100', text: 'text-indigo-600', solid: 'bg-indigo-600' },
  teal: { soft: 'bg-teal-100', text: 'text-teal-600', solid: 'bg-teal-500' },
  purple: { soft: 'bg-purple-100', text: 'text-purple-600', solid: 'bg-purple-600' },
  red: { soft: 'bg-red-100', text: 'text-red-600', solid: 'bg-red-500' },
}

export function getDepartmentIcon(name) {
  return ICONS[name] || Building2
}

export function getDepartmentTheme(name) {
  return THEMES[name] || THEMES.blue
}
