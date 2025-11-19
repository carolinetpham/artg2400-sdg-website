"use client";

import { motion } from "framer-motion";

const studentPlan = {
  name: "NEU Student Health Plan",
  policy: "Policy #: SHP-2025-NEU",
  premium: "$2,849 / academic year",
  term: "Coverage: Sept 1, 2025 – Aug 31, 2026",
  includes: [
    "Unlimited annual + lifetime medical benefits",
    "No limits on prescription coverage",
    "Stay on parent/guardian plan until age 26 (if comparable)",
  ],
};

const reformBenefits = [
  {
    text: "MassHealth (Medicaid) now offers no- or low-cost coverage for eligible students.",
    link: "https://www.mass.gov/orgs/masshealth",
  },
  {
    text: "Tax credits can apply every month when you enroll via the Massachusetts Health Connector.",
    link: "https://www.mahealthconnector.org/taxes/aptc-and-your-taxes",
  },
  {
    text: "ConnectorCare plans keep premiums low with $0 deductibles and limited co-pays.",
    link: "https://www.mahealthconnector.org/connectorcare-plans",
  },
  {
    text: "You can apply online to check MassHealth, tax credit, or ConnectorCare eligibility in one place.",
    link: "https://www.mahealthconnector.org/help-center-answers-category/eligibility",
  },
];

const confusionPoints = [
  "Enrollment requires navigating eligibility rules, deadlines, and in-network lists.",
  "Out-of-state and international students may be unfamiliar with MassHealth, ConnectorCare, or ACA language.",
  "Even when covered, it’s unclear how to book care, find specialists, or understand what therapy/dental/urgent services cost.",
  "Lower-income and first-gen students often lack guidance or familiarity with the process.",
];

const contacts = [
  {
    title: "CampusCare Coordinators",
    info: "Chat 24/7 in-app for personalized navigation and support",
    link: "/chat",
  },
  {
    title: "Health Connector Help Center",
    info: "MassHealth, ConnectorCare, and premium tax credit questions",
    link: "https://www.mahealthconnector.org/",
  },
  {
    title: "MassHealth Enrollment Center",
    info: "Phone: 800-841-2900 • Use for status checks or document uploads",
    link: "tel:18008412900",
  },
  {
    title: "UHCS Appointment Desk",
    info: "Schedule or follow up on referrals + on-campus services",
    link: "https://uhcs.northeastern.edu/appointments/",
  },
  {
    title: "NEU Student Health Plan Office",
    info: "Billing, waivers, and proof-of-coverage letters",
    link: "mailto:NUSHP@northeastern.edu",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.35, delay },
});

export default function InsurancePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12"
    >
      <motion.div {...fadeIn()}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Insurance
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Your coverage, context, and next steps in one place.
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Massachusetts requires every full-time and part-time degree-seeking
          student to participate in a qualifying plan. Use this page like your
          card plus a mini knowledge base.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.article
          {...fadeIn(0.05)}
          className="rounded-3xl border bg-background p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Your insurance information
          </p>
          <h2 className="mt-3 text-2xl font-semibold">{studentPlan.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{studentPlan.policy}</p>
          <p className="mt-2 text-lg font-semibold">{studentPlan.premium}</p>
          <p className="text-sm text-muted-foreground">{studentPlan.term}</p>
          <ul className="mt-4 list-none space-y-2 text-sm text-muted-foreground">
            {studentPlan.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="text-base leading-none text-primary">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full border border-border px-4 py-2 text-sm font-semibold">
              Download ID card
            </button>
            <button className="rounded-full border border-border px-4 py-2 text-sm font-semibold">
              Request proof of coverage
            </button>
          </div>
        </motion.article>

        <motion.article
          {...fadeIn(0.1)}
          className="rounded-3xl border bg-muted/15 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Add insurance
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Bring another plan</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload documentation for a parent/guardian plan or employer plan so
            we can confirm it meets Massachusetts’ comparable coverage standard.
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p>We check:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Hospital + physician coverage in Massachusetts</li>
              <li>Prescription + mental health services</li>
              <li>Deductible + out-of-pocket maximums</li>
            </ul>
          </div>
          <button className="mt-5 w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md">
            Upload coverage proof
          </button>
        </motion.article>
      </div>

      <motion.article {...fadeIn(0.15)} className="rounded-3xl border bg-background p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          More information
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          National health care reform + student benefits
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The Affordable Care Act (ACA) opened multiple low-cost paths:
        </p>
        <ul className="mt-4 list-none space-y-3 text-sm text-muted-foreground">
          {reformBenefits.map((item) => (
            <li key={item.text} className="flex items-start gap-2">
              <span aria-hidden className="text-base leading-none text-primary">
                •
              </span>
              <span>
                {item.text}{" "}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block break-words text-primary underline underline-offset-4"
                >
                  Learn more
                </a>
              </span>
            </li>
          ))}
        </ul>
      </motion.article>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.article
          {...fadeIn(0.18)}
          className="rounded-3xl border bg-muted/15 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Common pain points
          </p>
          <h2 className="mt-3 text-xl font-semibold">
            Why insurance still feels confusing
          </h2>
          <ul className="mt-4 list-none space-y-3 text-sm text-muted-foreground">
            {confusionPoints.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="text-base leading-none text-primary">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Our goal ties to SDG 3.8—advancing universal health coverage by
            making enrollment, usage, and navigation understandable.
          </p>
        </motion.article>

        <motion.article {...fadeIn(0.22)} className="rounded-3xl border bg-background p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Still confused?
          </p>
          <h2 className="mt-3 text-xl font-semibold">Talk to someone</h2>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            {contacts.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p>{item.info}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block break-words text-primary underline underline-offset-4"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </motion.section>
  );
}
