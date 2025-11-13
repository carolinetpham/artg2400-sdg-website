export default function SignInPage() {
  return (
    <section className="mx-auto max-w-md space-y-8">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Sign in
        </p>
        <h1 className="text-3xl font-semibold">Pick up where you left off.</h1>
        <p className="text-muted-foreground">
          Enter your email to receive a secure link, or use your organization
          credentials.
        </p>
      </div>

      <form className="space-y-4 rounded-2xl border bg-background p-6 shadow-sm">
        <label className="block text-sm font-medium">
          Email address
          <input
            type="email"
            className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Send magic link
        </button>
      </form>
    </section>
  );
}
