"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const studentContact = {
  name: "Jamie Lee",
  email: "jamie.lee@northeastern.edu",
};

const planAppointments = [
  {
    id: "physical",
    reason: "Primary care physical",
    plan: "ConnectorCare Tier 1 · $0 copay",
    provider: "Fenway Health – Kenmore",
    location: "1340 Boylston St, Boston",
    duration: "45 min visit",
    prepNote: "Bring referral + insurance card",
    slots: [
      { id: "physical-1", date: "Tue, Sept 9", time: "2:00 PM" },
      { id: "physical-2", date: "Wed, Sept 10", time: "9:30 AM" },
      { id: "physical-3", date: "Thu, Sept 11", time: "1:15 PM" },
    ],
  },
  {
    id: "therapy",
    reason: "Therapy intake (virtual)",
    plan: "MassHealth Standard · $0 copay",
    provider: "CampusCare Behavioral Team",
    location: "Secure video link",
    duration: "60 min visit",
    prepNote: "Join from private space + have meds list",
    slots: [
      { id: "therapy-1", date: "Fri, Sept 12", time: "3:00 PM" },
      { id: "therapy-2", date: "Sat, Sept 13", time: "11:00 AM" },
      { id: "therapy-3", date: "Mon, Sept 15", time: "5:30 PM" },
    ],
  },
  {
    id: "dental",
    reason: "ConnectorCare dental cleaning",
    plan: "ConnectorCare Dental · $20 copay",
    provider: "Brookline Dental Partners",
    location: "1265 Beacon St, Brookline",
    duration: "50 min visit",
    prepNote: "Arrive 15 min early for imaging",
    slots: [
      { id: "dental-1", date: "Tue, Sept 16", time: "10:00 AM" },
      { id: "dental-2", date: "Tue, Sept 16", time: "2:30 PM" },
      { id: "dental-3", date: "Thu, Sept 18", time: "9:00 AM" },
    ],
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
    link: "https://www.mass.gov/how-to/apply-for-masshealth-the-health-safety-net-or-the-childrens-medical-security-plan",
  },
  {
    title: "NEU Student Health Plan (SHP)",
    detail:
      "Review the $2,849 annual premium, coverage levels, and waiver instructions for Northeastern’s SHP.",
    link: "https://studenthealthplan.northeastern.edu/effective-dates-costs/",
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, delay },
});

type AppointmentOption = (typeof planAppointments)[number];
type AppointmentSlot = AppointmentOption["slots"][number];

type SelectionState = {
  option: AppointmentOption;
  slot: AppointmentSlot;
};

type ConfirmationState = {
  option: AppointmentOption;
  slot: AppointmentSlot;
  confirmationCode: string;
};

export default function AppointmentsPage() {
  const [selection, setSelection] = useState<SelectionState | null>(null);
  const [booking, setBooking] = useState<ConfirmationState | null>(null);

  const buildConfirmationCode = (
    option: AppointmentOption,
    slot: AppointmentSlot
  ) => `${option.id}-${slot.id}`.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

  const handleSelectSlot = (
    option: AppointmentOption,
    slot: AppointmentSlot
  ) => setSelection({ option, slot });

  const handleSchedule = () => {
    if (!selection) return;
    setBooking({
      option: selection.option,
      slot: selection.slot,
      confirmationCode: buildConfirmationCode(selection.option, selection.slot),
    });
    setSelection(null);
  };

  const handleCancelSelection = () => setSelection(null);
  const handleCloseConfirmation = () => setBooking(null);

  const scheduledSlotId = booking?.slot.id;
  const selectedSlotId = selection?.slot.id;
  const activeSlotId = selectedSlotId ?? scheduledSlotId;

  const renderOverlayShell = (content: ReactNode, onDismiss: () => void) => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onDismiss}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="w-full max-w-lg rounded-3xl border bg-card p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {content}
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-12"
      >
        <motion.article
          {...fadeInUp(0.05)}
          className="rounded-3xl border bg-background/80 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Request an appointment
          </p>
          <h1 className="mt-3 text-3xl font-semibold">
            Pick a reason, then tap a time to schedule
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Slots refresh hourly based on the plans CampusCare administers. Times below are specific to your approved ConnectorCare + MassHealth coverage set.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {planAppointments.map((option, index) => (
              <motion.div
                key={option.id}
                {...fadeInUp(0.12 + index * 0.04)}
                className="flex h-full flex-col rounded-2xl border bg-card/80 p-4"
              >
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {option.reason}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {option.plan}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {option.provider}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {option.location} · {option.duration}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {option.slots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => handleSelectSlot(option, slot)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        activeSlotId === slot.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-background/40 text-foreground hover:bg-primary/10"
                      }`}
                    >
                      {slot.date} · {slot.time}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  {option.prepNote}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Tap a slot to review the details. Once you schedule, we’ll email everything to {studentContact.email}.
          </p>
        </motion.article>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article {...fadeInUp(0.12)} className="rounded-3xl border bg-background p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Coverage reminders
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Massachusetts & NEU requirements
            </h3>
            <ul className="mt-4 list-none space-y-3 text-sm text-muted-foreground">
              {coverageFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-2">
                  <span aria-hidden className="text-base leading-none text-primary">
                    •
                  </span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            {...fadeInUp(0.15)}
            className="rounded-3xl border bg-muted/10 p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Why this matters
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Barriers we actively solve
            </h3>
            <ul className="mt-4 list-none space-y-3 text-sm text-muted-foreground">
              {barrierNotes.map((note) => (
                <li key={note} className="flex items-start gap-2">
                  <span aria-hidden className="text-base leading-none text-primary">
                    •
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.article {...fadeInUp(0.18)} className="rounded-3xl border bg-background/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            UHCS quick links
          </p>
          <h3 className="mt-3 text-xl font-semibold">
            Know what UHCS handles vs. external care
          </h3>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground">
            {uhcsResources.map((item) => (
              <div key={item.title}>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p>{item.detail}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block break-words text-primary underline underline-offset-4"
                >
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article {...fadeInUp(0.2)} className="rounded-3xl border bg-muted/15 p-6">
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
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block break-words text-primary underline underline-offset-4"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </motion.article>
      </motion.section>

      <AnimatePresence>
        {selection
          ? renderOverlayShell(
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                  Review
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {selection.option.reason}
                </h3>
                <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <dt className="font-semibold text-foreground">When</dt>
                    <dd>
                      {selection.slot.date} at {selection.slot.time} ET
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Location</dt>
                    <dd>{selection.option.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Provider</dt>
                    <dd>{selection.option.provider}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Plan & cost</dt>
                    <dd>{selection.option.plan}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Visit length</dt>
                    <dd>{selection.option.duration}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-muted-foreground">
                  We’ll send a calendar-friendly confirmation to {studentContact.email}.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    className="flex-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    onClick={handleSchedule}
                  >
                    Schedule
                  </button>
                  <button
                    className="flex-1 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/80"
                    onClick={handleCancelSelection}
                  >
                    Cancel
                  </button>
                </div>
              </>,
              handleCancelSelection
            )
          : null}
      </AnimatePresence>

      <AnimatePresence>
        {booking
          ? renderOverlayShell(
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                  Confirmed
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  You’re scheduled for {booking.option.reason}
                </h3>
                <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <dt className="font-semibold text-foreground">When</dt>
                    <dd>
                      {booking.slot.date} at {booking.slot.time} ET
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Provider</dt>
                    <dd>{booking.option.provider}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Location</dt>
                    <dd>{booking.option.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Plan</dt>
                    <dd>{booking.option.plan}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Confirmation code</dt>
                    <dd>{booking.confirmationCode}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-muted-foreground">
                  Details were sent to {studentContact.email}. Add it to your calendar or forward to roommates—you’re all set.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    className="flex-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    onClick={handleCloseConfirmation}
                  >
                    Close
                  </button>
                  <button className="flex-1 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/80">
                    Download invite
                  </button>
                </div>
              </>,
              handleCloseConfirmation
            )
          : null}
      </AnimatePresence>
    </>
  );
}
