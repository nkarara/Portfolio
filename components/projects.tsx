"use client"

import { Github, ImageIcon, X, ChevronLeft, ChevronRight, ChevronDown, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getImagePath } from "@/lib/utils"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Projects() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openGallery = (projectIndex: number, imageIndex: number = 0) => {
    setSelectedProject(projectIndex)
    setCurrentImageIndex(imageIndex)
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject !== null && projects[selectedProject].gallery) {
      setCurrentImageIndex((prev) =>
        prev < projects[selectedProject].gallery!.length - 1 ? prev + 1 : 0
      )
    }
  }

  const prevImage = () => {
    if (selectedProject !== null && projects[selectedProject].gallery) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : projects[selectedProject].gallery!.length - 1
      )
    }
  }

  const projects = [
    {
      key: "springRH",
      image: "/employee-management-dashboard.png",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "https://github.com/nkarara/employee-management-jee",
      demo: null
    },
    {
      key: "employeeManagement",
      image: "/asp.png",
      technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework"],
      github: "https://github.com/nkarara/employee-management-dotnet",
      demo: null
    },
    {
      key: "socialNetwork",
      image: "/connectify1.jpg",
      gallery: ["/connectify1.jpg", "/connectify2.jpg", "/connectify3.jpg", "/connectify4.jpg", "/connectify5.jpg", "/connectify6.jpg", "/connectify7.jpg", "/connectify8.jpg", "/connectify9.jpg"],
      technologies: ["React", "Node.js", "Express", "MySQL", "WebSockets"],
      github: "https://github.com/nkarara/Social-Medial-APP",
      demo: null
    },
    {
      key: "androidFirebase",
      image: "/employee-management-dashboard.png",
      technologies: ["Java", "Android SDK", "Firebase RTDB"],
      github: "https://github.com/nkarara/employee-management-app",
      demo: null
    },
    {
      key: "appRO",
      image: "/logistics-tracking-app.png",
      technologies: ["Java", "JavaFX", "Operations Research", "Graph Theory"],
      github: "https://github.com/nkarara/trans-roto",
      demo: null
    }
  ]

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        <div className="section-divider mb-24" />

        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="section-label">{t.projects.title}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground mt-2">{t.projects.title}</h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">{t.projects.description}</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, index) => {
              const projTrans = (t.projects as any)[project.key]
              if (!projTrans) return null

              return (
                <div
                  key={index}
                  className="vercel-card rounded-2xl overflow-hidden group flex flex-col h-full"
                >
                  {/* Image */}
                  <div
                    className={`relative h-52 overflow-hidden bg-muted/30 ${project.gallery ? "cursor-pointer" : ""}`}
                    onClick={() => project.gallery && openGallery(index, 0)}
                  >
                    {project.image ? (
                      <>
                        <img
                          src={getImagePath(project.image)}
                          alt={projTrans.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {project.gallery && (
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <ImageIcon className="h-10 w-10 text-zinc-800" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 tracking-[-0.01em]">
                        {projTrans.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{projTrans.description}</p>
                      
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag text-xs !py-1 !px-2.5">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Details */}
                      <details className="group/details border-t border-border pt-4 mt-2">
                        <summary className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer select-none py-1 transition-colors duration-200">
                          <span>{t.projects.keyFeatures} & Details</span>
                          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-open/details:rotate-180" />
                        </summary>
                        
                        <div className="mt-4 space-y-4 text-sm">
                          <div>
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-[0.15em] mb-1.5">{t.projects.challenge}</h4>
                            <p className="text-muted-foreground leading-relaxed text-[0.8125rem]">{projTrans.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-[0.15em] mb-1.5">{t.projects.solution}</h4>
                            <p className="text-muted-foreground leading-relaxed text-[0.8125rem]">{projTrans.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-[0.15em] mb-1.5">{t.projects.keyFeatures}</h4>
                            <ul className="space-y-1.5 mt-2">
                              {projTrans.features && projTrans.features.map((feat: string, i: number) => (
                                <li key={i} className="flex items-center gap-2.5 text-muted-foreground text-[0.8125rem]">
                                  <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vercel-btn vercel-btn-secondary text-xs py-2.5 px-5 flex-1"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>{t.projects.github}</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="vercel-btn vercel-btn-primary text-xs py-2.5 px-5 flex-1"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>{t.projects.liveDemo}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject !== null && projects[selectedProject].gallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          onClick={closeGallery}
        >
          <button
            className="absolute top-6 right-6 p-2.5 bg-white/5 border border-white/8 rounded-full text-white hover:bg-white/10 transition-all"
            onClick={closeGallery}
          >
            <X className="h-5 w-5" />
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/5 border border-white/8 rounded-full text-white hover:bg-white/10 transition-all"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImagePath(projects[selectedProject].gallery![currentImageIndex])}
              alt={`${projects[selectedProject].key} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[78vh] object-contain rounded-xl border border-white/6 shadow-2xl"
            />
            <p className="text-zinc-600 text-xs mt-4 font-mono tracking-wider">
              {currentImageIndex + 1} / {projects[selectedProject].gallery!.length}
            </p>
          </div>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/5 border border-white/8 rounded-full text-white hover:bg-white/10 transition-all"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
