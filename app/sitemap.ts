import type { MetadataRoute } from "next"

const SITE_URL = "https://nkarara.github.io/Portfolio"

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    "",
    "#about",
    "#projects",
    "#skills",
    "#experience",
    "#education",
    "#certifications",
    "#contact",
  ]

  return sections.map((section) => ({
    url: `${SITE_URL}/${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.7,
  }))
}
