"use client";

import React from "react";
import {
  Github,
  ExternalLink,
  Activity,
  Car,
  CheckCircle,
  Database,
  Lock,
  MapPin,
  MessageSquare,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      category: "Full-Stack Web Architecture",
      status: "Featured Enterprise Project",
      icon: <Activity className="w-6 h-6 text-rose-400" />,
      tagline:
        "Comprehensive healthcare administration portal with role-based access control and clinical workflow automation.",
      github: "https://github.com/Abinanth258/HospitalManagement",
      demo: null,
      technologies: [
        "C#",
        "ASP.NET Core Web API",
        "Angular",
        "SQL Server",
        "Entity Framework Core",
        "ADO.NET",
        "JWT Authentication",
        "RBAC",
      ],
      features: [
        "Patient registration, records management, and automated appointment scheduling",
        "Doctor consultation dashboards with medical history tracking",
        "Integrated billing system with itemized invoicing and payment logging",
        "Multi-tier security with JWT token authorization and strict Role-Based Access Control",
        "Layered architecture (Controller, Service, Repository) with custom validation and stored procedures",
      ],
      highlights: [
        { label: "Backend", val: "ASP.NET Core Web API" },
        { label: "Frontend", val: "Angular & TypeScript" },
        { label: "Database", val: "SQL Server (EF Core + ADO.NET)" },
        { label: "Security", val: "JWT & Role-Based Access" },
      ],
    },
    {
      title: "RideCircle – Carpooling Application",
      category: "Cross-Platform Mobile Application",
      status: "Final Year Academic Project",
      icon: <Car className="w-6 h-6 text-cyan-400" />,
      tagline:
        "Real-time mobile carpooling network connecting commuters with live GPS routing, chat, and fare calculation.",
      github: "https://github.com/Abinanth258/ridecircle",
      demo: null,
      technologies: [
        "React Native",
        "Firebase Firestore",
        "Google Maps API",
        "JavaScript",
        "Firebase Auth",
        "Realtime DB",
      ],
      features: [
        "Firebase Authentication with secured rider and driver profiles",
        "Live ride creation, route search, seat reservations, and booking management",
        "Turn-by-turn navigation and live driver location tracking via Google Maps API",
        "In-app instant messaging and chat between co-passengers and drivers",
        "Dynamic fare calculation engine and passenger ride history logging",
      ],
      highlights: [
        { label: "Framework", val: "React Native" },
        { label: "Maps Engine", val: "Google Maps API" },
        { label: "Realtime Sync", val: "Cloud Firestore" },
        { label: "Auth", val: "Firebase Auth" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase font-semibold">
            Real-World Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical demonstrations of full-stack engineering, from enterprise .NET
            backends to real-time mobile applications.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details & Features */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Badges & Category */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Architectural Highlights & Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Technologies Leveraged:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700/80 text-blue-300 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Technical Blueprint & Links Card */}
                <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        System Architecture
                      </h4>
                      <p className="text-[11px] text-slate-400 font-mono">
                        Source Code & Modules
                      </p>
                    </div>
                  </div>

                  {/* Specs Table */}
                  <div className="space-y-3">
                    {project.highlights.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/50"
                      >
                        <span className="text-slate-400 font-mono">
                          {spec.label}:
                        </span>
                        <span className="text-slate-200 font-medium text-right font-mono">
                          {spec.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Links / GitHub Buttons */}
                  <div className="pt-2 space-y-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-4 h-4 ml-0.5 opacity-70" />
                    </a>

                    <div className="text-center">
                      <span className="text-[11px] text-slate-500 font-mono">
                        Public Repository • MIT License
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More on GitHub Banner */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-purple-950/40 border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-2">
            Interested in exploring more code?
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-4">
            Visit my GitHub profile to explore additional repositories, experiments,
            and software development utilities.
          </p>
          <a
            href="https://github.com/Abinanth258"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>github.com/Abinanth258</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
