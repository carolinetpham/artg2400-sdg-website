const responseStats = [
  { label: "Avg. first reply", value: "< 2 min" },
  { label: "Languages", value: "8+" },
  { label: "Satisfaction", value: "4.9 / 5" },
];

export default function ChatPage() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          24/7 Chat
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Real people, always on standby.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Day or night, connect with licensed coordinators who can review your
          benefits, schedule care, or loop in a specialist.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {responseStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border bg-background p-6 text-center"
          >
            <p className="text-3xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border bg-muted/20 p-6">
        <p className="text-sm font-medium">Need help right now?</p>
        <p className="mt-2 text-muted-foreground">
          Open the widget in the lower-right corner of the app or text (555)
          010-2477 to start a secure thread instantly.
        </p>
      </div>
    </section>
  );
}
