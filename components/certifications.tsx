"use client"

import { ExternalLink, ImageIcon, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">{t.certifications.title}</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">{t.certifications.description}</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:border-primary hover:shadow-lg transition-all duration-300 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-32 h-32 rounded-lg overflow-hidden bg-muted flex items-center justify-center border-2 border-muted-foreground/20 cursor-pointer hover:border-primary transition-colors"
                      onClick={() => cert.image && setSelectedImage(cert.image)}
                    >
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageIcon className="h-6 w-6 text-muted-foreground/30" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                    <Button asChild variant="outline" size="sm" className="group/btn bg-transparent">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        {t.certifications.viewCertification}
                        <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Certification"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
