"use client"

import { useTheme } from "@/contexts/theme-context"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center cursor-pointer select-none group"
      style={{ width: 44, height: 44 }}
      title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
      aria-label={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
    >
      {/* Hover ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "rgba(140,180,255,0.0)"
            : "rgba(255,200,60,0.0)",
        }}
        whileHover={{
          background: isDark
            ? "rgba(140,180,255,0.12)"
            : "rgba(255,200,60,0.12)",
          scale: 1.05,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Moon icon (visible in dark mode) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0.6,
          rotate: isDark ? 0 : -30,
          y: isDark ? 0 : -4,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nav-moon-body" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#EEF3FF" />
              <stop offset="60%" stopColor="#C8D8F8" />
              <stop offset="100%" stopColor="#8AAED4" />
            </radialGradient>
          </defs>
          {/* Glow */}
          <circle cx="11" cy="11" r="11" fill="rgba(180,210,255,0.15)" />
          {/* Moon body */}
          <circle cx="11" cy="11" r="7.5" fill="url(#nav-moon-body)" />
          {/* Shadow crescent */}
          <circle cx="13.5" cy="10" r="6.5" fill="rgba(30,50,100,0.5)" />
          {/* Craters */}
          <circle cx="8.5" cy="9.5" r="1.1" fill="rgba(140,175,220,0.45)" />
          <circle cx="12" cy="13.5" r="0.8" fill="rgba(140,175,220,0.35)" />
        </svg>
      </motion.div>

      {/* Sun icon (visible in light mode) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: isDark ? 0 : 1,
          scale: isDark ? 0.6 : 1,
          rotate: isDark ? 30 : 0,
          y: isDark ? 4 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Rotating rays wrapper */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: isDark ? 0 : 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 8 }, (_, i) => {
              const angle = i * 45 * (Math.PI / 180)
              const r1 = 14, r2 = 18
              return (
                <line
                  key={i}
                  x1={22 + Math.cos(angle) * r1}
                  y1={22 + Math.sin(angle) * r1}
                  x2={22 + Math.cos(angle) * r2}
                  y2={22 + Math.sin(angle) * r2}
                  stroke="rgba(255,170,20,0.7)"
                  strokeWidth={i % 2 === 0 ? 2.2 : 1.4}
                  strokeLinecap="round"
                />
              )
            })}
          </svg>
        </motion.div>
        {/* Sun body */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nav-sun-body" cx="36%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#FFFDE0" />
              <stop offset="45%" stopColor="#FFE44D" />
              <stop offset="100%" stopColor="#FFA500" />
            </radialGradient>
          </defs>
          <circle cx="11" cy="11" r="11" fill="rgba(255,200,60,0.15)" />
          <circle cx="11" cy="11" r="7" fill="url(#nav-sun-body)" />
          <circle cx="8.5" cy="8.5" r="2" fill="rgba(255,255,200,0.35)" />
        </svg>
      </motion.div>
    </button>
  )
}
