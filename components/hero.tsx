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

          {/* Right — Interactive 3D Orbiting System */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center animate-fade-in animate-delay-300" style={{ animationFillMode: 'both' }}>
            <div className="orbit-system-container">
              
              {/* Outer Glow Background */}
              <div className="absolute inset-0 hero-glow-bg rounded-full scale-90 pointer-events-none" />

              {/* 3D Orbiting Rings */}
              {/* Ring 1 (Inner) */}
              <div className="orbit-ring-wrapper orbit-ring-1">
                <svg className="orbit-svg-ring" viewBox="0 0 400 400">
                  <ellipse cx="200" cy="200" rx="125" ry="125" className="orbit-ellipse-line" />
                </svg>
                {/* Orbiting Cards for Ring 1 */}
                <div className="orbit-card orbit-card-ring1-1">
                  <svg viewBox="-11.5 -10.23 23 20.46" className="h-4 w-4 text-[#61DAFB] orbit-icon-glow" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                    <g stroke="currentColor" strokeWidth="1.2" fill="none">
                      <ellipse rx="11" ry="4.2"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                  </svg>
                  <span>React</span>
                </div>
                <div className="orbit-card orbit-card-ring1-2">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#00758F] orbit-icon-glow" fill="none" stroke="currentColor" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="12" cy="5" rx="8" ry="3"/>
                    <path d="M4 5v6c0 1.66 4 3 8 3s8-1.34 8-3V5"/>
                    <path d="M4 11v6c0 1.66 4 3 8 3s8-1.34 8-3v-6"/>
                  </svg>
                  <span>MySQL</span>
                </div>
              </div>

              {/* Ring 2 (Middle) */}
              <div className="orbit-ring-wrapper orbit-ring-2">
                <svg className="orbit-svg-ring" viewBox="0 0 400 400">
                  <ellipse cx="200" cy="200" rx="185" ry="185" className="orbit-ellipse-line" />
                </svg>
                {/* Orbiting Cards for Ring 2 */}
                <div className="orbit-card orbit-card-ring2-1">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#E76F51] orbit-icon-glow" fill="none" stroke="currentColor" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8h10M6 12h8M6 16h6" strokeLinecap="round"/>
                    <path d="M18 8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2" strokeLinecap="round"/>
                    <path d="M14 4s2 2 1 4-3 1-3 3 2 2 2 4-2 2-2 2" strokeLinecap="round"/>
                  </svg>
                  <span>Java</span>
                </div>
                <div className="orbit-card orbit-card-ring2-2">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#6DB33F] orbit-icon-glow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.67 15.35c-.48.48-1.12.72-1.76.72s-1.28-.24-1.76-.72l-4.14-4.14a2.49 2.49 0 0 1 0-3.52l4.14-4.14a2.49 2.49 0 0 1 3.52 0l4.14 4.14a2.49 2.49 0 0 1 0 3.52l-4.14 4.14z"/>
                    <path d="M12.5 7.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill="white"/>
                  </svg>
                  <span>Spring Boot</span>
                </div>
                <div className="orbit-card orbit-card-ring2-3">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#47A248] orbit-icon-glow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1.5c-.3 0-.5.2-.6.4C10.5 4.3 6 10 6 13.5c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.5-4.5-9.2-5.4-11.6-.1-.2-.3-.4-.6-.4zm0 2.2c.7 2 3.8 6.9 3.8 9.8 0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8c0-2.9 3.1-7.8 3.8-9.8z"/>
                  </svg>
                  <span>MongoDB</span>
                </div>
              </div>

              {/* Ring 3 (Outer) */}
              <div className="orbit-ring-wrapper orbit-ring-3">
                <svg className="orbit-svg-ring" viewBox="0 0 400 400">
                  <ellipse cx="200" cy="200" rx="245" ry="245" className="orbit-ellipse-line" />
                </svg>
                {/* Orbiting Cards for Ring 3 */}
                <div className="orbit-card orbit-card-ring3-1">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#512BD4] orbit-icon-glow" fill="none" stroke="currentColor" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>ASP.NET</span>
                </div>
                <div className="orbit-card orbit-card-ring3-2">
                  <Github className="h-4 w-4 text-foreground/80 orbit-icon-glow" />
                  <span>GitHub</span>
                </div>
              </div>

              {/* Centered Avatar Image */}
              <div className="orbit-center-avatar-wrapper">
                <img
                  src={getImagePath("/hero-3d-character.png")}
                  alt="3D software engineer character avatar"
                  className="relative z-10 w-full h-auto hero-3d-float hero-3d-avatar select-none pointer-events-none"
                  loading="eager"
                />
              </div>

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
