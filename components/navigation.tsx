"use client"

import { useState, useEffect } from "react"
import { Menu, X, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getNavPath } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("/")
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ["about", "projects", "skills", "experience", "education", "contact"]
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
    { name: t.nav.home,       href: getNavPath("/") },
    { name: t.nav.about,      href: getNavPath("/#about") },
    { name: t.nav.projects,   href: getNavPath("/#projects") },
    { name: t.nav.skills,     href: getNavPath("/#skills") },
    { name: t.nav.experience, href: getNavPath("/#experience") },
    { name: t.nav.education,  href: getNavPath("/#education") },
    { name: t.nav.contact,    href: getNavPath("/#contact") },
  ]

  const isActive = (href: string) => {
    if (href.endsWith("/") && activeSection === "/") return true;
    return activeSection === href || (href.includes("/#") && activeSection.endsWith(href.substring(href.indexOf("/#"))));
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500 ${
        isScrolled ? "pt-3" : ""
      }`}
    >
      <nav
        className={`w-full max-w-4xl rounded-2xl flex items-center justify-between px-5 py-2.5 transition-all duration-500 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-xl border border-white/6 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href={getNavPath("/")}
          className="text-sm font-bold tracking-[-0.02em] text-white hover:opacity-80 transition-opacity duration-200"
        >
          NK<span className="text-zinc-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-[0.8125rem] font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  active
                    ? "text-white bg-white/8"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-200 text-xs font-semibold"
            title="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 md:hidden transition-all duration-200"
            title="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[72px] left-4 right-4 z-40 border border-white/6 bg-black/95 backdrop-blur-2xl p-4 rounded-2xl md:hidden flex flex-col gap-1 animate-fade-in-up shadow-2xl">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <a
                key={item.name}
                href={item.href}
                className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-white/6 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/4"
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
