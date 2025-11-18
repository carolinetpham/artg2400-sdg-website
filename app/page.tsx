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

const coverageFacts = [
  "Massachusetts requires every degree-seeking student to carry comparable health insurance.",
  "NEU Student Health Plan: $2,849 for Sept 1, 2025 – Aug 31, 2026.",
  "Tax credits plus ConnectorCare can drop monthly premiums close to $0 when you qualify.",
  "Staying on a parent/guardian plan is allowed until age 26 if benefits meet MA standards.",
];

const barrierNotes = [
  "Balancing tuition, housing, and a $2.8K health plan forces many students to delay care.",
  "Out-of-state and international students often struggle to understand MassHealth, ConnectorCare, or ACA rules.",
  "Networks vary per plan, so it’s tough to know where you can book therapy, dental, or urgent visits.",
  "CampusCare supports SDG 3.8: advancing universal health coverage with guidance + human help.",
];

const uhcsResources = [
  {
    title: "UHCS Services",
    detail:
      "UHCS (uhcs.northeastern.edu) focuses on same-day care, immunizations, travel consults, and triage. Routine physicals + ongoing primary care are referred to community partners.",
    link: "https://uhcs.northeastern.edu/",
  },
  {
    title: "UHCS Appointments",
    detail:
      "Before external visits, submit the UHCS appointment form so they can advise on next steps or provide referrals to clinics like Fenway Health or Atrius Health.",
    link: "https://uhcs.northeastern.edu/appointments/",
  },
];

const maLinks = [
  {
    title: "Massachusetts Health Connector",
    detail:
      "Shop ConnectorCare plans, calculate premium tax credits, and confirm which plans waive deductibles for students.",
    link: "https://www.mahealthconnector.org/",
  },
  {
    title: "MassHealth (Medicaid) Application",
    detail:
      "See eligibility rules, required documents, and how to submit an online or paper MassHealth application.",
    link: "https://www.mass.gov/how-to/apply-for-masshealth",
  },
  {
    title: "NEU Student Health Plan (SHP)",
    detail:
      "Review the $2,849 annual premium, coverage levels, and waiver instructions for Northeastern’s SHP.",
    link: "https://uhcs.northeastern.edu/insurance/",
  },
];

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
        <article className="rounded-3xl border bg-muted/20 p-8">
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
              className="text-primary underline underline-offset-4"
            >
              UHCS appointment guidance
            </a>
            , students schedule those with community providers after receiving a
            referral.
          </p>
          <div className="mt-6 rounded-2xl border bg-background/80 p-5">
            <p className="text-sm font-semibold text-foreground">
              Prep checklist
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {appointment.prep.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="rounded-3xl border bg-background p-8">
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
            {supportTeam.map((person) => (
              <div
                key={person.name}
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
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border bg-background p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Coverage reminders
          </p>
          <h3 className="mt-3 text-xl font-semibold">
            Massachusetts & NEU requirements
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {coverageFacts.map((fact) => (
              <li key={fact} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border bg-muted/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Why this matters
          </p>
          <h3 className="mt-3 text-xl font-semibold">
            Barriers we actively solve
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {barrierNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="rounded-3xl border bg-background/70 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          UHCS quick links
        </p>
        <h3 className="mt-3 text-xl font-semibold">Know what UHCS handles vs. external care</h3>
        <div className="mt-4 space-y-4 text-sm text-muted-foreground">
          {uhcsResources.map((item) => (
            <div key={item.title}>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p>{item.detail}</p>
              <a
                href={item.link}
                className="text-primary underline underline-offset-4"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-3xl border bg-muted/15 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Massachusetts resources
        </p>
        <h3 className="mt-3 text-xl font-semibold">
          Bookmark these official links for coverage + appointments
        </h3>
        <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
          {maLinks.map((item) => (
            <li key={item.title}>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p>{item.detail}</p>
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
    </section>
  );
}
