"use client";

import React from "react";
import {
  GraduationCap,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Calendar,
  Building2,
  Award,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Clean Layered Architecture",
      description:
        "Building structured solutions using Controller-Service-Repository patterns, ensuring testability, maintainability, and clean code separation.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Security & Role-Based Access",
      description:
        "Implementing JWT authentication, Role-Based Access Control (RBAC), and secure data transaction pipelines across modern enterprise applications.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "High-Efficiency Databases",
      description:
        "Designing relational database schemas, optimizing stored procedures, and managing ORM workflows with SQL Server and Entity Framework Core.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Modern Reactive Frontend",
      description:
        "Crafting responsive, accessible user interfaces with React, Angular, and Tailwind CSS, backed by strong component modularity and state handling.",
    },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-blue-400 font-mono text-sm tracking-wider uppercase font-semibold">
            Background & Purpose
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering graduate passionate about building reliable software,
            connecting resilient backend services with sleek, accessible user interfaces.
          </p>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Bio Story */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-500 rounded-full inline-block"></span>
              Engineering Philosophy & Drive
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a Computer Science graduate from{" "}
              <span className="text-white font-medium">Anna University</span> with a
              hands-on track record in full-stack engineering. During my internships at{" "}
              <span className="text-white font-medium">Techno Park, Trivandrum</span>, 
              I worked directly on production-grade systems—from designing RESTful APIs in{" "}
              <span className="text-blue-400 font-mono">ASP.NET Core</span> and structuring complex 
              relational models in <span className="text-blue-400 font-mono">SQL Server</span>, to building
              dynamic user interfaces in <span className="text-cyan-400 font-mono">Angular</span> and{" "}
              <span className="text-cyan-400 font-mono">React.js</span>.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Whether architecting a secure Hospital Management System with role-based access control or
              engineering a real-time carpooling mobile app with React Native and Firebase, I emphasize
              scalability, clean code patterns, and an intuitive developer and user experience.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                #OOP
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                #CleanArchitecture
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                #RESTfulAPIs
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                #ProblemSolving
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                #ContinuousLearning
              </span>
            </div>
          </div>

          {/* Education Timeline Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              Education Journey
            </h3>

            {/* College */}
            <div className="glass-panel p-5 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-white text-base">
                    St. Xavier’s Catholic College of Engineering
                  </h4>
                  <p className="text-xs text-blue-400 font-mono mt-0.5">
                    Anna University
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700/80 whitespace-nowrap">
                  2021 – 2025
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-2">
                Bachelor of Engineering in <span className="text-white font-medium">Computer Science & Engineering</span>
              </p>
              <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Final Year Project: Carpooling App (React Native & Firebase)</span>
              </p>
            </div>

            {/* School */}
            <div className="glass-panel p-5 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-white text-base">
                    R.P.R. Hindu Vidyalaya Hr. Sec. School
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Thuckalay, Kanyakumari
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700/80 whitespace-nowrap">
                  2019 – 2021
                </span>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs font-mono">
                <span className="px-2.5 py-1 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 rounded">
                  HSC: 76%
                </span>
                <span className="px-2.5 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-300 rounded">
                  SSC: 75%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <h4 className="font-semibold text-white text-base">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
