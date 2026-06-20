"use client"

import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Experience() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  const items = [
    {
      key: "tgv",
      role: t.experience.tgv.role,
      company: t.experience.tgv.company,
      date: t.experience.tgv.date,
      points: t.experience.tgv.points,
    },
    {
      key: "academic",
      role: t.experience.academic.role,
      company: t.experience.academic.company,
      date: t.experience.academic.date,
      points: t.experience.academic.points,
    },
    {
      key: "studies",
      role: t.experience.studies.role,
      company: t.experience.studies.company,
      date: t.experience.studies.date,
      points: t.experience.studies.points,
    },
  ]

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        <div className="section-divider mb-24" />

        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="section-label">{t.experience.title}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground mt-2">{t.experience.title}</h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">{t.experience.description}</p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl ml-0 lg:ml-8">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/30 via-border to-transparent" />

            <div className="space-y-12">
              {items.map((item, index) => (
                <div key={index} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-border bg-background flex items-center justify-center transition-all duration-400 group-hover:border-blue-500">
                    <div className="w-[5px] h-[5px] rounded-full bg-muted-foreground/60 transition-colors duration-400 group-hover:bg-blue-500" />
                  </div>

                  {/* Card */}
                  <div className="vercel-card p-6 sm:p-8 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-foreground tracking-[-0.01em]">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-medium px-3 py-1.5 bg-card border border-border text-muted-foreground rounded-lg w-fit whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {item.points.map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/60 mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
