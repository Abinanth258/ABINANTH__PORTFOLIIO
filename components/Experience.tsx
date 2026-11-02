"use client";

import React from "react";
import {
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Development Intern",
      company: "Faith Infotech",
      location: "Techno Park, Trivandrum",
      period: "August 2025 – April 2026",
      type: "Enterprise Full-Stack",
      accent: "border-blue-600 bg-blue-600",
      pillColor: "bg-blue-50 text-blue-800 border-blue-200",
      description:
        "Engineered end-to-end features for an enterprise-level web platform using .NET, SQL, and Angular, emphasizing scalable backend services and secure transaction handling.",
      responsibilities: [
        "Implemented RESTful Web APIs in ASP.NET Core, facilitating seamless communication between services and the Angular client.",
        "Architected relational database schemas and optimized complex stored procedures in SQL Server for rapid query performance.",
        "Engineered Role-Based Access Control (RBAC) and JWT token authentication to protect sensitive endpoints and user profiles.",
        "Built core modules for user management, automated report generation, and transactional workflows.",
        "Maintained Controller-Service-Repository architecture ensuring testability, clean code hygiene, and reusability.",
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
      type: "Frontend Engineering",
      accent: "border-indigo-600 bg-indigo-600",
      pillColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
      description:
        "Gained hands-on experience in modern frontend development practices, focusing on component-based UI engineering and interactive interfaces.",
      responsibilities: [
        "Constructed responsive, pixel-perfect web interfaces using HTML5, CSS3, and modern JavaScript.",
        "Built reusable React.js components incorporating state management and structured component hierarchies.",
        "Collaborated with engineering peers using standard Git workflows and clean design patterns.",
        "Practiced mobile-first responsive design across various device viewports.",
      ],
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "UI State",
        "Git",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <p className="text-blue-600 font-mono text-sm tracking-wider uppercase font-semibold">
            Industry Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Work & Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Practical experience engineering enterprise software systems in prominent IT hubs like Techno Park, Trivandrum.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-sm" />

              {/* Timeline Card */}
              <div className="bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 space-y-5">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                  <div>
                    <span className={`text-xs font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-md border ${exp.pillColor}`}>
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1.5">
                      {exp.role}
                    </h3>
                    <p className="text-slate-700 font-semibold text-base flex items-center gap-2 mt-1">
                      <span className="text-blue-700">{exp.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 font-normal">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 shadow-xs self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Key Contributions & Engineering Impact:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
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
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-medium text-slate-800 shadow-xs"
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
