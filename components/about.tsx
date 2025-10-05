"use client"

import { Download, GraduationCap, Code2, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const ref = useScrollAnimation()
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 fade-in-view" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">{t.about.title}</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{t.about.description1}</p>

              <p className="text-lg text-muted-foreground leading-relaxed">{t.about.description2}</p>

              <Button asChild size="lg" className="group">
                <a href="/CV.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  {t.about.downloadCV}
                </a>
              </Button>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-4">
              <Card className="p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.about.education}</h3>
                    <p className="text-muted-foreground">{t.about.educationDesc}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-accent hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.about.expertise}</h3>
                    <p className="text-muted-foreground">{t.about.expertiseDesc}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.about.objective}</h3>
                    <p className="text-muted-foreground">{t.about.objectiveDesc}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
