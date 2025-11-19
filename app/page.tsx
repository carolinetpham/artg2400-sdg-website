"use client";

import { motion } from "framer-motion";

const appointment = {
  title: "MassHealth-covered physical off campus",
  date: "Tue, Sept 9",
  time: "2:00 – 2:45 PM ET",
  location: "Fenway Health – 1340 Boylston St.",
  provider: "UHCS referral crew",
  prep: [
    "Snap a photo of your MassHealth ID card just in case.",
    "Upload the UHCS referral before you leave the dorm.",
    "Show up 10 minutes early so Fenway Health can check you in.",
  ],
};

const supportTeam = [
  {
    name: "Mateo Alvarez",
    focus: "ConnectorCare navigator",
    detail: "Checks your eligibility + scoops up tax credits so the bill drops fast.",
    status: "Online now",
  },
  {
    name: "Serena Kapoor",
    focus: "MassHealth case manager",
    detail: "Walks out-of-state + international students through MassHealth paperwork without the headache.",
    status: "Replies in ~5 min",
  },
  {
    name: "Dr. Theo Brooks",
    focus: "Behavioral health lead",
    detail: "Breaks down which therapy visits are covered and how to book the right person.",
    status: "Back after 3 PM",
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
            Next on your calendar
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
            UHCS doesn’t run yearly physicals on campus, so per{" "}
            <a
              href="https://uhcs.northeastern.edu/appointments/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              UHCS appointment guidance
            </a>
            , students book those with community clinics after a referral. MassHealth covers this one at $0, so just show up ready.
          </p>
          <div className="mt-6 rounded-2xl border bg-background/80 p-5">
            <p className="text-sm font-semibold text-foreground">What to bring</p>
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
                Your support crew
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                People who can jump in right now
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
