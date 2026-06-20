"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Send, ArrowUpRight, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const ref = useScrollAnimation()
  const { toast } = useToast()
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const object: Record<string, string> = {}
    formData.forEach((value, key) => {
      object[key] = value.toString()
    })
    object.access_key = "20269919-5751-4ba2-8c2b-d08ca1f6c44d"
    object.subject = "New Contact Form Submission from Portfolio"

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(object),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: t.contact.successTitle,
          description: t.contact.successDescription,
        })
        form.reset()
      } else {
        throw new Error(data.message || "Form submission failed")
      }
    } catch (error) {
      toast({
        title: t.contact.errorTitle,
        description: t.contact.errorDescription,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    {
      Icon: Mail,
      label: t.contact.emailLabel,
      value: "nabilkarara2002@gmail.com",
      href: "mailto:nabilkarara2002@gmail.com",
    },
    {
      Icon: Linkedin,
      label: t.contact.linkedinLabel,
      value: "linkedin.com/in/nabil-karara",
      href: "https://www.linkedin.com/in/nabil-karara-374552372/",
    },
    {
      Icon: Github,
      label: t.contact.githubLabel,
      value: "github.com/nkarara",
      href: "https://github.com/nkarara",
    },
    {
      Icon: MapPin,
      label: t.contact.locationLabel,
      value: t.contact.locationValue,
      href: "https://www.google.com/maps/place/Casablanca,+Morocco",
    },
  ]

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 fade-in-view sky-section" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        <div className="section-divider mb-24" />

        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-5">
            <div>
              <span className="section-label">{t.contact.title}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground mt-2">{t.contact.title}</h2>
            </div>
            
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">{t.contact.description}</p>
            
            {/* Availability Badge */}
            <div className="flex items-center justify-center gap-2.5 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[0.6875rem] font-semibold text-emerald-400 uppercase tracking-[0.15em]">
                {t.contact.status}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="vercel-card p-7 sm:p-9 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    {t.contact.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="vercel-input h-12 px-4 text-sm w-full text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    {t.contact.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="vercel-input h-12 px-4 text-sm w-full text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    required
                    className="vercel-input px-4 py-3.5 text-sm w-full resize-none text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="vercel-btn vercel-btn-accent w-full py-3 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="opacity-70">{t.contact.sending}</span>
                  ) : (
                    <>
                      <span>{t.contact.send}</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 flex flex-col justify-center">
              {contactLinks.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vercel-card p-5 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/3 border border-border rounded-xl flex-shrink-0 transition-all duration-300 group-hover:bg-blue-500/8 group-hover:border-blue-500/15 dark:bg-white/3">
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.6875rem] font-semibold text-muted-foreground/75 uppercase tracking-[0.12em] mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200 truncate">{value}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/45 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
