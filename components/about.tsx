import Image from "next/image"

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row lg:gap-20 lg:px-10 lg:py-32">
        {/* Photo */}
        <div className="relative w-full max-w-md shrink-0">
          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          <Image
            src="/images/headshot.jpg"
            alt="Ben Hawes smiling in a city setting at night"
            width={500}
            height={600}
            className="relative rounded-2xl object-cover shadow-xl"
            priority
          />
        </div>

        {/* Bio */}
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Ben
          </p>
          <h2 className="mt-4 font-heading text-4xl font-800 tracking-tight text-foreground md:text-5xl">
            Meet the guy who genuinely believes your team is capable of more.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ben Hawes is a team activation keynote speaker who believes the
              most powerful driver of execution is emotional connection to the
              mission.
            </p>
            <p>
              After leading learning and development initiatives at{" "}
              <strong className="text-foreground">ClassPass</strong> and
              supporting global culture and engagement programs at{" "}
              <strong className="text-foreground">LifeLabs Learning</strong>,
              Ben developed frameworks that help teams align around purpose,
              clarity, and commitment.
            </p>
            <p>
              Today he works with organizations to activate teams around
              strategy through storytelling, shared experiences, and practical
              frameworks leaders and team members can apply immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
