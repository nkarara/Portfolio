"use client"

import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getImagePath } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FeaturedProject() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  const springRHInfo = {
    title: t.projects.springRH.title,
    description: t.projects.springRH.description,
    challenge: t.projects.springRH.challenge,
    solution: t.projects.springRH.solution,
    features: t.projects.springRH.features || [],
    image: "/employee-management-dashboard.png",
    technologies: ["Java", "Spring Boot", "MySQL", "Spring Security", "Thymeleaf"],
    github: "https://github.com/nkarara/employee-management-jee",
  }

  return (
    <section id="featured-project" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl space-y-12">
        
        {/* Section Label */}
        <div>
          <span className="section-label">{t.projects.featuredTitle}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mt-2">
            {springRHInfo.title}
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="vercel-card rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Image Side */}
            <div className="relative group overflow-hidden bg-zinc-950 min-h-[300px] lg:min-h-[500px]">
              <img
                src={getImagePath(springRHInfo.image)}
                alt={springRHInfo.title}
                className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Side */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-8">
              
              {/* Description */}
              <p className="text-base text-zinc-400 leading-relaxed">
                {springRHInfo.description}
              </p>

              {/* Challenge & Solution */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em]">{t.projects.challenge}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{springRHInfo.challenge}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em]">{t.projects.solution}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{springRHInfo.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3 pt-4 border-t border-white/6">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em]">{t.projects.keyFeatures}</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {springRHInfo.features.map((feat: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech + Actions */}
              <div className="space-y-5 pt-4 border-t border-white/6">
                <div className="flex flex-wrap gap-2">
                  {springRHInfo.technologies.map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={springRHInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vercel-btn vercel-btn-secondary text-sm py-2.5 px-5"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t.projects.github}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
