"use client"

import { Download, GraduationCap, Code2, Briefcase } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"
import { getImagePath } from "@/lib/utils"

export function About() {
  const ref = useScrollAnimation()
  const { t } = useLanguage()

  const highlights = [
    {
      icon: GraduationCap,
      title: t.about.education,
      description: t.about.educationDesc,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Code2,
      title: t.about.expertise,
      description: t.about.expertiseDesc,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Briefcase,
      title: t.about.objective,
      description: t.about.objectiveDesc,
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 fade-in-view" ref={ref}>
      <div className="container mx-auto max-w-5xl space-y-14">

        {/* Section Header */}
        <div>
          <span className="section-label">{t.about.title}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-1">{t.about.title}</h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">{t.about.description1}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{t.about.description2}</p>

            <a
              href={getImagePath("/CV_Nabil_KARARA.pdf")}
              download="CV_Nabil_KARARA.pdf"
              className="liquid-btn liquid-btn-primary inline-flex"
            >
              <Download className="h-4 w-4" />
              <span>{t.about.downloadCV}</span>
            </a>
          </div>

          {/* Right Column - Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="glass-depth-2 p-5 rounded-2xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="liquid-glass-sheen" aria-hidden="true" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`p-3 ${item.bg} rounded-xl flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
