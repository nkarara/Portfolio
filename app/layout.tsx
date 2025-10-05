import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"
import { Providers } from "@/components/providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://nkarara.github.io/portfolio-main"),
  title: "Nabil KARARA – Portfolio Web & Mobile Developer",
  description:
    "Portfolio personnel de Nabil KARARA, développeur web et mobile passionné. Découvrez mes projets en React, Node.js, Java et plus.",
  keywords: ["développeur web", "développeur mobile", "React", "Node.js", "Java", "portfolio", "Nabil KARARA"],
  authors: [{ name: "Nabil KARARA" }],
  creator: "Nabil KARARA",
  publisher: "Nabil KARARA",
  openGraph: {
    title: "Nabil KARARA – Portfolio Web & Mobile Developer",
    description: "Portfolio personnel de Nabil KARARA, développeur web et mobile passionné.",
    url: "https://nkarara.github.io/portfolio-main",
    siteName: "Nabil KARARA Portfolio",
    images: [
      {
        url: "/portfolio-main/NABIL_Profil.jpg",
        width: 1200,
        height: 630,
        alt: "Nabil KARARA - Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabil KARARA – Portfolio Web & Mobile Developer",
    description: "Portfolio personnel de Nabil KARARA, développeur web et mobile passionné.",
    images: ["/portfolio-main/NABIL_Profil.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  )
}
