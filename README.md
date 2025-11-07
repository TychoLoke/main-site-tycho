# Tycho Loke main site

A modernised React/Next.js rebuild of tycholoke.com optimised for deployment on Vercel. The site showcases Tycho Loke's training, speaking, and consulting services with richer storytelling, data-driven content sections, and improved accessibility.

## Tech stack

- [Next.js 14](https://nextjs.org/) with the App Router
- React 18 and TypeScript
- CSS custom properties and utility classes for styling
- Deployed on Vercel (serverless-ready)

## Getting started

```bash
npm install
npm run dev
```

The site will be available at http://localhost:3000.

## Available scripts

| Script       | Description                           |
| ------------ | ------------------------------------- |
| `npm run dev`   | Starts the local development server. |
| `npm run build` | Creates an optimised production build. |
| `npm run start` | Serves the production build locally. |
| `npm run lint`  | Runs Next.js ESLint checks.           |

## Project structure

```
app/             # App Router pages and layouts
components/      # Shared UI components
data/            # Structured content for services, events, etc.
public/          # Static assets
```

## Deployment

The project is ready for Vercel. Connect the repository to Vercel, set the framework preset to **Next.js**, and deploy. No additional build configuration is required.
