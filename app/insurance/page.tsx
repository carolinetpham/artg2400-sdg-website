"use client";

import { useRef, useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";

const massHealthPlan = {
  name: "MassHealth Standard",
  policy: "MassHealth ID: MA-482-991-02",
  premium: "$0–$40 / month with tax credits",
  term: "Coverage: Rolling (redetermine yearly)",
  includes: [
    "Medical, behavioral, dental, and pharmacy coverage with statewide networks.",
    "Zero deductibles and $0 copays for most student visits.",
    "Waive the $2,849 Northeastern SHP once MassHealth is approved.",
  ],
};

const planComparison = [
  {
    label: "Monthly cost",
    masshealth: "$0–$40 based on income",
    neu: "$237+ (SHP $2,849 yearly)",
  },
  {
    label: "Copays + deductibles",
    masshealth: "$0 copays, $0 deductible",
    neu: "$25–$40 copays, $250 deductible",
  },
  {
    label: "Provider network",
    masshealth: "Statewide MassHealth + ConnectorCare clinics",
    neu: "UHCS + community referrals if in-network",
  },
  {
    label: "Waiver impact",
    masshealth: "Lets you waive Northeastern SHP immediately",
    neu: "Default if you skip waiver; billed to student account",
  },
];

const reformBenefits = [
  {
    text: "MassHealth (Medicaid) can cover you for little to nothing if you qualify.",
    link: "https://www.mass.gov/orgs/masshealth",
  },
  {
    text: "Tax credits from the Massachusetts Health Connector can shrink your bill every single month.",
    link: "https://www.mahealthconnector.org/taxes/aptc-and-your-taxes",
  },
  {
    text: "ConnectorCare plans stay budget-friendly with $0 deductibles + tiny co-pays.",
    link: "https://www.mahealthconnector.org/connectorcare-plans",
  },
  {
    text: "One online application checks MassHealth, tax credits, and ConnectorCare in a single shot.",
    link: "https://www.mahealthconnector.org/help-center-answers-category/eligibility",
  },
];

const confusionPoints = [
  "Enrollment feels like homework—eligibility rules, deadlines, and network lists everywhere.",
  "Out-of-state + international students don’t speak fluent MassHealth, ConnectorCare, or ACA yet.",
  "Even with coverage, figuring out costs for therapy, dental, or urgent care can be a mystery.",
  "Lower-income and first-gen students often get zero guidance on where to start.",
];

const contacts = [
  {
    title: "CampusCare Coordinators",
    info: "Ping us 24/7 in-app for quick navigation help.",
    link: "/chat",
  },
  {
    title: "Health Connector Help Center",
    info: "Ask anything about MassHealth, ConnectorCare, or tax credits.",
    link: "https://www.mahealthconnector.org/",
  },
  {
    title: "MassHealth Enrollment Center",
    info: "Phone: 800-841-2900 • Perfect for status checks or doc uploads.",
    link: "tel:18008412900",
  },
  {
    title: "UHCS Appointment Desk",
    info: "Schedule or follow up on referrals + on-campus services.",
    link: "https://uhcs.northeastern.edu/appointments/",
  },
  {
    title: "NEU Student Health Plan Office",
    info: "Billing questions, waivers, and proof-of-coverage letters.",
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
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadedFiles((prev) => [...prev, file.name]);
    event.target.value = "";
  };

  const handleRemoveFile = (filename: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file !== filename));
  };

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
          Coverage info without the scary fine print.
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Massachusetts says every full-time and part-time student needs a qualifying plan.
          Treat this page like your digital card plus the cliff notes so you always know what to do next.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.article
          {...fadeIn(0.05)}
          className="rounded-3xl border bg-background p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Your current plan
          </p>
          <h2 className="mt-3 text-2xl font-semibold">{massHealthPlan.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{massHealthPlan.policy}</p>
          <p className="mt-2 text-lg font-semibold">{massHealthPlan.premium}</p>
          <p className="text-sm text-muted-foreground">{massHealthPlan.term}</p>
          <ul className="mt-4 list-none space-y-2 text-sm text-muted-foreground">
            {massHealthPlan.includes.map((item) => (
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
              Grab ID card
            </button>
            <button className="rounded-full border border-border px-4 py-2 text-sm font-semibold">
              Get proof of coverage
            </button>
          </div>
        </motion.article>

        <motion.article
          {...fadeIn(0.1)}
          className="rounded-3xl border bg-muted/15 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Add another plan
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Bring another plan</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload your parent/guardian plan or employer coverage so we can double-check it passes the Massachusetts comparable coverage test.
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p>We look at:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Hospital + physician coverage in Massachusetts</li>
              <li>Prescription + mental health services</li>
              <li>Deductible + out-of-pocket maximums</li>
            </ul>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleUploadClick}
            className="mt-5 w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
          >
            Upload coverage proof
          </button>
          {uploadedFiles.length > 0 ? (
            <div className="mt-3 space-y-2">
              {uploadedFiles.map((filename) => (
                <div
                  key={filename}
                  className="flex items-center justify-between rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs text-muted-foreground"
                >
                  <span className="truncate">{filename}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(filename)}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </motion.article>
      </div>

      <motion.article
        {...fadeIn(0.12)}
        className="rounded-3xl border bg-muted/15 p-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Waive the campus fee
        </p>
        <h2 className="mt-3 text-2xl font-semibold">SHP waiver deadline</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Once MassHealth or ConnectorCare approval hits your inbox, head to the official waiver form so Northeastern drops the $2,849 Student Health Plan fee. This year’s deadline was{" "}
          <strong>September 30, 2025</strong>—missing it means the charge sticks.
        </p>
        <a
          href="https://studenthealthplan.northeastern.edu/waiver/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-semibold text-primary underline-offset-4 transition-colors hover:bg-muted hover:text-foreground"
        >
          Go to the waiver form
        </a>
        <p className="mt-2 text-xs text-muted-foreground">
          Pro tip: upload your approval letter above so you have it handy when filling the waiver.
        </p>
      </motion.article>

      <motion.article
        {...fadeIn(0.12)}
        className="rounded-3xl border bg-muted/20 p-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          MassHealth vs. NEU SHP
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          Why the state plan usually wins
        </h2>
        <div className="mt-4 space-y-4 text-sm text-muted-foreground">
          {planComparison.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-dashed border-border/60 bg-background/70 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
              <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <span className="font-semibold text-foreground">
                  MassHealth: {item.masshealth}
                </span>
                <span className="text-foreground/80">
                  NEU SHP: {item.neu}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Once your MassHealth or ConnectorCare approval arrives, upload it and
          submit the waiver so Northeastern removes the $2,849 SHP charge from your account.
        </p>
      </motion.article>

      <motion.article {...fadeIn(0.15)} className="rounded-3xl border bg-background p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          More ways to save
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          National health care reform perks for students
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The Affordable Care Act opened up a bunch of low-cost options:
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.article
          {...fadeIn(0.18)}
          className="rounded-3xl border bg-muted/15 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Stuff students trip over
          </p>
          <h2 className="mt-3 text-xl font-semibold">
            Why insurance still feels like a maze
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
            We’re chasing SDG 3.8—making healthcare usable—by translating all of this into normal words.
          </p>
        </motion.article>

        <motion.article {...fadeIn(0.22)} className="rounded-3xl border bg-background p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Still stuck?
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
