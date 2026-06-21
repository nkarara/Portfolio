"use client"

import { ArrowRight, Download, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getImagePath } from "@/lib/utils"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8 sky-section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left — Editorial text block */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="animate-fade-in-up" style={{ animationFillMode: 'both' }}>
              <span className="section-label">{t.hero.greeting}</span>
            </div>

            {/* Name — cinematic large type */}
            <div className="animate-fade-in-up animate-delay-100 space-y-2" style={{ animationFillMode: 'both' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.04em] leading-[0.95]">
                <span className="text-foreground">Nabil</span>
                <br />
                <span className="gradient-text-hero">Karara</span>
              </h1>
            </div>

            {/* Role */}
            <div className="animate-fade-in-up animate-delay-200" style={{ animationFillMode: 'both' }}>
              <p className="text-lg sm:text-xl font-medium text-muted-foreground tracking-[-0.01em]">
                {t.hero.title} <span className="opacity-40">&</span> {t.hero.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up animate-delay-300" style={{ animationFillMode: 'both' }}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-in-up animate-delay-400" style={{ animationFillMode: 'both' }}>
              <a
                href="#projects"
                className="vercel-btn vercel-btn-primary py-3 px-6"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={getImagePath("/CV_Nabil_KARARA.pdf")}
                download="CV_Nabil_KARARA.pdf"
                className="vercel-btn vercel-btn-secondary py-3 px-6"
              >
                <Download className="h-4 w-4" />
                <span>{t.hero.downloadCV}</span>
              </a>

              <a
                href="https://github.com/nkarara"
                target="_blank"
                rel="noopener noreferrer"
                className="vercel-btn vercel-btn-secondary py-3 px-6"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right — Premium 3D character scene */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center animate-fade-in animate-delay-300" style={{ animationFillMode: 'both' }}>
            <div className="hero-3d-scene relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Soft blue ambient glow */}
              <div className="absolute inset-0 hero-glow-bg rounded-3xl" />
              {/* 3D character illustration */}
              <img
                src={getImagePath("/hero-3d-character.png")}
                alt="3D software engineer character"
                className="relative z-10 w-full h-auto hero-3d-float hero-3d-avatar"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-600" style={{ animationFillMode: 'both' }}>
        <div className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2">
          <div className="w-1 h-2.5 bg-foreground/30 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
