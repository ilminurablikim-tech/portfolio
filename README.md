# Ilminur Ablikim — portfolio

Personal academic website built with Next.js (App Router), TypeScript and Tailwind CSS.

## Edit the content

Everything you see on the page lives in [`data/portfolio.ts`](data/portfolio.ts):
name, education, experience, skills, fun facts, and your LinkedIn / GitHub links
(a folder only appears on the page once its URL is filled in).

The CV that the "CV" button opens is [`public/Ilminur_Ablikim_CV.pdf`](public/Ilminur_Ablikim_CV.pdf).
The photo is [`public/img/portrait.jpg`](public/img/portrait.jpg). Replace the file, keep the name.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub, then import the repository at https://vercel.com/new.
Vercel builds it with no configuration and gives you a public `*.vercel.app` link.
