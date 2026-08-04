"use client"

import { ExternalLink, ImageIcon, X, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getImagePath } from "@/lib/utils"
import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Certifications() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedImage) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  const certifications = [
    {
      title: t.certifications.oracle.title,
      issuer: t.certifications.oracle.issuer,
      date: t.certifications.oracle.date,
      description: t.certifications.oracle.description,
      image: "/Oracle Cloud Infrastructure 2025 Certified DevOps Professional.jpg",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AEC7691370C64D940810BC7D3B43E2F529481A4C39D147A44A9EC249D3F458A9",
    },
    {
      title: t.certifications.javaOOP.title,
      issuer: t.certifications.javaOOP.issuer,
      date: t.certifications.javaOOP.date,
      description: t.certifications.javaOOP.description,
      image: "/Introduction to Java and Object-Oriented Programming.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/YQ1TBLOSAJ1A",
    },
    {
      title: t.certifications.reactBasics.title,
      issuer: t.certifications.reactBasics.issuer,
      date: t.certifications.reactBasics.date,
      description: t.certifications.reactBasics.description,
      image: "/React Basics.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/9AWJ60YCW7Q5",
    },
    {
      title: t.certifications.azureNetworks.title,
      issuer: t.certifications.azureNetworks.issuer,
      date: t.certifications.azureNetworks.date,
      description: t.certifications.azureNetworks.description,
      image: "/Virtual Networks in Azure.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/CBM55NRMOS71",
    },
  ]

  return (
    <section id="certifications" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view sky-section" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        <div className="section-divider mb-24" />

        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="section-label">{t.certifications.title}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground mt-2">
              {t.certifications.title}
            </h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">{t.certifications.description}</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <div key={index} className="vercel-card p-6 group">
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <button
                    type="button"
                    className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-border cursor-pointer transition-colors duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    onClick={() => cert.image && setSelectedImage(cert.image)}
                    aria-label={`${t.certifications.viewCertification}: ${cert.title}`}
                  >
                    {cert.image ? (
                      <img
                        src={getImagePath(cert.image)}
                        alt={`${cert.title} certificate`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-muted">
                        <ImageIcon className="h-6 w-6 text-muted-foreground/30" aria-hidden="true" />
                      </div>
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-sm text-foreground leading-snug tracking-[-0.01em]">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
                    >
                      {t.certifications.viewCertification}
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 p-2.5 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            onClick={() => setSelectedImage(null)}
            aria-label="Close certificate preview"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImagePath(selectedImage)}
              alt="Certificate"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
