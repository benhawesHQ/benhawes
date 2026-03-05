import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(16_97%_49%/0.08),transparent)]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 pb-24 pt-20 lg:flex-row lg:gap-20 lg:px-10 lg:pb-32 lg:pt-28">
        {/* Left: Copy */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Now booking Q3 & Q4 2026
          </div>

          <h1 className="font-heading text-5xl font-black leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">
              Strategy doesn{"'"}t go the distance.
            </span>
            <br />
            <span className="text-primary">People do.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl">
            The most powerful strategy only works when the people delivering it
            feel connected to the mission. Ben Hawes helps organizations{" "}
            <strong className="text-foreground">activate their people</strong>{" "}
            so strategy turns into momentum.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Bring Ben to Your Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#keynote"
              className="flex items-center gap-2 rounded-lg border-2 border-secondary px-7 py-3.5 text-base font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              See the Keynote
            </a>
          </div>
        </div>

        {/* Right: Video embed */}
        <div className="w-full max-w-xl flex-1 lg:max-w-none">
          <div className="relative">
            {/* Decorative accent behind video */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/Ca3coU2oqT4"
                  title="Ben Hawes Keynote Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
