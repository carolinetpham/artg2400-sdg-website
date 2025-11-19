"use client";

import { motion } from "framer-motion";

const overviewCards = [
  {
    title: "Why CampusCare exists",
    copy: "Massachusetts + Northeastern require active insurance. We keep your plan info, helpers, and next steps in one chill dashboard so nothing falls through.",
  },
  {
    title: "What happens on each page",
    copy: "Home shows appointments + your crew, 24/7 chat lists real people, Insurance stores cards + links, and this Guides page breaks down every workflow step by step.",
  },
];

const appointmentRequests = [
  {
    label: "Dental",
    note: "UHCS hooks you up with community dentists for cleanings, fillings, or braces tweaks.",
    steps: [
      "Pick “Dental” on the UHCS appointment form.",
      "Drop your insurance info + preferred locations (Fenway, Atrius, etc.).",
      "UHCS confirms the referral and sends intake paperwork.",
    ],
    href: "https://uhcs.northeastern.edu/appointments/",
  },
  {
    label: "Medical (non-emergency)",
    note: "Use this for physicals, chronic care, follow ups, or lab orders.",
    steps: [
      "Tell UHCS what’s going on + your free times.",
      "Mention if it’s a physical needed for co-op/employer.",
      "UHCS triage nurses reply with same-day slots or partner clinics.",
    ],
    href: "https://uhcs.northeastern.edu/appointments/",
  },
  {
    label: "Mental health",
    note: "Get matched with UHCS clinicians or trusted off-campus therapists.",
    steps: [
      "Choose counseling, psychiatry, or a language preference.",
      "Mention diagnoses/meds so care stays consistent.",
      "A coordinator follows up in one business day.",
    ],
    href: "https://uhcs.northeastern.edu/appointments/",
  },
];

const timelineSteps = [
  {
    title: "Step 1 · Confirm the mandate",
    summary:
      "Massachusetts says every degree-seeking student needs comparable insurance or they get billed for the $2,849 NEU plan. Check if MassHealth/ConnectorCare qualifies so you can waive SHP.",
    actions: [
      {
        label: "UHCS insurance overview",
        href: "https://studenthealthplan.northeastern.edu/",
        description: "Skim what SHP covers + grab the waiver steps once you lock MassHealth in.",
      },
      {
        label: "Comparable coverage checklist",
        href: "https://uhcs.northeastern.edu/appointments/",
        description: "Upload MassHealth or family-plan docs so UHCS can verify and waive the SHP fee.",
      },
    ],
  },
  {
    title: "Step 2 · Explore lower-cost options",
    summary:
      "ConnectorCare, MassHealth, and ACA tax credits usually land at $0–$40 per month—way less than NEU’s $237/mo charge. Use these links to confirm eligibility and timelines.",
    actions: [
      {
        label: "Massachusetts Health Connector",
        href: "https://www.mahealthconnector.org/",
        description:
          "Compare ConnectorCare plans, see monthly costs, and spot the ones that waive deductibles with MassHealth-level coverage. Have income, residency info, and tax status ready.",
      },
      {
        label: "Apply for MassHealth",
        href: "https://www.mass.gov/how-to/apply-for-masshealth-the-health-safety-net-or-the-childrens-medical-security-plan",
        description:
          "Gather proof of identity, residency, income, immigration status (if applicable), and Social Security numbers. The official app lets you start online + upload docs—we summarize the fields so you can prep first.",
      },
    ],
  },
  {
    title: "Step 3 · Book the right appointment",
    summary:
      "UHCS handles triage, vaccines, and urgent stuff but sends students to community clinics for physicals or long-term care.",
    actions: [
      {
        label: "UHCS appointment request",
        href: "https://uhcs.northeastern.edu/appointments/",
        description: "Tell UHCS what you need—they’ll confirm next steps or fire off referrals.",
      },
      {
        label: "Fenway Health appointments",
        href: "https://fenwayhealth.org/",
        description: "Common referral partner for primary care + gender-affirming care.",
      },
      {
        label: "Atrius Health Kenmore",
        href: "https://www.atriushealth.org/locations/kenmore",
        description: "Another nearby spot for physicals and preventive care.",
      },
    ],
  },
  {
    title: "Step 4 · Add/track other insurance",
    summary:
      "Staying on a parent or employer plan? Store card photos and IDs so claims go smoothly.",
    actions: [
      {
        label: "Upload insurance card",
        href: "https://studenthealthplan.northeastern.edu/your-insurance-information/",
        description: "Securely send front/back images for CampusCare + UHCS records.",
      },
      {
        label: "ConnectorCare document center",
        href: "https://betterhealthconnector.com/about/policy-center/student-health-insurance-program",
        description: "Submit eligibility documents when the Health Connector pings you.",
      },
    ],
  },
  {
    title: "Step 5 · Ask for human help anytime",
    summary:
      "Still lost? Chat with us, call UHCS, or loop in the Health Connector so you’re never stuck.",
    actions: [
      {
        label: "Chat with CampusCare",
        href: "/chat",
        description: "Tap someone on the 24/7 roster, send a note, and get real help.",
      },
      {
        label: "Call UHCS",
        href: "tel:6173732772",
        description: "617-373-2772 (option 1) when it’s an urgent clinical question.",
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
          These cards pull together the policies, forms, and instructions so you know what to do before ever opening a new tab. Official links are still there when you’re ready.
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
        <h2 className="mt-3 text-2xl font-semibold">Pick a reason, follow the mini checklist</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {appointmentRequests.map((request) => (
            <div
              key={request.label}
              className="rounded-2xl border bg-background p-4 text-left"
            >
              <p className="text-base font-semibold">{request.label}</p>
              <p className="mt-2 text-xs text-muted-foreground">{request.note}</p>
              <ul className="mt-3 list-none space-y-2 text-xs text-muted-foreground">
                {request.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span aria-hidden className="text-sm leading-none text-primary">
                      •
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <a
                href={request.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open UHCS appointment request for ${request.label} in a new tab`}
                className="mt-3 block break-words text-xs font-semibold text-primary underline underline-offset-4"
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
                    className="mt-2 block break-words text-xs font-semibold text-primary underline underline-offset-4"
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
