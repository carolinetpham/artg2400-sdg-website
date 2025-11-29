# CampusCare

CampusCare is a student-first health coverage companion for Northeastern. It keeps the insurance mandate, MassHealth/ConnectorCare benefits, and UHCS workflows in one place so students can book the right care, waive the campus fee, and talk to a real human anytime.

## Product snapshot
- Appointment booking with live prep notes and confirmation codes (`/appointments`).
- 24/7 coordinator roster and chat simulation to show the service promise (`/chat`).
- Insurance wallet that compares MassHealth vs. the NEU SHP and collects proof of coverage (`/insurance`).
- Guides that break down steps to waive fees, apply for aid, and pick providers (`/guides`).
- Sticky navigation + responsive layout so every flow stays reachable on mobile.

## Why it matters
- Massachusetts + NEU require comparable coverage; CampusCare lowers the $2,849 SHP burden by steering students to MassHealth/ConnectorCare.
- Reduces friction for out-of-state and international students by translating benefits into plain language.
- Anchored to SDG 3.8: improving access to affordable health services.

## Tech stack
- Next.js 16 + React 19 with the App Router.
- TypeScript with modern linting (`eslint` via `next lint`).
- Tailwind CSS v4 for styling, Framer Motion for motion, Radix Navigation Menu for nav.
- Icons via `lucide-react`; utility helpers with `clsx` and `class-variance-authority`.

## Getting started
- Prereqs: Node 18+ and npm.
- Install: `npm install`
- Run dev server: `npm run dev` then open http://localhost:3000
- Build for production: `npm run build` (serve with `npm start`).
- Lint: `npm run lint`

## Repo layout
- `app/` — route groups for home, appointments, chat, guides, insurance, profile/sign-in.
- `components/` — shared UI like the sticky `SiteHeader` and navigation menu.
- `lib/` — utilities such as class name helpers.
- `public/` — static assets (logo, favicon, etc.).

## Content model
- Data is currently static and seeded for demos (appointments, coordinators, insurance copy). Replace with API calls or CMS content when wiring to real services.
- External links point to UHCS, MassHealth, and Massachusetts Health Connector resources for accuracy.
- Upload interactions on `/insurance` are client-side only; connect to secure storage before production use.

## Roadmap ideas
- Real chat + handoff to live coordinators (SMS/web chat integration).
- Authenticated profile with saved plans, waivers, and appointment history.
- Real-time appointment inventory from partner clinics + calendar exports.
- Localization and accessibility refinements from usability testing.

## Contributing
1. Create a branch, make changes, and add tests or storybook entries if relevant.
2. Run `npm run lint` and `npm run build` before opening a PR.
3. Document new flows or data contracts in this README to keep the product story clear.

## Notes for reviewers
- This is a course project pointed at a real-world product direction. Messaging is student-focused and Massachusetts-specific; adjust copy if targeting other campuses or states.
