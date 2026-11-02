"use client";

import React from "react";
import {
  GraduationCap,
  Layers,
  ShieldCheck,
  Database,
  Code2,
  Award,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-50 border-blue-200",
      title: "Clean Layered Architecture",
      description:
        "Building organized code using Controller-Service-Repository patterns, ensuring clean separation of concerns, testability, and maintainability.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-200",
      title: "Security & Role-Based Access",
      description:
        "Implementing JWT authentication, Role-Based Access Control (RBAC), and secure transaction pipelines to protect API endpoints and sensitive data.",
    },
    {
      icon: <Database className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-50 border-amber-200",
      title: "High-Efficiency Databases",
      description:
        "Designing normalized relational schemas, writing stored procedures, and managing ORM workflows with SQL Server and Entity Framework Core.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-50 border-indigo-200",
      title: "Modern Reactive Frontend",
      description:
        "Crafting responsive web applications with React.js, Angular, and Tailwind CSS, focusing on clean modular components and state handling.",
    },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <p className="text-blue-600 font-mono text-sm tracking-wider uppercase font-semibold">
            Background & Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineering graduate passionate about solving real problems with reliable software,
            bridging backend architecture with intuitive frontend interfaces.
          </p>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Bio Story */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
              Engineering Journey
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              I graduated in Computer Science & Engineering from{" "}
              <span className="text-slate-900 font-semibold">Anna University</span> with a strong
              passion for building practical, production-ready software. During my internship work at{" "}
              <span className="text-slate-900 font-semibold">Techno Park, Trivandrum</span>, I gained
              direct experience developing full-stack applications—from architecting RESTful APIs in{" "}
              <span className="font-semibold text-blue-700 font-mono">ASP.NET Core</span> and managing
              databases in <span className="font-semibold text-blue-700 font-mono">SQL Server</span>, to building
              dynamic user interfaces in <span className="font-semibold text-indigo-700 font-mono">Angular</span> and{" "}
              <span className="font-semibold text-indigo-700 font-mono">React.js</span>.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Whether developing an enterprise Hospital Management System with strict role-based permissions
              or engineering a cross-platform carpooling mobile app with React Native and Firebase, I focus
              on clear architecture, security, and delivering an intuitive experience for users.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-medium text-slate-700">
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
                #FullStack
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
                #DotNetCore
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
                #SQLServer
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
                #ReactAndAngular
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
                #CleanCode
              </span>
            </div>
          </div>

          {/* Education Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-1">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              Education
            </h3>

            {/* College */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    St. Xavier’s Catholic College of Engineering
                  </h4>
                  <p className="text-xs text-blue-600 font-mono mt-0.5 font-semibold">
                    Anna University
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-slate-100 rounded text-slate-700 border border-slate-200 whitespace-nowrap font-medium">
                  2021 – 2025
                </span>
              </div>
              <p className="text-sm text-slate-700 mt-2 font-medium">
                Bachelor of Engineering in Computer Science & Engineering
              </p>
              <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>Final Year: RideCircle Mobile App (React Native & Firebase)</span>
              </p>
            </div>

            {/* School */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    R.P.R. Hindu Vidyalaya Hr. Sec. School
                  </h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Thuckalay, Kanyakumari
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-slate-100 rounded text-slate-700 border border-slate-200 whitespace-nowrap font-medium">
                  2019 – 2021
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs font-mono font-medium">
                <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded">
                  HSC: 76%
                </span>
                <span className="px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded">
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
              className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 space-y-3"
            >
              <div className={`w-11 h-11 rounded-xl ${item.bg} border flex items-center justify-center shadow-xs`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
