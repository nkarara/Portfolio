"use client"

import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Education() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  const items = [
    {
      key: "master",
      title: t.education.master.title,
      school: t.education.master.school,
      date: t.education.master.date,
      description: t.education.master.description,
    },
    {
      key: "licence",
      title: t.education.licence.title,
      school: t.education.licence.school,
      date: t.education.licence.date,
      description: t.education.licence.description,
    },
  ]

  return (
    <section id="education" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        <div className="section-divider mb-24" />

        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="section-label">{t.education.title}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground mt-2">{t.education.title}</h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">{t.education.description}</p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {items.map((item, index) => (
              <div key={index} className="vercel-card p-7 sm:p-9 flex flex-col justify-between gap-8 group">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/8 border border-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0 transition-colors duration-300 group-hover:bg-blue-500/12">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground tracking-[-0.01em] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {item.school}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <span className="text-xs font-mono font-medium px-3 py-1.5 bg-card border border-border text-muted-foreground rounded-lg w-fit">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
