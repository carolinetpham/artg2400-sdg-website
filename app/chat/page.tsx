"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Copy,
  MessageCircle,
  MessageSquare,
  Phone,
  Video,
  X,
} from "lucide-react";

const liveSpecialists = [
  {
    name: "Tara Vang",
    specialty: "Insurance navigator",
    focus: "Figures out ConnectorCare + MassHealth eligibility without the runaround.",
    wait: "< 2 min",
    channel: "Text or chat",
    contactNumber: "(555) 010-2477",
  },
  {
    name: "Dr. Miles Reno",
    specialty: "Urgent care triage",
    focus: "Books same-day visits + tells you which clinics take your plan.",
    wait: "3 min",
    channel: "Video consult",
    contactNumber: "(555) 010-4822",
  },
  {
    name: "Imani Solano",
    specialty: "Mental health coordinator",
    focus: "Explains therapy coverage + finds bilingual clinicians who get it.",
    wait: "Now",
    channel: "Audio or chat",
    contactNumber: "(555) 010-0880",
  },
  {
    name: "Victor Hu",
    specialty: "Financial aid mentor",
    focus: "Shows how MassHealth/ConnectorCare drop costs vs. the $2,849 NEU plan and helps file the waiver.",
    wait: "5 min",
    channel: "Text",
    contactNumber: "(555) 010-1991",
  },
];

const coverageHelps = [
  {
    text: "Walk through the Massachusetts requirement and make sure your plan actually counts.",
    link: "https://uhcs.northeastern.edu/insurance/",
  },
  {
    text: "Apply tax credits to your ConnectorCare premium so bills shrink before they post.",
    link: "https://www.mahealthconnector.org/how-to-pay-your-premium",
  },
  {
    text: "Figure out what MassHealth covers—dental, therapy, prescriptions—and where to book it.",
    link: "https://www.mass.gov/orgs/masshealth",
  },
  {
    text: "Share documents securely so coordinators can nudge the Health Connector for you.",
    link: "https://www.mahealthconnector.org/how-to-submit-documents",
  },
];

const nearbyProviders = [
  {
    name: "Fenway Health",
    detail: "1340 Boylston St • friendly with ConnectorCare primary care referrals.",
  },
  {
    name: "Atrius Health – Kenmore",
    detail: "133 Brookline Ave • go-to for same-day physicals.",
  },
  {
    name: "Beth Israel Lahey Primary Care – Chestnut Hill",
    detail: "200 Boylston St • telehealth + in-person visits, MassHealth friendly.",
  },
];

const generalReplies = [
  "Drop a photo of your insurance card and I’ll tell you what’s covered in plain English.",
  "Need money help? I can screen you for ConnectorCare or MassHealth in a few minutes.",
  "UHCS takes urgent stuff, but for longer-term care I can line up community providers who accept your plan.",
];

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function useFakeResponder() {
  return useMemo(
    () => (input: string): string => {
      const question = input.toLowerCase();

      if (
        question.includes("doctor") ||
        question.includes("near") ||
        question.includes("appointment")
      ) {
        const list = nearbyProviders
          .map((provider) => `• ${provider.name}: ${provider.detail}`)
          .join("\n");
        return `Here are a few Boston spots UHCS loves for physicals and new patient appointments:\n${list}\nWant me to grab a time for you? Just say the word.`;
      }

      if (question.includes("insurance") || question.includes("connector")) {
        return "ConnectorCare + MassHealth screening takes like 5 minutes. I’ll ask income + residency basics, prep the tax credit form, then show plans that land around $0-$40 per month.";
      }

      return generalReplies[Math.floor(Math.random() * generalReplies.length)];
    },
    []
  );
}

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.35, delay },
});

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Ask anything about coverage, referrals, or billing. I can pull up nearby clinics, double-check benefits, or loop in UHCS.",
    },
  ]);
  const [activeSpecialist, setActiveSpecialist] =
    useState<(typeof liveSpecialists)[number] | null>(null);
  const [modalMessages, setModalMessages] = useState<ChatMessage[]>([]);
  const [modalInput, setModalInput] = useState("");
  const [copiedField, setCopiedField] = useState<"text" | "call" | null>(null);
  const respond = useFakeResponder();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return;
    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    const reply: ChatMessage = {
      role: "assistant",
      content: respond(input.trim()),
    };
    setMessages((prev) => [...prev, userMessage, reply]);
    setInput("");
  };

  const openSpecialistModal = (person: (typeof liveSpecialists)[number]) => {
    setActiveSpecialist(person);
    setCopiedField(null);
    setModalInput("");
    setModalMessages([
      {
        role: "assistant",
        content: `You’re chatting with ${person.name} (${person.specialty}). Ask about ${person.focus.toLowerCase()}`,
      },
    ]);
  };

  const closeSpecialistModal = () => {
    setActiveSpecialist(null);
    setModalMessages([]);
    setModalInput("");
  };

  const handleModalSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!modalInput.trim() || !activeSpecialist) return;
    const userMessage: ChatMessage = { role: "user", content: modalInput.trim() };
    const reply: ChatMessage = {
      role: "assistant",
      content: respond(modalInput.trim()),
    };
    setModalMessages((prev) => [...prev, userMessage, reply]);
    setModalInput("");
  };

  const copyToClipboard = async (value: string, field: "text" | "call") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      <motion.div {...fadeIn()}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          24/7 Assistance
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Real people who already know student insurance life.
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          These coordinators rotate every hour, so someone’s always around to answer coverage questions, book care, or decode ConnectorCare + MassHealth rules.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {liveSpecialists.map((person, index) => (
          <motion.button
            key={person.name}
            {...fadeIn(0.05 * index)}
            type="button"
            onClick={() => openSpecialistModal(person)}
            className="w-full rounded-3xl border bg-background/80 p-5 text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold">{person.name}</p>
                <p className="text-sm text-muted-foreground">
                  {person.specialty}
                </p>
              </div>
              <span className="text-xs font-semibold text-primary">
                Wait: {person.wait}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{person.focus}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Preferred: {person.channel}
            </p>
          </motion.button>
        ))}
      </div>

      <motion.article
        {...fadeIn(0.1)}
        className="rounded-3xl border bg-muted/15 p-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          What we actually do
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          Insurance help without the hold music
        </h2>
        <ul className="mt-4 list-none space-y-3 text-sm text-muted-foreground">
          {coverageHelps.map((item) => (
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
                  className="block wrap-break-word text-primary underline underline-offset-4"
                >
                  See resource
                </a>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted-foreground">
          Prefer SMS? Text <strong>(555) 010‑2477</strong> for a secure thread or tap the widget in the corner to jump into chat.
        </p>
      </motion.article>

      <motion.article {...fadeIn(0.15)} className="rounded-3xl border bg-background p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Take the chat for a spin
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          Watch the bot tee up helpful info
        </h2>
        <div className="mt-4 max-h-72 overflow-y-auto rounded-2xl border bg-muted/20 p-4 text-sm">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={`${message.role}-${index}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className={`mb-3 flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-sm rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground"
                  }`}
                >
                  {message.content.split("\n").map((line, idx) => (
                    <p key={idx} className="whitespace-pre-wrap">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder='Try: "Where can I see a doctor near campus?"'
            className="flex-1 rounded-full border bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Send
          </button>
        </form>
      </motion.article>

      <AnimatePresence>
        {activeSpecialist ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="relative w-full max-w-4xl rounded-3xl border bg-background p-6 shadow-2xl"
            >
              <button
                aria-label="Close coordinator modal"
                onClick={closeSpecialistModal}
                className="absolute right-4 top-4 rounded-full border border-border/80 bg-white/80 p-2 text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                type="button"
              >
                <X className="size-4" />
              </button>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Coordinator
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">
                    {activeSpecialist.name}
                  </h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Wait: {activeSpecialist.wait}
                  </span>
                  <span className="rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    Prefers: {activeSpecialist.channel}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activeSpecialist.specialty} • {activeSpecialist.focus}
                </p>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_minmax(0,1fr)]">
                <div className="space-y-3">
                  <div className="rounded-2xl border bg-muted/10 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold flex items-center gap-2">
                          <MessageSquare className="size-4 text-primary" />
                          Text
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activeSpecialist.contactNumber}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Save to your phone and text to start a secure thread.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          copyToClipboard(activeSpecialist.contactNumber, "text")
                        }
                        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary/80"
                      >
                        {copiedField === "text" ? (
                          <Check className="size-3.5" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                        {copiedField === "text" ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-muted/10 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold flex items-center gap-2">
                          <Phone className="size-4 text-primary" />
                          Call
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activeSpecialist.contactNumber}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Copy the number to call or drop it into FaceTime/Zoom.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          copyToClipboard(activeSpecialist.contactNumber, "call")
                        }
                        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary/80"
                      >
                        {copiedField === "call" ? (
                          <Check className="size-3.5" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                        {copiedField === "call" ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border bg-primary/10 px-4 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                  >
                    <div className="flex items-center gap-2">
                      <Video className="size-4" />
                      Join the video lobby
                    </div>
                  </a>

                  <div className="rounded-2xl border bg-muted/10 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <MessageCircle className="size-4 text-primary" />
                      Prefer chat?
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Keep everything in one place—chat thread stays inside this modal.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border bg-muted/10 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">
                        Chat with {activeSpecialist.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Replies use the same smart prompts as the main chat.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 max-h-72 overflow-y-auto rounded-xl border bg-background/90 p-3 text-sm">
                    <AnimatePresence initial={false}>
                      {modalMessages.map((message, idx) => (
                        <motion.div
                          key={`${message.role}-${idx}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className={`mb-3 flex ${
                            message.role === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-sm rounded-2xl px-3 py-2 ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-foreground"
                            }`}
                          >
                            {message.content.split("\n").map((line, lineIdx) => (
                              <p key={lineIdx} className="whitespace-pre-wrap">
                                {line}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  <form
                    onSubmit={handleModalSubmit}
                    className="mt-3 flex flex-col gap-2 sm:flex-row"
                  >
                    <input
                      type="text"
                      value={modalInput}
                      onChange={(event) => setModalInput(event.target.value)}
                      placeholder="Type your question"
                      className="flex-1 rounded-full border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}
