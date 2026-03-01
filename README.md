# v-education

**v-education** is a lightweight Single Page Application (SPA) built with Vanilla JavaScript.

It provides video-based exam preparation content and demonstrates a custom routing system, modular page structure, and a separated data layer architecture.

---

## Features

- Custom client-side router (pattern-based)
- Dynamic route parameters (`:subjectId`, `:lessonId`)
- Modular page structure
- Separated data layer (dataService)
- Defensive rendering (404 handling, safe data access)
- No frameworks

---

## Architecture
index.html → App layout
main.js → Entry point
core/router.js → Routing system
pages/ → Page modules
components/ → Reusable UI blocks
data/ → Data + dataService


---

## Routes

- `/`
- `/subject/:subjectId`
- `/subject/:subjectId/lesson/:lessonId`

---

## Tech Stack

- Vanilla JavaScript (ES Modules)
- HTML5
- CSS3
- History API

---

## Run Locally

```bash
npm install
npm run dev

Purpose

This project is built as part of a Full-Stack learning roadmap to deeply understand SPA architecture without using frameworks.