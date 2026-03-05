"use client"

import { useState } from "react"
import { Lightbulb, MessageCircle, Flame, Sparkles } from "lucide-react"

const tabs = [
  {
    label: "Clarity",
    icon: Lightbulb,
    title: "Clarity",
    impact: "Teams understand how their role connects to the company mission.",
    body: "Clarity allows employees to see how their work contributes to the bigger picture and the outcomes the organization is trying to achieve. When teams reconnect their daily work to the mission, alignment and momentum increase across the organization.",
  },
  {
    label: "Communication",
    icon: MessageCircle,
    title: "Communication",
    impact: "Teams develop a shared language around engagement.",
    body: "Communication helps organizations openly discuss motivation, alignment, and priorities. When teams communicate clearly about engagement and expectations, collaboration becomes easier and trust increases.",
  },
  {
    label: "Commitment",
    icon: Flame,
    title: "Commitment",
    impact:
      "Employees choose the level of energy they bring to the mission.",
    body: "Commitment focuses on the personal decision employees make about how they show up for their work. When individuals consciously choose to bring their energy to the mission, organizations unlock stronger performance and culture.",
  },
  {
    label: "What You Walk Away With",
    icon: Sparkles,
    title: "What Teams Walk Away With",
    impact:
      "A practical framework teams can use long after the keynote.",
    body: "Participants leave with tools and language that help them reconnect to the strategy and mission. The Activation Framework gives teams a shared structure for turning engagement into real execution.",
  },
]

export function Framework() {
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <section id="keynote" className="relative bg-primary">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            The Keynote
          </p>
          <h2 className="mt-4 font-heading text-4xl font-800 tracking-tight text-primary-foreground md:text-5xl">
            The Activation Framework
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, i) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  active === i
                    ? "bg-card text-primary shadow-lg"
                    : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content card */}
        <div className="mt-10 rounded-2xl bg-card p-8 shadow-2xl md:p-12">
          <h3 className="font-heading text-2xl font-bold text-card-foreground md:text-3xl">
            {current.title}
          </h3>
          <p className="mt-4 text-lg text-card-foreground">
            <strong>Impact:</strong> {current.impact}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {current.body}
          </p>
        </div>
      </div>
    </section>
  )
}
