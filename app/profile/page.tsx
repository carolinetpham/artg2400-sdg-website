const profile = {
  name: "Jamie Lee",
  email: "jamie.lee@northeastern.edu",
  memberId: "NEU-SHP-02931",
  plan: "NEU Student Health Plan",
};

export default function ProfilePage() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Profile
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Your basics at a glance.</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Update login details, confirm the plan tied to your account, and log
          out when you’re done.
        </p>
      </div>

      <article className="rounded-3xl border bg-background p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Basic information</h2>
        <dl className="mt-4 space-y-3 text-sm text-muted-foreground">
          <div>
            <dt className="font-semibold text-foreground">Full name</dt>
            <dd>{profile.name}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Email</dt>
            <dd>{profile.email}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Plan</dt>
            <dd>
              {profile.plan} · Member ID {profile.memberId}
            </dd>
          </div>
        </dl>
      </article>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border bg-muted/15 p-6">
          <h2 className="text-xl font-semibold">Change username</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Keep your login memorable but secure. Changes sync across chat and
            guide permissions instantly.
          </p>
          <button className="mt-4 rounded-full border border-border px-4 py-2 text-sm font-semibold">
            Update username
          </button>
        </article>

        <article className="rounded-3xl border bg-muted/15 p-6">
          <h2 className="text-xl font-semibold">Reset password</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We’ll email a secure link that expires in 15 minutes.
          </p>
          <button className="mt-4 rounded-full border border-border px-4 py-2 text-sm font-semibold">
            Send reset link
          </button>
        </article>
      </div>

      <button className="w-full rounded-3xl bg-primary px-5 py-4 text-center text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90">
        Log out
      </button>
    </section>
  );
}
