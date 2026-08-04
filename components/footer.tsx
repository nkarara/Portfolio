"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getNavPath } from "@/lib/utils"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socials = [
    { Icon: Github, href: "https://github.com/nkarara", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/nabil-karara-374552372/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:nabilkarara2002@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: t.nav.about, href: getNavPath("/#about") },
    { name: t.nav.projects, href: getNavPath("/#projects") },
    { name: t.nav.experience, href: getNavPath("/#experience") },
    { name: t.nav.certifications, href: getNavPath("/#certifications") },
    { name: t.nav.contact, href: getNavPath("/#contact") },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/60 backdrop-blur-md sky-section">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-foreground tracking-[-0.01em]">Nabil Karara</p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              © {currentYear} — {t.footer.rights}
            </p>
          </div>

          {/* Quick Nav */}
          <nav aria-label={t.footer.quickNav} className="flex flex-col items-center md:items-start gap-2">
            <span className="text-[0.6875rem] font-semibold text-muted-foreground/60 uppercase tracking-[0.15em] mb-1">
              {t.footer.quickNav}
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Social Links + Back to top */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 border border-border hover:border-muted-foreground/30 bg-card hover:bg-muted rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
              title={t.footer.backToTop}
              className="p-2.5 border border-border hover:border-primary/40 bg-card hover:bg-muted rounded-xl text-muted-foreground hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  )
}
