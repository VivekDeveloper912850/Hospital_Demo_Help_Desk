# DWAR MITRA - Hospital Information Help Desk (Demo)

Tablet/kiosk demo: Department -> Question -> Answer -> spoken answer (browser Text-to-Speech).
Supports English and Hindi (English | हिंदी selector in the header).

## Run
```
npm install
npm run dev
```
Tailwind CSS v3 config is included (`tailwind.config.js`, `postcss.config.js`).

## Change the hospital content (JSON only)
Edit `src/data/hospitalQuestions.json`. Each entry:

```json
{
  "id": 10,
  "icon": "pill",
  "color": "teal",
  "department": { "en": "...", "hi": "..." },
  "question":   { "en": "...", "hi": "..." },
  "answer":     { "en": "...", "hi": "..." },
  "floor":      { "en": "...", "hi": "..." },
  "room":       { "en": "...", "hi": "..." }
}
```
- `icon`: stethoscope, heart-pulse, accessibility, ear, clipboard-list, pill, flask, scan, siren (unknown -> generic icon)
- `color`: blue, pink, green, orange, indigo, teal, purple, red (unknown -> blue)
- The `floor` text should appear inside the `answer` text of the same language; it is shown in bold.

## Change screen labels / languages
Edit `src/data/uiText.json` (button and heading texts, language list).

## Structure
- `src/utils/speech.js` - all SpeechSynthesis logic (English en-IN, Hindi hi-IN, stops previous speech first)
- `src/utils/i18n.js` - reads en/hi values from JSON, remembers the language in localStorage
- `src/pages` - Home, Questions, Answer
- `src/components` - Header, LanguageSelector, DateTime, DepartmentCard, QuestionList, QuestionItem, LocationVisual, AnswerPanel, BackButton
