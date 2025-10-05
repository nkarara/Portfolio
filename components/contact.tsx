"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

    // Convert FormData to JSON for Web3Forms
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

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">{t.contact.title}</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.description}</p>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto group">
              <a href="mailto:nabilkarara2002@gmail.com?subject=Contact%20from%20Portfolio">
                <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                {t.contact.contactMeButton}
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">{t.contact.orUseForm}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t.contact.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t.contact.sending
                  ) : (
                    <>
                      {t.contact.send}
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.emailLabel}</h3>
                    <a
                      href="mailto:nabilkarara2002@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      nabilkarara2002@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.linkedinLabel}</h3>
                    <a
                      href="https://www.linkedin.com/in/nabil-karara-374552372/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      linkedin.com/in/nabil-karara-374552372
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.githubLabel}</h3>
                    <a
                      href="https://github.com/nkarara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/nkarara
                    </a>
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
