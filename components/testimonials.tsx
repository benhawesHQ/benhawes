import { Linkedin } from "lucide-react"

const testimonials = [
  {
    quote:
      "Ben is a natural leader and helped employees truly understand the mission and vision of the company.",
    name: "Payal Kadakia",
    role: "Founder, ClassPass",
  },
  {
    quote:
      "Ben brings passion, humor, and clarity that energizes the entire organization.",
    name: "Susan Loh",
    role: "People & HR Consultant",
  },
  {
    quote:
      "Ben consistently stood out as someone who could bring energy and alignment to teams.",
    name: "Fritz Lanman",
    role: "CEO, Playlist",
  },
  {
    quote:
      "Ben built an impressive catalog of learning programs and became a cultural center for the company.",
    name: "Petra Townsend",
    role: "People & Culture Leader",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Social Proof
          </p>
          <h2 className="mt-4 font-heading text-4xl font-800 tracking-tight text-foreground md:text-5xl">
            What Leaders Are Saying
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 md:p-10"
            >
              <div className="mb-6 flex items-center gap-2 text-[#0A66C2]">
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-semibold">LinkedIn</span>
              </div>
              <p className="text-lg leading-relaxed text-foreground">
                {'"'}{t.quote}{'"'}
              </p>
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-heading text-base font-bold text-foreground">
                  {t.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
