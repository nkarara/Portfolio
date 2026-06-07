"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
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
      value: "linkedin.com/in/nabil-karara-374552372",
      href: "https://www.linkedin.com/in/nabil-karara-374552372/",
    },
    {
      Icon: Github,
      label: t.contact.githubLabel,
      value: "github.com/nkarara",
      href: "https://github.com/nkarara",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl space-y-14">

        {/* Section Header */}
        <div className="text-center">
          <span className="section-label">{t.contact.title}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-1">{t.contact.title}</h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">{t.contact.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-depth-3 p-7 sm:p-9 rounded-3xl relative overflow-hidden">
            <div className="liquid-glass-sheen" aria-hidden="true" />
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  required
                  className="glass-input h-11 px-4 text-sm w-full text-foreground placeholder:text-muted-foreground/50 border-foreground/10"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  required
                  className="glass-input h-11 px-4 text-sm w-full text-foreground placeholder:text-muted-foreground/50 border-foreground/10"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  required
                  className="glass-input px-4 py-3 text-sm w-full resize-none text-foreground placeholder:text-muted-foreground/50 border-foreground/10"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="liquid-btn liquid-btn-primary w-full"
              >
                {isSubmitting ? (
                  <span className="opacity-70">{t.contact.sending}</span>
                ) : (
                  <>
                    <span>{t.contact.send}</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4 flex flex-col justify-center">
            {contactLinks.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-depth-2 p-5 rounded-2xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="liquid-glass-sheen" aria-hidden="true" />
                <div className="flex items-start gap-4 relative z-20">
                  <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0 border border-foreground/5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
