# Preetham Annadanam — Portfolio (Next.js + Tailwind CSS)

A production-style Next.js 14 (App Router) build of the portfolio.

## Run locally
```bash
npm install
npm run dev
```
Visit portfolio-iota-five-92.vercel.app

## Build for production
```bash
npm run build
npm run start
```

## Deploy
This is ready to deploy on **Vercel** (zero config — just connect the repo)
or any Node host that supports Next.js (Netlify, Render, Railway, etc.).

## Structure
```
app/            # App Router: layout, page, global styles
components/     # All UI sections (Hero, About, Skills, Projects, Track, Contact...)
lib/content.js  # All portfolio content — edit this file to update text/projects
```