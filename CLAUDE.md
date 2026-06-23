# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Next.js 16** (`16.2.6`) with **React 19** and **Tailwind CSS v4**. Per AGENTS.md, this is a newer Next.js than your training data — consult `node_modules/next/dist/docs/` before writing framework code.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config, next/core-web-vitals + next/typescript)
```

There is no test suite.

## What this is

Marketing/lead-gen single-page site for **Mane Training Center**, a basketball training facility. The only goal is conversion (bookings + inquiries). Business context, brand color tokens, and open content questions live in `PROJECT_BRIEF.md` — read it before making product/content decisions.

## Architecture

- **Single page, section components.** `src/app/page.tsx` renders the whole site by stacking section components from `src/components/` in order (Navbar → Hero → About → Programs → Pricing → Scheduling → Contact → Footer). Each section is self-contained and owns its own copy/markup. Navbar links are in-page anchors (`#about`, `#programs`, …) that must match the `id` on each `<section>`.
- **Every section component is a Client Component** (`"use client"`) because they animate. The shared entrance animation is a `fadeUp` Framer Motion variants object (duplicated per file) driven by `whileInView` + a `custom={i}` stagger index — follow that existing pattern when adding sections.
- **Design tokens live in CSS, not `tailwind.config`.** Tailwind v4 is configured via `@theme inline` in `src/app/globals.css`. Custom colors (`red`, `orange`, `charcoal`, `dark-gray`, `light-gray`, `white-pure`, etc.) and fonts are defined there, so utilities like `bg-charcoal`, `text-red`, `border-white/[0.06]` work directly. Add new colors there, not in a config file.
- **Fonts** are loaded with `next/font/google` (Barlow + Barlow Condensed) in `src/app/layout.tsx` and exposed as `--font-body` / `--font-display`. Use the `font-display` utility (Barlow Condensed) for the uppercase heading/label style seen across sections; body text uses the default.
- **Path alias:** `@/*` → `src/*`.

## External integrations (no backend)

The site has no server/API routes. Two third-party services handle dynamic behavior client-side:

- **Booking** — `Scheduling.tsx` embeds an Acuity iframe (`https://manetrainingcenter.as.me/`).
- **Contact form** — `Contact.tsx` POSTs via `fetch` to `formsubmit.co` (delivers to `manetrainingcenter@gmail.com`), with a `mailto:` fallback on failure.
