"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { getNavPath } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("/")
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ["about", "projects", "skills", "certifications", "contact"]
      const scrollY = window.scrollY + 160

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(`/#${id}`)
          return
        }
      }
      if (window.scrollY < 100) setActiveSection("/")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home,           href: getNavPath("/") },
    { name: t.nav.about,          href: getNavPath("/#about") },
    { name: t.nav.projects,       href: getNavPath("/#projects") },
    { name: t.nav.skills,         href: getNavPath("/#skills") },
    { name: t.nav.certifications, href: getNavPath("/#certifications") },
    { name: t.nav.contact,        href: getNavPath("/#contact") },
  ]

  const isActive = (href: string) => {
    if (href.endsWith("/") && activeSection === "/") return true;
    return activeSection === href || (href.includes("/#") && activeSection.endsWith(href.substring(href.indexOf("/#"))));
  }

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        isScrolled ? "translate-y-1" : ""
      }`}
    >
      <div
        className={`w-full max-w-5xl rounded-full glass-depth-1 flex items-center justify-between px-6 py-2.5 h-14 transition-all duration-300 ${
          isScrolled ? "shadow-lg border-white/20 bg-background/50" : ""
        }`}
      >
        <a href={getNavPath("/")} className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity">
          KARARA Nabil
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  active
                    ? "bg-primary/15 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5 border border-transparent"
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 glass-depth-1 rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
            title="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="flex items-center gap-1.5 px-3 py-1.5 glass-depth-1 rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 text-xs font-bold"
            title="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 glass-depth-1 rounded-full text-muted-foreground hover:text-foreground md:hidden transition-all duration-200"
            title="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 z-40 glass-depth-2 p-6 rounded-3xl md:hidden flex flex-col gap-3 animate-fade-in-up border border-white/10 shadow-2xl">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <a
                key={item.name}
                href={item.href}
                className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center ${
                  active
                    ? "bg-primary/15 text-primary border border-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5 border border-transparent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
