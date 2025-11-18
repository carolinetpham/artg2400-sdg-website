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
    link: "https://www.mahealthconnector.org/how-to-pay-your-premium",
  },
  {
    text: "ConnectorCare plans keep premiums low with $0 deductibles and limited co-pays.",
    link: "https://www.mahealthconnector.org/connectorcare-plans",
  },
  {
    text: "You can apply online to check MassHealth, tax credit, or ConnectorCare eligibility in one place.",
    link: "https://www.mahealthconnector.org/how-to-apply",
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
    link: "mailto:studenthealthplan@northeastern.edu",
  },
  {
    title: "CampusCare Coordinators",
    info: "Chat 24/7 in-app for personalized navigation and support",
    link: "/chat",
  },
];

export default function InsurancePage() {
  return (
    <section className="space-y-12">
      <div>
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
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border bg-background p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Your insurance information
          </p>
          <h2 className="mt-3 text-2xl font-semibold">{studentPlan.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{studentPlan.policy}</p>
          <p className="mt-2 text-lg font-semibold">{studentPlan.premium}</p>
          <p className="text-sm text-muted-foreground">{studentPlan.term}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {studentPlan.includes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
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
        </article>

        <article className="rounded-3xl border bg-muted/15 p-6">
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
        </article>
      </div>

      <article className="rounded-3xl border bg-background p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          More information
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          National health care reform + student benefits
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The Affordable Care Act (ACA) opened multiple low-cost paths:
        </p>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          {reformBenefits.map((item) => (
            <li key={item.text} className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
              <span>
                {item.text}{" "}
                <a
                  href={item.link}
                  className="text-primary underline underline-offset-4"
                >
                  Learn more
                </a>
              </span>
            </li>
          ))}
        </ul>
      </article>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border bg-muted/15 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Common pain points
          </p>
          <h2 className="mt-3 text-xl font-semibold">
            Why insurance still feels confusing
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {confusionPoints.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Our goal ties to SDG 3.8—advancing universal health coverage by
            making enrollment, usage, and navigation understandable.
          </p>
        </article>

        <article className="rounded-3xl border bg-background p-6">
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
                  className="text-primary underline underline-offset-4"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
