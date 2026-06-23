# Private Student Studio — design

**Date:** 2026-06-23
**Branch:** `studio-portal` (off `main`)
**Status:** v1 build

## Problem
Alex is starting private piano teaching in LA. He needs to (a) assign each
student weekly practice, (b) share it so the student/parent can see what to work
on, and (c) keep a per-student track record so he doesn't have to remember what
each student is doing. It must be low-effort for him, easy for families, and
reinforce a premium LA teaching brand.

## Decision
Build **branded private practice pages on `alexanderxhoja.com`**, with data
stored as files in the site repo. Chosen over:

| Option | Why not |
|---|---|
| Google Docs/Sheets | Not premium; back to manual entry |
| Login portal + database | Overkill at this stage; auth friction families dislike; ongoing maintenance |
| **Branded pages from repo files** ✅ | Premium, $0, no new services, fits the React/Vite/Vercel/git stack, Claude is the authoring layer, git history = automatic archive |

Phase-2 option (deferred): student "I practiced" check-in → streaks + a ping to
Alex, via a serverless function + EmailJS. No login.

## Architecture
- `src/studio/types.ts` — data model (`Student`, `Assignment`, `StudioTask`).
- `src/studio/students.ts` — the roster + seed data (Kaia, Samuel, Michael).
- `src/studio/studioUtils.ts` — date formatting + category → label/icon.
- `src/studio/StudioShell.tsx` — minimal studio chrome (no marketing nav).
- `src/studio/StudentPage.tsx` — `/studio/:slug`, the student-facing page.
- `src/studio/StudioIndex.tsx` — `/studio`, Alex's passcode-gated roster.
- `src/App.tsx` — routing split: `/studio/*` renders outside the public Layout.

## Privacy
- Student URLs carry a random suffix (`/studio/kaia-l4m2`) — not guessable.
- The roster (`/studio`) is behind a light client-side passcode
  (`VITE_STUDIO_PASSCODE`, default `studio2026`). Not real auth — fine for
  practice notes. True logins are phase-2 territory.
- Student-facing pages show first name only.

## Authoring workflow
After a lesson, Alex tells Claude the update; Claude prepends a new `Assignment`
to that student's array, commits, and pushes — live in ~90s. The prior week
drops into the student's progress history automatically.

## Build notes
- Built in an isolated git worktree (`alexanderxhoja-site-studio`) so the
  in-progress `la-final-qa` work is untouched.
- Matches the existing design system (Cormorant Garamond + Montserrat;
  ivory/charcoal/bronze; tracked-out labels, hairline rules).
