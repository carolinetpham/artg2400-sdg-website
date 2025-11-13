const guideTopics = [
  "Eligibility checklists",
  "Appointment prep",
  "Post-visit follow ups",
  "Filing claims online",
  "Financial assistance",
];

export default function GuidesPage() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Guides
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Learn the process, one clear step at a time.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Choose a topic to see timelines, checklists, and documents you will
          need. Each guide is written so your whole care team can stay aligned.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {guideTopics.map((topic) => (
          <li
            key={topic}
            className="rounded-2xl border bg-background p-5 font-medium"
          >
            {topic}
          </li>
        ))}
      </ul>
    </section>
  );
}
