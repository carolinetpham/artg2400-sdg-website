"use client";

import { motion } from "framer-motion";

const appointment = {
  title: "ConnectorCare physical (external)",
  date: "Tue, Sept 9",
  time: "2:00 – 2:45 PM ET",
  location: "Fenway Health – 1340 Boylston St.",
  provider: "Care team routed via UHCS referral",
  prep: [
    "Bring NEU Student Health Plan card or digital copy",
    "Upload UHCS referral confirmation for external provider",
    "Arrive 10 minutes early to check in with Fenway Health front desk",
  ],
};

const supportTeam = [
  {
    name: "Mateo Alvarez",
    focus: "ConnectorCare navigator",
    detail: "Checks eligibility + tax credits for low or no-cost plans.",
    status: "Online now",
  },
  {
    name: "Serena Kapoor",
    focus: "MassHealth case manager",
    detail: "Helps out-of-state & intl. students enroll or renew coverage.",
    status: "Typically replies in 5 min",
  },
  {
    name: "Dr. Theo Brooks",
    focus: "Behavioral health lead",
    detail: "Explains which therapy + mental health visits are covered.",
    status: "Available after 3 PM",
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, delay },
});

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-12"
    >
      <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
        <motion.article {...fadeInUp(0)} className="rounded-3xl border bg-muted/20 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Upcoming appointment
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-foreground">
            {appointment.title}
          </h1>
          <dl className="mt-4 space-y-1 text-muted-foreground">
            <div className="flex items-center gap-2 text-base font-medium text-foreground">
              <span>{appointment.date}</span>
              <span>•</span>
              <span>{appointment.time}</span>
            </div>
            <div>{appointment.location}</div>
            <div>Lead clinician: {appointment.provider}</div>
          </dl>
          <p className="mt-3 text-sm text-muted-foreground">
            UHCS does not complete annual physicals on-site; per{" "}
            <a
              href="https://uhcs.northeastern.edu/appointments/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              UHCS appointment guidance
            </a>
            , students schedule those with community providers after receiving a
            referral.
          </p>
          <div className="mt-6 rounded-2xl border bg-background/80 p-5">
            <p className="text-sm font-semibold text-foreground">Prep checklist</p>
            <ul className="mt-3 list-none space-y-2 text-sm text-muted-foreground">
              {appointment.prep.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="text-base leading-none text-primary">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.article
          {...fadeInUp(0.05)}
          className="rounded-3xl border bg-background p-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Your support team
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                People tied to your benefits
              </h2>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Live roster
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {supportTeam.map((person, index) => (
              <motion.div
                key={person.name}
                {...fadeInUp(0.08 + index * 0.03)}
                className="rounded-2xl border bg-muted/40 p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold">{person.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {person.focus}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary">
                    {person.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {person.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
