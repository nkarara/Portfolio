import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { Icon: Github, href: "https://github.com/nkarara", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/nabil-karara-374552372/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:nabilkarara2002@gmail.com", label: "Email" },
  ]

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/5 mt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold gradient-text">KARARA Nabil</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              © {currentYear} — All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 glass-depth-1 rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
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
