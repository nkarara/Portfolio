"use client"

import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center opacity-0 animate-fade-in-up order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/NABIL_Profil.jpg"
                  alt="KARARA Nabil - Développeur Web & Mobile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in-up animate-delay-200 order-1 md:order-2">
            <div className="space-y-2">
              <p className="text-primary text-sm font-mono">{t.hero.greeting}</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">KARARA Nabil</h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">{t.hero.title}</h2>
              <p className="text-xl text-primary">{t.hero.subtitle}</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">{t.hero.description}</p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <a href="/CV.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  {t.hero.downloadCV}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group bg-transparent">
                <a href="#contact">
                  {t.hero.contactMe}
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">{t.hero.viewProjects}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
