import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Tech Valley Pvt Ltd, Noida",
    title: "Full Stack Software Developer (MERN Stack)",
    dates: "Feb 2023 – Present",
    location: "Noida",
    highlights: [
      "Built and optimized MERN applications with TypeScript",
      "Designed REST APIs and implemented OAuth/JWT authentication",
      "Handled deployments and production performance tuning",
    ],
  },
  {
    company: "Enmovil Pvt Ltd, Hyderabad",
    title: "Full Stack Software Developer (MERN Stack)",
    dates: "Jul 2021 – Feb 2023",
    location: "Hyderabad",
    highlights: [
      "Developed features across frontend (React) and backend (Node/Express)",
      "Integrated third‑party APIs and services",
      "Participated across SDLC: coding, debugging, testing, reviews",
    ],
  },
  {
    company: "Progressive Digital Media, Hyderabad",
    title: "Secondary Researcher (Web Data Scraping)",
    dates: "Jul 2014 – Feb 2016",
    location: "Hyderabad",
    highlights: [
      "Conducted web data collection and research to support analysis",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="experience">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="section-title text-gray-900 mb-4">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            Roles and responsibilities across the full development lifecycle.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <article
              key={exp.company}
              className={`glass-card p-6 hover-lift animate-on-scroll stagger-${index + 1}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-pulse-100 rounded-full">
                  <Briefcase className="w-5 h-5 text-pulse-600" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-700">{exp.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{exp.dates}</span>
                <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{exp.location}</span>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
