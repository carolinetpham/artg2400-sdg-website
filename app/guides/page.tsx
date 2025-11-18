"use client";

import { motion } from "framer-motion";

const overviewCards = [
  {
    title: "Why CampusCare exists",
    copy: "Massachusetts + Northeastern require active insurance. CampusCare surfaces what plan you’re on, who can help, and the next steps so nothing gets lost.",
  },
  {
    title: "What happens on each page",
    copy: "Home shows appointments + team, 24/7 chat lists live people, Insurance stores cards + links, and this Guides page walks you through every workflow.",
  },
];

const appointmentRequests = [
  {
    label: "Dental",
    note: "UHCS coordinates referrals to community dentists for cleanings, fillings, and orthodontic concerns.",
    steps: [
      "Select “Dental” on the UHCS appointment form.",
      "Share insurance info + preferred locations (Fenway Health, Atrius, etc.).",
      "Wait for UHCS to confirm your referral and provide intake paperwork.",
    ],
    href: "https://uhcs.northeastern.edu/appointments/",
  },
  {
    label: "Medical (non-emergency)",
    note: "Use this for annual physicals, chronic care, specialist follow ups, or lab orders.",
    steps: [
      "Explain symptoms/needs plus available times.",
      "Note if you need a physical required by co-op/employer.",
      "UHCS triage nurses reply with same-day options or external partners.",
    ],
    href: "https://uhcs.northeastern.edu/appointments/",
  },
  {
    label: "Mental health",
    note: "Get matched with UHCS behavioral clinicians or trusted external therapists.",
    steps: [
      "Choose whether you want counseling, psychiatry, or a specific language.",
      "Mention existing diagnoses/medications so care is continuous.",
      "Expect a coordinator follow-up within one business day.",
    ],
    href: "https://uhcs.northeastern.edu/appointments/",
  },
];

const timelineSteps = [
  {
    title: "Step 1 · Confirm the mandate",
    summary:
      "Massachusetts law says every degree-seeking student must carry comparable insurance or buy the NEU Student Health Plan ($2,849/year). Start by checking where you stand.",
    actions: [
      {
        label: "UHCS insurance overview",
        href: "https://uhcs.northeastern.edu/insurance/",
        description: "Read what SHP covers + how to submit a waiver if you already have coverage.",
      },
      {
        label: "Comparable coverage checklist",
        href: "https://uhcs.northeastern.edu/appointments/",
        description: "Upload policy docs so UHCS can verify your external plan.",
      },
    ],
  },
  {
    title: "Step 2 · Explore lower-cost options",
    summary:
      "ConnectorCare, MassHealth, and ACA tax credits can reduce premiums to low or no cost. Everything below explains eligibility, documents, and timelines.",
    actions: [
      {
        label: "Massachusetts Health Connector",
        href: "https://www.mahealthconnector.org/",
        description:
          "Compare ConnectorCare plans, see monthly costs, and learn which carriers waive deductibles. Have your income, residency info, and tax filing status ready.",
      },
      {
        label: "Apply for MassHealth",
        href: "https://www.mass.gov/how-to/apply-for-masshealth-the-health-safety-net-or-the-childrens-medical-security-plan",
        description:
          "Gather proof of identity, residency, income, immigration status (if applicable), and Social Security numbers. The official application lets you start online and upload docs; we summarize every field here so you can prep before opening the form.",
      },
    ],
  },
  {
    title: "Step 3 · Book the right appointment",
    summary:
      "UHCS handles triage, vaccines, and urgent needs but sends students to community clinics for physicals or continuing care.",
    actions: [
      {
        label: "UHCS appointment request",
        href: "https://uhcs.northeastern.edu/appointments/",
        description: "Tell UHCS what you need—they’ll confirm next steps or provide referrals.",
      },
      {
        label: "Fenway Health appointments",
        href: "https://fenwayhealth.org/",
        description: "Common referral partner for primary care + gender-affirming services.",
      },
      {
        label: "Atrius Health Kenmore",
        href: "https://www.atriushealth.org/locations/kenmore",
        description: "Another nearby option for physicals and preventive care.",
      },
    ],
  },
  {
    title: "Step 4 · Add/track other insurance",
    summary:
      "If you stay on a parent or employer plan, store both sides of the card and key IDs so claims are smooth.",
    actions: [
      {
        label: "Upload insurance card",
        href: "https://uhcs.northeastern.edu/appointments/",
        description: "Securely send front/back images for CampusCare + UHCS records.",
      },
      {
        label: "ConnectorCare document center",
        href: "https://www.mahealthconnector.org/how-to-submit-documents",
        description: "Submit eligibility documents when the Health Connector requests them.",
      },
    ],
  },
  {
    title: "Step 5 · Ask for human help anytime",
    summary:
      "Still confused? Use chat, call UHCS, or ring the Health Connector so you’re never stuck.",
    actions: [
      {
        label: "Chat with CampusCare",
        href: "/chat",
        description: "Our 24/7 roster mirrors your wireframes—tap a person, send a note, get help.",
      },
      {
        label: "Call UHCS",
        href: "tel:6173732772",
        description: "617-373-2772 (option 1) for urgent clinical questions.",
      },
      {
        label: "Health Connector support",
        href: "https://www.mahealthconnector.org/help-center",
        description: "Official contact center for plan + premium questions.",
      },
    ],
  },
];

export default function GuidesPage() {
  return (
    <section className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Step-by-step
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Everything you need lives right here.
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          These cards collect the exact policies, forms, and instructions so you understand
          what to do before you ever open an external page. Official links are still provided for verification.
        </p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        {overviewCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.05 * index, duration: 0.35 }}
            className="rounded-3xl border bg-background p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{card.copy}</p>
          </motion.article>
        ))}
      </div>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-3xl border bg-muted/15 p-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Request an appointment
        </p>
        <h2 className="mt-3 text-2xl font-semibold">Pick a reason, follow the on-page steps</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {appointmentRequests.map((request) => (
            <div
              key={request.label}
              className="rounded-2xl border bg-background p-4 text-left"
            >
              <p className="text-base font-semibold">{request.label}</p>
              <p className="mt-2 text-xs text-muted-foreground">{request.note}</p>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                {request.steps.map((step) => (
                  <li key={step} className="flex gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <a
                href={request.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open UHCS appointment request for ${request.label} in a new tab`}
                className="mt-3 inline-flex items-center text-xs font-semibold text-primary underline underline-offset-4"
              >
                Open official UHCS form
              </a>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          For emergencies, exit the app and dial 911 or contact NUPD.
        </p>
      </motion.article>

      <ol className="space-y-6 border-l border-border pl-6">
        {timelineSteps.map((step, index) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative rounded-3xl border bg-background p-6 shadow-sm"
          >
            <span className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.summary}</p>
            <div className="mt-4 space-y-3">
              {step.actions.map((action) => (
                <div
                  key={action.label}
                  className="flex flex-col rounded-2xl border border-dashed border-border/70 bg-muted/30 px-4 py-3"
                >
                  <span className="text-sm font-semibold text-primary">
                    {action.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {action.description}
                  </span>
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${action.label} in a new tab`}
                    className="mt-2 inline-flex items-center text-xs font-semibold text-primary underline underline-offset-4"
                  >
                    View official resource
                  </a>
                </div>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
