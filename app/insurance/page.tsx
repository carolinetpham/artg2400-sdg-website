const planHighlights = [
  {
    name: "Care Essentials",
    price: "$180 / mo",
    detail: "Great for preventative and routine visits with low co-pays.",
  },
  {
    name: "Total Coverage",
    price: "$240 / mo",
    detail: "Adds specialists, imaging, and out-of-network reimbursements.",
  },
  {
    name: "Family Plus",
    price: "$320 / mo",
    detail: "Bundle children and partners with shared deductibles.",
  },
];

export default function InsurancePage() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Insurance
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Compare plans with side-by-side clarity.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We surface the monthly cost, deductible impact, and perks so you can
          make fast, confident decisions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {planHighlights.map((plan) => (
          <article key={plan.name} className="rounded-2xl border p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {plan.name}
            </p>
            <p className="mt-3 text-2xl font-semibold">{plan.price}</p>
            <p className="mt-3 text-sm text-muted-foreground">{plan.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
