export function Credibility() {
  const companies = ["ClassPass", "LifeLabs Learning", "Rocket Money"]

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by leaders at
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {companies.map((company) => (
            <span
              key={company}
              className="font-heading text-xl font-bold text-foreground/70 md:text-2xl"
            >
              {company}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Ben has helped activate the passion and commitment of thousands of
          employees across fast-growing teams at some of the most innovative
          companies in the world.
        </p>
      </div>
    </section>
  )
}
