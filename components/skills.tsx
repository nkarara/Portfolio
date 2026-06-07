"use client"

import { Code2, Database, Smartphone, Cloud, Wrench, Users, Lightbulb, Zap } from "lucide-react"
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl space-y-14">

        {/* Section Header */}
        <div>
          <span className="section-label">{t.skills.title}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-1">{t.skills.title}</h2>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">{t.skills.technical}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="glass-depth-2 p-5 rounded-2xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="liquid-glass-sheen" aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-xl">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <h4 className="font-bold text-sm text-foreground">{category.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="glass-depth-1 text-xs font-medium text-foreground/80 px-2.5 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">{t.skills.soft}</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="glass-depth-2 p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="liquid-glass-sheen" aria-hidden="true" />
                  <div className="relative z-10 space-y-3">
                    <div className="p-3 bg-accent/10 rounded-xl w-fit">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="font-bold text-sm text-foreground">{skill.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
