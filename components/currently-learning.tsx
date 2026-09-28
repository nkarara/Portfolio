"use client"

import { Box, GitBranch, Cloud } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CurrentlyLearning() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  const items = [
    { icon: Box, title: t.learning.docker.title, description: t.learning.docker.description },
    { icon: GitBranch, title: t.learning.cicd.title, description: t.learning.cicd.description },
    { icon: Cloud, title: t.learning.cloud.title, description: t.learning.cloud.description },
  ]

  return (
    <section id="learning" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view sky-section" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        <div className="section-divider mb-24" />

        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="section-label">{t.learning.title}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground mt-2">
              {t.learning.title}
            </h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">{t.learning.description}</p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-5">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="vercel-card p-7 space-y-4 group">
                  <div className="p-3 bg-blue-500/8 border border-blue-500/10 rounded-xl w-fit transition-colors duration-300 group-hover:bg-blue-500/12">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-[0.9375rem] text-foreground tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
