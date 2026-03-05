import Image from "next/image"

export function Problem() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Images grid */}
          <div className="grid w-full max-w-md grid-cols-2 gap-4 lg:max-w-lg">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/team-1.png"
                  alt="Team collaborating with sticky notes on a glass wall"
                  width={400}
                  height={500}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/team-4.png"
                  alt="Team members in a creative discussion around a whiteboard"
                  width={400}
                  height={400}
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/team-2.png"
                  alt="Colleagues collaborating in a modern office"
                  width={400}
                  height={400}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/team-3.png"
                  alt="Team in a meeting room with remote participants on screen"
                  width={400}
                  height={500}
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              The Problem
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">
                You have the strategy. You have the OKRs.
              </span>
            </h2>
            <p className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">
              Do you have the team activated to deliver it?
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Companies invest enormous time in strategy. But strategy alone
              doesn{"'"}t move the mission forward. Execution happens when people
              feel personally connected to the work ahead.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              When employees are passively participating instead of actively
              owning, even the best strategy stalls. The gap isn{"'"}t in the
              plan -- it{"'"}s in the people.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
