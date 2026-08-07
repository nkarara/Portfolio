"use client"

import { Code2, Database, Laptop, Wrench, Smartphone, Cloud } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Skills() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  const categories = [
    {
      title: t.skills.frontend,
      icon: Laptop,
      skills: ["React", "Angular", "HTML", "CSS", "Bootstrap"],
    },
    {
      title: t.skills.backend,
      icon: Code2,
      skills: ["Node.js", "Spring Boot", "ASP.NET MVC", "Django", "Laravel"],
    },
    {
      title: t.skills.mobile,
      icon: Smartphone,
      skills: ["Java Android"],
    },
    {
      title: t.skills.database,
      icon: Database,
      skills: ["MySQL", "SQL Server", "MongoDB"],
    },
    {
      title: t.skills.cloud,
      icon: Cloud,
      skills: ["Oracle Cloud", "AWS", "Azure", "Git/GitHub", "Docker"],
    },
    {
      title: t.skills.tools,
      icon: Wrench,
      skills: ["Figma", "Agile Scrum", "Solidity", "Smart Contracts"],
    },
  ]

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view sky-section" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        <div className="section-divider mb-24" />

        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="section-label">{t.skills.title}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground mt-2">{t.skills.title}</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="vercel-card p-7 group"
                >
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="p-2.5 bg-blue-500/8 border border-blue-500/10 rounded-xl transition-colors duration-300 group-hover:bg-blue-500/12 dark:bg-blue-500/8 dark:border-blue-500/10">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-[0.9375rem] text-foreground tracking-[-0.01em]">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="tech-tag">
                        {skill}
                      </span>
                    ))}
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
