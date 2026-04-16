# Portfolio Foundation

A fast, no-build starter for a personal portfolio site. This baseline helps you showcase project highlights with clear storytelling and clean technical foundations.

## Why this setup

- **Simple stack:** HTML + CSS + vanilla JS.
- **Performance-first:** light JavaScript, semantic structure, and reduced-motion support.
- **Reflow-aware defaults:** card rendering is batched, cards are isolated with CSS containment, and expensive layout reads are avoided in runtime code.

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

## Reflow checklist for your next commits

1. Keep read/write phases separate (read layout first, then write DOM in one batch).
2. Prefer `transform`/`opacity` for interactions instead of `top/left/width/height` changes.
3. Avoid measuring (`offsetWidth`, `getBoundingClientRect`, `getComputedStyle`) inside loops.
4. Add explicit dimensions for any images/video to prevent layout shifts.
5. Use `content-visibility` and `contain` on heavy below-the-fold sections.

## Next steps

1. Replace placeholder contact info and name in `index.html`.
2. Update project entries in `content/projects.json` with real outcomes and tradeoffs.
3. Add one deep-dive project page that includes constraints, performance baseline, and what you optimized.
4. Add CI checks (HTML validation + Lighthouse CI budget).
