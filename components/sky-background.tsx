"use client"

import { useTheme } from "@/contexts/theme-context"
import { useEffect, useState } from "react"

export function SkyBackground() {
  const { theme } = useTheme()
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string }[]>([])
  const [particles, setParticles] = useState<{ id: number; top: string; left: string; size: string; delay: string }[]>([])

  useEffect(() => {
    // Generate stars for dark mode
    const generatedStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 3}s`,
    }))
    setStars(generatedStars)

    // Generate warm light particles for light mode
    const generatedParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      delay: `${Math.random() * 5}s`,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none transition-all duration-1000 ease-in-out">
      {/* Sky Gradient */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          theme === "dark" 
            ? "bg-gradient-to-b from-[#0A0A0A] via-[#080B1A] to-[#050814]" 
            : "bg-gradient-to-b from-[#E0F2FE] via-[#F8FAFC] to-[#FFFFFF]"
        }`}
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />

      {/* Ambient Glows */}
      <div 
        className={`absolute top-[-200px] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[600px] rounded-full blur-[100px] transition-all duration-1000 ease-in-out pointer-events-none ${
          theme === "dark"
            ? "bg-gradient-to-b from-blue-500/10 to-transparent opacity-60"
            : "bg-gradient-to-b from-amber-200/40 to-transparent opacity-80"
        }`}
      />

      {/* Dark Mode Stars */}
      {theme === "dark" && (
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-pulse-subtle"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Light Mode Particles */}
      {theme === "light" && (
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute bg-amber-300/30 rounded-full animate-float-particles"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
