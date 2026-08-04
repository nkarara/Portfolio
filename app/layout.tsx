import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"
import { Providers } from "@/components/providers"
import { SkyBackground } from "@/components/sky-background"

const SITE_URL = "https://nkarara.github.io/Portfolio"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nabil KARARA – Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Nabil Karara, a Software Engineer and Full Stack Developer specializing in Java, Spring Boot, ASP.NET, and Android. Explore projects, experience, and certifications.",
  keywords: [
    "Nabil Karara",
    "software engineer",
    "full stack developer",
    "Java developer",
    "Spring Boot",
    "ASP.NET",
    "Android developer",
    "MIAGE",
    "portfolio",
  ],
  authors: [{ name: "Nabil Karara", url: SITE_URL }],
  creator: "Nabil Karara",
  publisher: "Nabil Karara",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Nabil KARARA – Software Engineer & Full Stack Developer",
    description:
      "Portfolio of Nabil Karara, a Software Engineer and Full Stack Developer specializing in Java, Spring Boot, ASP.NET, and Android.",
    url: SITE_URL,
    siteName: "Nabil Karara Portfolio",
    images: [
      {
        url: "/Portfolio/hero-3d-character.png",
        width: 1200,
        height: 1200,
        alt: "Nabil Karara - Software Engineer & Full Stack Developer",
      },
    ],
    locale: "fr_FR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabil KARARA – Software Engineer & Full Stack Developer",
    description:
      "Portfolio of Nabil Karara, a Software Engineer and Full Stack Developer specializing in Java, Spring Boot, ASP.NET, and Android.",
    images: ["/Portfolio/hero-3d-character.png"],
    creator: "@nabilkarara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nabil Karara",
  url: SITE_URL,
  jobTitle: "Full Stack Developer",
  description:
    "Software Engineer and Full Stack Developer specializing in Java, Spring Boot, ASP.NET, and Android development.",
  image: `${SITE_URL}/hero-3d-character.png`,
  sameAs: [
    "https://github.com/nkarara",
    "https://www.linkedin.com/in/nabil-karara-374552372/",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "ASP.NET",
    "Android",
    "React",
    "SQL",
    "Software Engineering",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Picardie Jules Verne",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Providers>
          {/* Living sky background — fixed, z-index -20, behind everything */}
          <SkyBackground />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  )
}
