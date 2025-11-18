"use client";

import { FormEvent, useMemo, useState } from "react";

const liveSpecialists = [
  {
    name: "Tara Vang",
    specialty: "Insurance navigator",
    focus: "ConnectorCare + MassHealth eligibility screening",
    wait: "< 2 min",
    channel: "Text or chat",
  },
  {
    name: "Dr. Miles Reno",
    specialty: "Urgent care triage",
    focus: "Books same-day visits + clarifies in-network clinics",
    wait: "3 min",
    channel: "Video consult",
  },
  {
    name: "Imani Solano",
    specialty: "Mental health coordinator",
    focus: "Explains therapy coverage + finds bilingual clinicians",
    wait: "Now",
    channel: "Audio or chat",
  },
  {
    name: "Victor Hu",
    specialty: "Financial aid mentor",
    focus: "Breaks down $2,849 NEU premium + payment plans",
    wait: "5 min",
    channel: "Text",
  },
];

const coverageHelps = [
  {
    text: "Walk through Massachusetts’ requirement and make sure your plan counts as comparable coverage.",
    link: "https://uhcs.northeastern.edu/insurance/",
  },
  {
    text: "Apply tax credits directly to your ConnectorCare premium so bills drop before they hit your account.",
    link: "https://www.mahealthconnector.org/how-to-pay-your-premium",
  },
  {
    text: "Understand what MassHealth covers (dental, therapy, prescriptions) and where to book visits.",
    link: "https://www.mass.gov/orgs/masshealth",
  },
  {
    text: "Share documents securely so coordinators can advocate with the Health Connector on your behalf.",
    link: "https://www.mahealthconnector.org/how-to-submit-documents",
  },
];

const nearbyProviders = [
  {
    name: "Fenway Health",
    detail: "1340 Boylston St • accepts ConnectorCare primary care referrals.",
  },
  {
    name: "Atrius Health – Kenmore",
    detail: "133 Brookline Ave • same-day appointments for students needing physicals.",
  },
  {
    name: "Beth Israel Lahey Primary Care – Chestnut Hill",
    detail: "200 Boylston St • telehealth + in-person visits, MassHealth friendly.",
  },
];

const generalReplies = [
  "I can review your insurance card and confirm which services are covered—feel free to upload a photo.",
  "Need financial help? We can screen you for ConnectorCare or MassHealth in minutes.",
  "UHCS handles urgent concerns; for long-term care we’ll connect you to community providers that accept your plan.",
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
        return `Here are a few Boston-area clinics that UHCS regularly recommends for physicals and new patient appointments:\n${list}\nNeed me to book one? Let me know and I’ll hold a slot.`;
      }

      if (question.includes("insurance") || question.includes("connector")) {
        return "ConnectorCare + MassHealth eligibility takes about 5 minutes. I’ll ask income + residency questions, prep any tax credit forms, then share plans with $0-$40 monthly premiums.";
      }

      return generalReplies[Math.floor(Math.random() * generalReplies.length)];
    },
    []
  );
}

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Ask anything about coverage, referrals, or billing. I can pull up nearby clinics, verify benefits, or connect you to UHCS.",
    },
  ]);
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

  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          24/7 Assistance
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Real specialists who already know student insurance.
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          These coordinators rotate every hour so someone is always ready to
          answer coverage questions, schedule care, or decode ConnectorCare and
          MassHealth rules for you.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {liveSpecialists.map((person) => (
          <article
            key={person.name}
            className="rounded-3xl border bg-background/80 p-5 shadow-sm"
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
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {person.channel}
            </p>
          </article>
        ))}
      </div>

      <article className="rounded-3xl border bg-muted/15 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          How we help in real time
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          Coverage clarity without the hold music
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          {coverageHelps.map((item) => (
            <li key={item.text} className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
              <span>
                {item.text}{" "}
                <a
                  href={item.link}
                  className="text-primary underline underline-offset-4"
                >
                  See resource
                </a>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted-foreground">
          Prefer SMS? Text <strong>(555) 010‑2477</strong> for a secure thread or
          tap the widget in the corner to open chat instantly.
        </p>
      </article>

      <article className="rounded-3xl border bg-background p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Try the chat
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          See how the bot tees up helpful info
        </h2>
        <div className="mt-4 max-h-72 overflow-y-auto rounded-2xl border bg-muted/20 p-4 text-sm">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
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
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder='Try: "What doctors are nearby?"'
            className="flex-1 rounded-full border bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send
          </button>
        </form>
      </article>
    </section>
  );
}
