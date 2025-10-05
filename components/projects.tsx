"use client"

import { ExternalLink, Github, ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export function Projects() {
  const { t } = useLanguage()
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">{t.projects.title}</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">{t.projects.description}</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:border-primary hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div 
                  className="relative h-48 overflow-hidden bg-muted cursor-pointer group/image"
                  onClick={() => project.gallery && openGallery(index, 0)}
                >
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover/image:scale-110"
                      />
                      {project.gallery && (
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors flex items-center justify-center">
                          <ImageIcon className="h-12 w-12 text-white opacity-0 group-hover/image:opacity-100 transition-opacity" />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center space-y-2">
                        <ImageIcon className="h-12 w-12 text-muted-foreground/40 mx-auto" />
                        <p className="text-sm text-muted-foreground/60">Main Screenshot</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {project.gallery && project.gallery.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {project.gallery.slice(0, 3).map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="w-16 h-16 rounded border-2 border-muted-foreground/20 overflow-hidden flex-shrink-0 cursor-pointer hover:border-primary transition-colors"
                          onClick={() => openGallery(index, imgIndex)}
                        >
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform"
                          />
                        </div>
                      ))}
                      {project.gallery.length > 3 && (
                        <div 
                          className="flex items-center text-xs text-muted-foreground/50 ml-2 cursor-pointer hover:text-primary transition-colors"
                          onClick={() => openGallery(index, 3)}
                        >
                          +{project.gallery.length - 3} {t.projects.viewGallery}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button asChild variant="outline" size="sm" className="group/btn bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        {t.projects.github}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedProject !== null && projects[selectedProject].gallery && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeGallery}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[selectedProject].gallery![currentImageIndex]}
              alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            <div className="text-center text-white mt-4">
              <p className="text-sm">
                {currentImageIndex + 1} / {projects[selectedProject].gallery!.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
