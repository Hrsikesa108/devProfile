import React from "react";
import { Code, Database, Cloud, Smartphone, Palette, Shield } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js/Express", level: 90 },
        { name: "Authentication (OAuth/JWT)", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS Services", level: 70 },
        // { name: "Docker", level: 85 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "Linux/Unix", level: 80 },
        { name: "Git/GitHub", level: 95 },
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="skills">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="section-title text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive overview of my technical expertise across the full development stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`glass-card p-6 hover-lift animate-on-scroll stagger-${categoryIndex + 1}`}
              >
                {/* Category header */}
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-full mr-4">
                    <Icon className="w-6 h-6 text-pulse-600" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-pulse-600 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pulse-500 to-pulse-600 h-2 rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 3 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional tools section */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-display font-semibold text-gray-900 mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Express.js', 'MongoDB',
              'Tailwind CSS', 'Vite', 'Redux', 'Jotai', 'Docker', 'VS Code', 'Postman', 'Jira', 'Webpack',
              'Redis', 'Nginx', 'Vercel', 'MySQL'
            ].map((tool, index) => (
              <div
                key={tool}
                className={`pulse-chip hover:bg-pulse-200 transition-colors cursor-default stagger-${index % 4 + 1}`}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;