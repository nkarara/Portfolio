"use client"

import { Download, Code2, Lightbulb, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"
import { getImagePath } from "@/lib/utils"

export function About() {
  const ref = useScrollAnimation()
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Code2,
      title: t.about.expertise,
      description: t.about.expertiseDesc,
    },
    {
      icon: Lightbulb,
      title: t.skills.problemSolving,
      description: t.skills.problemSolvingDesc,
    },
    {
      icon: Zap,
      title: t.skills.continuousLearning,
      description: t.skills.continuousLearningDesc,
    },
  ]

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view sky-section" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        {/* Section divider */}
        <div className="section-divider mb-24" />

        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="section-label">{t.about.title}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground mt-2">
              {t.about.title}
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left — Text */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-base text-muted-foreground leading-[1.8]">{t.about.description1}</p>
              <p className="text-base text-muted-foreground/80 leading-[1.8]">{t.about.description2}</p>

              <div className="pt-4">
                <a
                  href={getImagePath("/CV_Nabil_KARARA.pdf")}
                  download="CV_Nabil_KARARA.pdf"
                  className="vercel-btn vercel-btn-secondary inline-flex"
                >
                  <Download className="h-4 w-4" />
                  <span>{t.about.downloadCV}</span>
                </a>
              </div>
            </div>

            {/* Right — Highlight cards */}
            <div className="lg:col-span-3 space-y-4">
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="vercel-card p-6 flex items-start gap-5 group"
                  >
                    <div className="p-3 bg-blue-500/8 border border-blue-500/10 rounded-xl flex-shrink-0 transition-colors duration-300 group-hover:bg-blue-500/12 dark:bg-blue-500/8 dark:border-blue-500/10">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-semibold text-[0.9375rem] text-foreground tracking-[-0.01em]">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
