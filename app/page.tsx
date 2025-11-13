const highlights = [
  {
    title: "Step-by-step guides",
    copy: "Get clear walkthroughs for every benefit, claim, and appointment.",
  },
  {
    title: "Always-on chat",
    copy: "Talk to care coordinators around the clock for quick answers.",
  },
  {
    title: "Insurance support",
    copy: "Understand coverage options and compare plans with confidence.",
  },
];

export default function Home() {
  return (
    <section className="space-y-16">
      <div className="rounded-3xl border bg-muted/20 p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Smart Digital Guidance
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Simple tools to navigate the care, coverage, and support you need.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Start with quick guides, chat with our 24/7 team, and explore
          insurance choices built for your situation—all from one place.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border bg-background p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
