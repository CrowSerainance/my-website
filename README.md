# Portfolio Foundation

A fast, no-build starter for a personal portfolio site. This baseline helps you showcase project highlights with clear storytelling and clean technical foundations.

## Why this setup

- **Simple stack:** HTML + CSS + vanilla JS.
- **Performance-first:** light JavaScript, semantic structure, and reduced-motion support.
- **Credibility-first content:** project data is separated into `content/projects.json` so you can focus on writing high-signal case-study summaries.

## Project structure

```text
.
├─ index.html
├─ styles.css
├─ script.js
├─ content/
│  └─ projects.json
├─ .editorconfig
└─ .gitignore
```

## Run locally

Open `index.html` directly, or serve with any local server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Next steps

1. Replace placeholder contact info and name in `index.html`.
2. Update project entries in `content/projects.json` with real outcomes and tradeoffs.
3. Add one section per project in a `/projects/` folder for deeper writeups.
4. Add basic CI checks later (HTML/CSS lint, link checker).
