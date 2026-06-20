import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { Icon: Github, href: "https://github.com/nkarara", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/nabil-karara-374552372/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:nabilkarara2002@gmail.com", label: "Email" },
  ]

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-foreground tracking-[-0.01em]">Nabil Karara</p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              © {currentYear} — All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 border border-border hover:border-muted-foreground/30 bg-card hover:bg-muted rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
