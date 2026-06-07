"use client"

import { ExternalLink, ImageIcon, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getImagePath } from "@/lib/utils"
import { useState } from "react"

export function Certifications() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl space-y-14">

        {/* Section Header */}
        <div>
          <span className="section-label">{t.certifications.title}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-1">{t.certifications.title}</h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl">{t.certifications.description}</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-depth-2 p-6 rounded-2xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="liquid-glass-sheen" aria-hidden="true" />
              <div className="flex gap-4 relative z-10">
                {/* Thumbnail */}
                <div className="flex-shrink-0">
                  <div
                    className="w-28 h-28 rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => cert.image && setSelectedImage(cert.image)}
                  >
                    {cert.image ? (
                      <img
                        src={getImagePath(cert.image)}
                        alt={cert.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-muted">
                        <ImageIcon className="h-6 w-6 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2.5">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-colors"
                  >
                    {t.certifications.viewCertification}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(24px)" }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 p-2.5 glass-depth-2 rounded-full text-white hover:border-white/30 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImagePath(selectedImage)}
              alt="Certification"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
