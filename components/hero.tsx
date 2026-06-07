"use client"

import { ArrowRight, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getImagePath } from "@/lib/utils"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Main Floating Glass Panel */}
        <div className="glass-depth-3 p-8 sm:p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden group">
          <div className="liquid-glass-sheen" aria-hidden="true" />
          
          <div className="grid md:grid-cols-5 gap-12 items-center relative z-10">
            
            {/* Left — Text content, editorial layout */}
            <div className="md:col-span-3 space-y-6 sm:space-y-8 order-2 md:order-1 text-center md:text-left">
              {/* Eyebrow label */}
              <div className="animate-fade-in-up">
                <span className="section-label">{t.hero.greeting}</span>
              </div>

              {/* Main headline */}
              <div className="animate-fade-in-up animate-delay-100">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
                  <span className="text-foreground">KARARA</span>
                  {" "}
                  <span className="gradient-text">Nabil</span>
                </h1>
              </div>

              {/* Role line */}
              <div className="animate-fade-in-up animate-delay-200">
                <p className="text-base sm:text-lg font-medium text-foreground/80">
                  {t.hero.title}
                  <span className="mx-2 text-foreground/25">·</span>
                  <span className="text-primary">{t.hero.subtitle}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0 animate-fade-in-up animate-delay-300">
                {t.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-fade-in-up animate-delay-400">
                <a
                  href={getImagePath("/CV_Nabil_KARARA.pdf")}
                  download="CV_Nabil_KARARA.pdf"
                  className="liquid-btn liquid-btn-primary"
                >
                  <Download className="h-4 w-4" />
                  <span>{t.hero.downloadCV}</span>
                </a>
                
                <a
                  href="#projects"
                  className="liquid-btn liquid-btn-secondary"
                >
                  <span>{t.hero.viewProjects}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right — Profile Image container */}
            <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden glass-depth-2 p-2 border-2 border-white/10 flex items-center justify-center transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="w-full h-full rounded-full overflow-hidden border border-white/15 relative z-10">
                  <img
                    src={getImagePath("/NABIL_Profil.jpg")}
                    alt="KARARA Nabil - Développeur Web & Mobile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
