import { Quote as QuoteIcon } from "lucide-react"

export function Quote() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="relative rounded-3xl bg-secondary px-8 py-16 text-center md:px-16 md:py-20">
          <QuoteIcon className="mx-auto mb-6 h-10 w-10 text-primary" />
          <blockquote className="font-heading text-2xl font-bold leading-snug text-secondary-foreground md:text-3xl lg:text-4xl">
            Engagement isn{"'"}t just about happiness. It{"'"}s about the level to which employees are willing to spend their energy going the distance for the mission.
          </blockquote>
          <p className="mt-8 text-lg font-semibold text-primary">
            -- Ben Hawes
          </p>
        </div>
      </div>
    </section>
  )
}
