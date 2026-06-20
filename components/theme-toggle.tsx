"use client"

import { useTheme } from "@/contexts/theme-context"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-full overflow-hidden transition-all duration-1000 ease-in-out border flex items-center justify-center cursor-pointer select-none group ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-900 to-indigo-950 border-white/10 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]"
          : "bg-gradient-to-b from-sky-400 to-amber-100 border-amber-200/50 shadow-[0_0_15px_-3px_rgba(251,191,36,0.3)]"
      }`}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Background Star Dots (Dark Mode only) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-2 left-3 w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-3 left-7 w-0.5 h-0.5 bg-white rounded-full opacity-80" />
        <div className="absolute top-6 left-2 w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Background Light rays (Light Mode only) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          theme === "light" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_0%,transparent_70%)] animate-pulse" />
      </div>

      {/* Icons container with smooth translation/rotation */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {theme === "dark" ? (
          <Moon 
            className="h-4.5 w-4.5 text-blue-100 transition-all duration-1000 transform rotate-[-10deg] scale-100 group-hover:scale-110 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" 
          />
        ) : (
          <Sun 
            className="h-4.5 w-4.5 text-amber-500 transition-all duration-1000 transform rotate-[45deg] scale-100 group-hover:scale-110 filter drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]" 
          />
        )}
      </div>

      {/* Apple-level UI hover ring */}
      <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/10 transition-colors duration-300" />
    </button>
  )
}
