"use client"

import { Github, ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react"
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
      title: t.projects.connectify.title,
      description: t.projects.connectify.description,
      image: "/connectify1.jpg",
      gallery: ["/connectify1.jpg", "/connectify2.jpg", "/connectify3.jpg", "/connectify4.jpg", "/connectify5.jpg", "/connectify6.jpg", "/connectify7.jpg", "/connectify8.jpg", "/connectify9.jpg"],
      technologies: ["React", "Node.js", "MySQL"],
      github: "https://github.com/nkarara/Social-Medial-APP",
    },
    {
      title: t.projects.gestionEmployes.title,
      description: t.projects.gestionEmployes.description,
      image: "/employee-management-dashboard.png",
      technologies: ["JEE", "Spring Boot", "H2"],
      github: "https://github.com/nkarara/employee-management-jee",
    },
    {
      title: t.projects.transRoto.title,
      description: t.projects.transRoto.description,
      image: "/logistics-tracking-app.png",
      technologies: ["React", "Node.js", "MySQL", "OpenStreetMap"],
      github: "https://github.com/nkarara/trans-roto",
    },
    {
      title: t.projects.androidApp.title,
      description: t.projects.androidApp.description,
      image: "/employee-management-dashboard.png",
      technologies: ["Java", "Android", "Firebase"],
      github: "https://github.com/nkarara/employee-management-app",
    },
    {
      title: t.projects.dotnetApp.title,
      description: t.projects.dotnetApp.description,
      image: "/asp.png",
      gallery: ["/asp1.png", "/asp2.png", "/asp3.png", "/asp5.png", "/asp6.png", "/asp7.png", "/asp8.png"],
      technologies: ["C#", "ASP.NET", "SQL Server"],
      github: "https://github.com/nkarara/employee-management-dotnet",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 fade-in-view" ref={ref}>
      <div className="container mx-auto max-w-5xl space-y-14">

        {/* Section Header */}
        <div>
          <span className="section-label">{t.projects.title}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-1">{t.projects.title}</h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl">{t.projects.description}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-depth-2 rounded-2xl overflow-hidden group hover:border-primary/30 hover:scale-[1.015] transition-all duration-300 relative"
            >
              {/* Project Image */}
              <div
                className={`relative h-48 overflow-hidden bg-muted ${project.gallery ? "cursor-pointer" : ""}`}
                onClick={() => project.gallery && openGallery(index, 0)}
              >
                {project.image ? (
                  <>
                    <img
                      src={getImagePath(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.gallery && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <ImageIcon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <ImageIcon className="h-12 w-12 text-muted-foreground/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Gallery Thumbnails */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {project.gallery.slice(0, 3).map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer border border-white/10 hover:border-primary/50 transition-colors"
                        onClick={() => openGallery(index, imgIndex)}
                      >
                        <img
                          src={getImagePath(img)}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform"
                        />
                      </div>
                    ))}
                    {project.gallery.length > 3 && (
                      <div
                        className="flex items-center text-xs text-muted-foreground/60 cursor-pointer hover:text-primary transition-colors px-2"
                        onClick={() => openGallery(index, 3)}
                      >
                        +{project.gallery.length - 3} {t.projects.viewGallery}
                      </div>
                    )}
                  </div>
                )}

                {/* Tech Tags */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="glass-depth-1 text-xs font-medium text-foreground/80 px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-btn liquid-btn-secondary text-xs py-2 px-4"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>{t.projects.github}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedProject !== null && projects[selectedProject].gallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(24px)" }}
          onClick={closeGallery}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 p-2.5 glass-depth-2 rounded-full text-white hover:border-white/30 transition-all"
            onClick={closeGallery}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-depth-2 rounded-full text-white hover:border-white/30 transition-all"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[88vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImagePath(projects[selectedProject].gallery![currentImageIndex])}
              alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain rounded-2xl"
            />
            <p className="text-center text-white/60 text-sm mt-3">
              {currentImageIndex + 1} / {projects[selectedProject].gallery!.length}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-depth-2 rounded-full text-white hover:border-white/30 transition-all"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
