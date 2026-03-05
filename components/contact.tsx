import { ArrowRight, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,hsl(16_97%_49%/0.06),transparent)]" />

      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Let{"'"}s Work Together
        </p>
        <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Bring Ben to Your Team
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Interested in a keynote, offsite talk, or leadership session? Let{"'"}s
          start a conversation about activating your team.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="mailto:benjhawes@gmail.com"
            className="group flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <Mail className="h-5 w-5" />
            Get in Touch
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>I reply in less than 24 hours.</span>
          </div>
        </div>

        {/* Quick details */}
        <div className="mt-16 grid gap-6 text-left sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Keynotes
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              30-60 minute high-energy sessions for all-hands, offsites, and
              leadership events.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Workshops
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Interactive half-day or full-day sessions with your leadership
              team.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Consulting
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Ongoing engagement strategy and culture activation for your
              organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
