"use client"

import { Code2, Database, Smartphone, Cloud, Wrench, Users, Lightbulb, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function Skills() {
  const { t } = useLanguage()

  const technicalSkills = [
    {
      category: t.skills.frontend,
      icon: Code2,
      skills: ["React", "Angular", "Vue.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: t.skills.backend,
      icon: Database,
      skills: ["Node.js", "Spring Boot", "Express.js", "REST API", "GraphQL", "Java"],
    },
    {
      category: t.skills.mobile,
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Android", "iOS"],
    },
    {
      category: t.skills.database,
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
    },
    {
      category: t.skills.cloudDevops,
      icon: Cloud,
      skills: ["Oracle Cloud", "Azure", "Docker", "CI/CD", "Vercel", "Git"],
    },
    {
      category: t.skills.tools,
      icon: Wrench,
      skills: ["VS Code", "IntelliJ IDEA", "Postman", "Figma", "Jira", "GitHub"],
    },
  ]

  const softSkills = [
    {
      icon: Users,
      title: t.skills.teamwork,
      description: t.skills.teamworkDesc,
    },
    {
      icon: Lightbulb,
      title: t.skills.problemSolving,
      description: t.skills.problemSolvingDesc,
    },
    {
      icon: Zap,
      title: t.skills.continuousLearning,
      description: t.skills.continuousLearningDesc,
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">{t.skills.title}</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t.skills.technical}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((category, index) => {
                const Icon = category.icon
                return (
                  <Card key={index} className="p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">{category.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="rounded-full">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t.skills.soft}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <Card key={index} className="p-6 hover:border-accent hover:shadow-lg transition-all duration-300">
                    <div className="space-y-3">
                      <div className="p-3 bg-accent/10 rounded-lg w-fit">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h4 className="font-semibold text-lg">{skill.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
