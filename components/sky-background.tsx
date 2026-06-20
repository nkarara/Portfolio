"use client"

import { useTheme } from "@/contexts/theme-context"
import { useEffect, useRef, useState, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── Star data generated once ───────────────────────────────────────────────
const STARS = Array.from({ length: 220 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 70,
  size: Math.random() < 0.15 ? 2.5 : Math.random() < 0.4 ? 1.8 : 1.1,
  brightness: 0.4 + Math.random() * 0.6,
  twinkleDuration: 2 + Math.random() * 4,
  twinkleDelay: Math.random() * 5,
}))

// ─── Cloud shapes ────────────────────────────────────────────────────────────
const CLOUDS = [
  { id: 0, top: "12%", width: 320, opacity: 0.55, speed: 90, initialX: 15 },
  { id: 1, top: "22%", width: 240, opacity: 0.40, speed: 140, initialX: 58 },
  { id: 2, top: "8%",  width: 190, opacity: 0.30, speed: 200, initialX: 75 },
  { id: 3, top: "30%", width: 280, opacity: 0.35, speed: 110, initialX: 35 },
  { id: 4, top: "18%", width: 160, opacity: 0.25, speed: 170, initialX: 85 },
]

function CloudSVG({ width, opacity }: { width: number; opacity: number }) {
  const h = width * 0.38
  return (
    <svg width={width} height={h} viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <defs>
        <filter id="cloud-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <radialGradient id="cloud-grad" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="100%" stopColor="rgba(220,235,255,0.5)" />
        </radialGradient>
      </defs>
      <ellipse cx="160" cy="80" rx="145" ry="38" fill="url(#cloud-grad)" filter="url(#cloud-blur)" />
      <ellipse cx="100" cy="65" rx="75" ry="45" fill="url(#cloud-grad)" filter="url(#cloud-blur)" />
      <ellipse cx="215" cy="60" rx="65" ry="40" fill="url(#cloud-grad)" filter="url(#cloud-blur)" />
      <ellipse cx="155" cy="55" rx="55" ry="42" fill="url(#cloud-grad)" filter="url(#cloud-blur)" />
    </svg>
  )
}

const Cloud = memo(function Cloud({ cloud }: { cloud: typeof CLOUDS[0] }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top: cloud.top, left: 0 }}
      animate={{ x: ["-10%", "110%"] }}
      transition={{
        duration: cloud.speed,
        repeat: Infinity,
        ease: "linear",
        delay: -(cloud.initialX / 100) * cloud.speed,
      }}
    >
      <CloudSVG width={cloud.width} opacity={cloud.opacity} />
    </motion.div>
  )
})

// ─── Moon SVG ────────────────────────────────────────────────────────────────
function MoonSVG() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(200,220,255,0.25)" />
          <stop offset="100%" stopColor="rgba(140,180,255,0)" />
        </radialGradient>
        <radialGradient id="moon-body" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#EEF3FF" />
          <stop offset="55%" stopColor="#C8D8F8" />
          <stop offset="100%" stopColor="#8AAED4" />
        </radialGradient>
        <filter id="moon-soft">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Outer glow */}
      <circle cx="45" cy="45" r="45" fill="url(#moon-glow)" />
      {/* Moon body */}
      <circle cx="45" cy="45" r="28" fill="url(#moon-body)" filter="url(#moon-soft)" />
      {/* Shadow crescent */}
      <circle cx="52" cy="42" r="24" fill="rgba(30,50,100,0.45)" />
      {/* Craters */}
      <circle cx="35" cy="38" r="3.5" fill="rgba(140,175,220,0.4)" />
      <circle cx="50" cy="52" r="2.5" fill="rgba(140,175,220,0.3)" />
      <circle cx="40" cy="55" r="1.8" fill="rgba(140,175,220,0.35)" />
      <circle cx="32" cy="50" r="2.2" fill="rgba(140,175,220,0.25)" />
      <circle cx="56" cy="40" r="1.5" fill="rgba(140,175,220,0.2)" />
    </svg>
  )
}

// ─── Sun SVG ──────────────────────────────────────────────────────────────────
function SunSVG() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sun-corona" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,220,80,0.3)" />
          <stop offset="100%" stopColor="rgba(255,160,0,0)" />
        </radialGradient>
        <radialGradient id="sun-body" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFDE0" />
          <stop offset="40%" stopColor="#FFE44D" />
          <stop offset="100%" stopColor="#FFA500" />
        </radialGradient>
        <filter id="sun-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Outer corona */}
      <circle cx="50" cy="50" r="50" fill="url(#sun-corona)" />
      {/* Sun rays */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = (50 + Math.cos(angle) * 36).toFixed(3)
        const y1 = (50 + Math.sin(angle) * 36).toFixed(3)
        const x2 = (50 + Math.cos(angle) * 48).toFixed(3)
        const y2 = (50 + Math.sin(angle) * 48).toFixed(3)
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(255,200,50,0.7)"
            strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
            strokeLinecap="round"
          />
        )
      })}
      {/* Sun body */}
      <circle cx="50" cy="50" r="26" fill="url(#sun-body)" filter="url(#sun-glow)" />
      {/* Surface shimmer */}
      <circle cx="43" cy="43" r="6" fill="rgba(255,255,220,0.3)" />
    </svg>
  )
}

// ─── Horizon glow on transition ───────────────────────────────────────────────
function HorizonGlow({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{ height: "30%" }}
      animate={{
        opacity: isDark ? 0 : 0,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: isDark
            ? "linear-gradient(to top, rgba(255,100,20,0.0), transparent)"
            : "linear-gradient(to top, rgba(255,200,100,0.15), transparent)",
        }}
      />
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export function SkyBackground() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mounted, setMounted] = useState(false)
  const prevThemeRef = useRef(theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (prevThemeRef.current !== theme) {
      setIsTransitioning(true)
      const t = setTimeout(() => setIsTransitioning(false), 2000)
      prevThemeRef.current = theme
      return () => clearTimeout(t)
    }
  }, [theme])

  // Celestial body positions — moon starts top-right, sun starts top-center-right
  const moonPosition = { x: "72%", y: isDark ? "8%" : "115%" }
  const sunPosition  = { x: "65%", y: isDark ? "115%" : "7%" }

  // Sky gradient
  const nightSky = "linear-gradient(180deg, #020510 0%, #060B1E 20%, #0B1535 45%, #0D1A40 65%, #111D4A 100%)"
  const daySky   = "linear-gradient(180deg, #1E6BB5 0%, #3B92D8 20%, #63AEE8 45%, #92C8F0 70%, #C8E8FA 88%, #E8F5FF 100%)"
  // Sunrise/sunset bleed
  const sunriseSky = "linear-gradient(180deg, #08152E 0%, #1A2A50 25%, #4A3060 45%, #E05A20 65%, #FF8C38 80%, #FFB870 90%, #FFD5A0 100%)"

  const skyGradient = isTransitioning
    ? (isDark ? sunriseSky.replace("4A3060","6A4080").replace("E05A20","C04010") : sunriseSky)
    : isDark ? nightSky : daySky

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -20 }}
    >
      {/* ── Sky Gradient Layer ───────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0"
        animate={{ background: skyGradient }}
        transition={{ duration: 2.0, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* ── Dot-grid overlay (Vercel aesthetic, very faint) ─────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${isDark ? "rgba(255,255,255,0.025)" : "rgba(30,70,140,0.04)"} 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          transition: "background-image 2s ease",
        }}
      />

      {/* ── Atmospheric depth glow ──────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isDark
            ? "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(30,60,180,0.12) 0%, transparent 70%)"
            : "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(100,180,255,0.2) 0%, transparent 70%)",
        }}
        transition={{ duration: 2.0 }}
      />

      {/* ── Horizon transition glow ─────────────────────────────────────── */}
      <HorizonGlow isDark={isDark} />

      {/* ── Stars ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mounted && isDark && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, delay: isDark ? 0.6 : 0 }}
          >
            {STARS.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                }}
                animate={{
                  opacity: [
                    star.brightness * 0.5,
                    star.brightness,
                    star.brightness * 0.7,
                    star.brightness,
                    star.brightness * 0.5,
                  ],
                  scale: [1, 1.15, 1, 1.1, 1],
                }}
                transition={{
                  duration: star.twinkleDuration,
                  repeat: Infinity,
                  delay: star.twinkleDelay,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Milky way haze */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "5%",
                left: "20%",
                width: "60%",
                height: "45%",
                background: "radial-gradient(ellipse 70% 90% at 50% 40%, rgba(120,140,220,0.06) 0%, transparent 70%)",
                transform: "rotate(-20deg)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Clouds ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mounted && !isDark && (
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            {CLOUDS.map((cloud) => (
              <Cloud key={cloud.id} cloud={cloud} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Moon ────────────────────────────────────────────────────────── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ right: "auto" }}
        animate={{
          left: moonPosition.x,
          top: moonPosition.y,
        }}
        transition={{
          duration: 1.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.div
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.6 }}
          transition={{ duration: 1.2, delay: isDark ? 0.4 : 0 }}
        >
          {/* Moon ambient glow */}
          <div
            className="absolute"
            style={{
              inset: -30,
              background: "radial-gradient(circle, rgba(180,210,255,0.18) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <MoonSVG />
        </motion.div>
      </motion.div>

      {/* ── Sun ─────────────────────────────────────────────────────────── */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          left: sunPosition.x,
          top: sunPosition.y,
        }}
        transition={{
          duration: 1.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.div
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.6 : 1 }}
          transition={{ duration: 1.2, delay: isDark ? 0 : 0.5 }}
        >
          {/* Sun corona bloom */}
          <motion.div
            className="absolute"
            style={{
              inset: -40,
              background: "radial-gradient(circle, rgba(255,200,60,0.22) 0%, rgba(255,160,20,0.08) 50%, transparent 75%)",
              borderRadius: "50%",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Secondary warm bloom */}
          <div
            className="absolute"
            style={{
              inset: -80,
              background: "radial-gradient(circle, rgba(255,180,40,0.07) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <SunSVG />
        </motion.div>
      </motion.div>

      {/* ── Day ground shimmer ───────────────────────────────────────────── */}
      <AnimatePresence>
        {!isDark && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: "12%", background: "linear-gradient(to top, rgba(255,255,255,0.12), transparent)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
