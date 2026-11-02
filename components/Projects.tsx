"use client";

import React from "react";
import {
  Github,
  Activity,
  Car,
  CheckCircle,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      category: "Full-Stack Enterprise Architecture",
      status: "Featured Full-Stack Project",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      tagline:
        "Full-stack clinical management platform featuring role-based access control, appointment booking, and patient records administration.",
      github: "https://github.com/Abinanth258/HospitalManagement",
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
        "Patient registration, clinical profile management & appointment booking",
        "Doctor consultation dashboards with patient medical history tracking",
        "Integrated billing module with invoice generation and service charging",
        "Role-Based Access Control (RBAC) secured via JWT token authorization",
        "Clean layered architecture (Controller, Service, Repository) with stored procedures",
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
      statusColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      icon: <Car className="w-6 h-6 text-indigo-600" />,
      tagline:
        "Cross-platform mobile carpooling application connecting drivers and passengers with live GPS tracking, route matching, and real-time chat.",
      github: "https://github.com/Abinanth258/ridecircle",
      technologies: [
        "React Native",
        "Firebase Firestore",
        "Google Maps API",
        "JavaScript",
        "Firebase Auth",
        "Realtime DB",
      ],
      features: [
        "Firebase Authentication with verified rider and driver profiles",
        "Live ride creation, route search, seat reservation & booking lifecycle",
        "Live turn-by-turn navigation and GPS location tracking via Google Maps API",
        "In-app real-time messaging between co-passengers and drivers",
        "Automatic distance-based fare calculation and trip history logging",
      ],
      highlights: [
        { label: "Framework", val: "React Native" },
        { label: "Maps Engine", val: "Google Maps API" },
        { label: "Realtime Sync", val: "Cloud Firestore" },
        { label: "Auth", val: "Firebase Authentication" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative border-t border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <p className="text-blue-600 font-mono text-sm tracking-wider uppercase font-semibold">
            Featured Code
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real-world software architectures from enterprise web platforms to real-time mobile apps.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-lg transition-all duration-300 p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details & Features */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Badges & Category */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${project.statusColor}`}>
                      {project.status}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                      Key Capabilities & Implementation Details:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 border border-slate-200 text-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Technical Blueprint & Links Card */}
                <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        System Architecture
                      </h4>
                      <p className="text-[11px] text-slate-500 font-mono font-medium">
                        Public Repository
                      </p>
                    </div>
                  </div>

                  {/* Specs Table */}
                  <div className="space-y-3">
                    {project.highlights.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200"
                      >
                        <span className="text-slate-500 font-mono">
                          {spec.label}:
                        </span>
                        <span className="text-slate-900 font-semibold text-right font-mono">
                          {spec.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* GitHub Action Button */}
                  <div className="pt-2 space-y-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-4 h-4 ml-0.5 opacity-80" />
                    </a>

                    <div className="text-center">
                      <span className="text-[11px] text-slate-500 font-mono">
                        Source Code Available • MIT License
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Banner */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Want to see more code repositories?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-4">
            Visit my GitHub profile to explore my latest repositories, technical notes, and experiments.
          </p>
          <a
            href="https://github.com/Abinanth258"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
          >
            <Github className="w-4 h-4 text-slate-900" />
            <span>github.com/Abinanth258</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
