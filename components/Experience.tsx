"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Development Intern / Trainee",
      company: "Faith Infotech",
      location: "Techno Park, Trivandrum",
      period: "August 2025 – April 2026",
      type: "Full-Stack Software Development",
      description:
        "Engineered end-to-end features for an enterprise-level web platform using .NET, SQL, and Angular, emphasizing scalable services and clean layered architecture.",
      responsibilities: [
        "Designed and implemented robust RESTful APIs in .NET, facilitating seamless communication between services and the Angular client.",
        "Architected relational database schemas and optimized complex stored procedures in SQL Server for rapid query resolution.",
        "Engineered Role-Based Access Control (RBAC) and JWT authentication to protect protected endpoints and user records.",
        "Built core modules for user management, sensitive data transactions, and automated report generation.",
        "Adhered to Controller-Service-Repository patterns ensuring testability, maintainability, and clean code hygiene.",
      ],
      technologies: [
        ".NET Core",
        "C#",
        "SQL Server",
        "Angular",
        "REST APIs",
        "RBAC",
        "Stored Procedures",
      ],
    },
    {
      role: "Web Development & React.js Intern",
      company: "Shristi Innovative",
      location: "Techno Park, Trivandrum",
      period: "July 2023 (1 Month)",
      type: "Frontend Development Internship",
      description:
        "Immersed in real-world frontend web development practices, focusing on modern component-based UI engineering and interactive interfaces.",
      responsibilities: [
        "Constructed responsive, pixel-perfect web pages using modern HTML5, CSS3, and modern JavaScript.",
        "Built modular, reusable React.js components incorporating component-level state and lifecycle management.",
        "Collaborated with senior engineers to follow industry standard Git workflows and clean design patterns.",
        "Practiced mobile-first responsive design principles across various display dimensions and browsers.",
      ],
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Component State",
        "Git",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-blue-400 font-mono text-sm tracking-wider uppercase font-semibold">
            Career Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Internship & Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on professional experience developing software solutions in
            technology hubs like Techno Park, Trivandrum.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 shadow-md shadow-blue-500/30" />

              {/* Timeline Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-5">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 font-medium text-base flex items-center gap-2 mt-1">
                      <span className="text-cyan-400 font-semibold">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 font-normal">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
