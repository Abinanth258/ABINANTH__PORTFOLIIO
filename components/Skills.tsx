"use client";

import React, { useState } from "react";
import {
  Server,
  Layout,
  Database,
  Wrench,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillGroups = [
    {
      id: "backend",
      title: "Backend & Frameworks",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      skills: [
        { name: "C#", level: "Proficient", highlight: true },
        { name: "ASP.NET Core Web API", level: "Proficient", highlight: true },
        { name: "ASP.NET Core MVC", level: "Intermediate", highlight: false },
        { name: "ADO.NET", level: "Proficient", highlight: true },
        { name: "Entity Framework Core", level: "Proficient", highlight: true },
        { name: "RESTful APIs", level: "Proficient", highlight: true },
        { name: "Python", level: "Intermediate", highlight: false },
        { name: "Model Binding & OOPs", level: "Proficient", highlight: false },
      ],
    },
    {
      id: "frontend",
      title: "Frontend & Mobile",
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "React.js", level: "Proficient", highlight: true },
        { name: "TypeScript", level: "Proficient", highlight: true },
        { name: "JavaScript (ES6+)", level: "Proficient", highlight: true },
        { name: "Angular", level: "Intermediate", highlight: true },
        { name: "React Native", level: "Intermediate", highlight: true },
        { name: "Next.js", level: "Intermediate", highlight: false },
        { name: "HTML5 & CSS3", level: "Proficient", highlight: false },
        { name: "Tailwind CSS", level: "Proficient", highlight: true },
        { name: "Bootstrap", level: "Intermediate", highlight: false },
      ],
    },
    {
      id: "database",
      title: "Database & Cloud",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: "SQL Server (SSMS)", level: "Proficient", highlight: true },
        { name: "Stored Procedures", level: "Proficient", highlight: true },
        { name: "MySQL", level: "Intermediate", highlight: false },
        { name: "Firebase Firestore", level: "Intermediate", highlight: true },
        { name: "Firebase Realtime DB", level: "Intermediate", highlight: false },
        { name: "Database Schema Design", level: "Proficient", highlight: false },
      ],
    },
    {
      id: "tools",
      title: "Tools & Methodologies",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: "Visual Studio", level: "Advanced", highlight: true },
        { name: "VS Code", level: "Advanced", highlight: true },
        { name: "Git & GitHub", level: "Proficient", highlight: true },
        { name: "Postman", level: "Proficient", highlight: true },
        { name: "JWT Authentication", level: "Proficient", highlight: true },
        { name: "Role-Based Access (RBAC)", level: "Proficient", highlight: true },
        { name: "Layered Architecture", level: "Proficient", highlight: false },
        { name: "Vercel Deployment", level: "Intermediate", highlight: false },
      ],
    },
  ];

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase font-semibold">
            Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of the programming languages, frameworks,
            and developer tooling I leverage to build production systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            All Disciplines
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveCategory(group.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === group.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <span>{group.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl space-y-5 border border-slate-800/90 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {group.skills.length} competencies
                </span>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`group relative px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                      skill.highlight
                        ? "bg-slate-900/90 text-slate-100 border border-blue-500/40 hover:border-blue-400 shadow-sm shadow-blue-500/10"
                        : "bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    )}
                    <span className="font-mono">{skill.name}</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-200">
                      • {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Core Traits */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Soft Skills & Professional Traits
              </h4>
              <p className="text-xs text-slate-400">
                Qualities that drive teamwork, precision, and timely delivery
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                Problem-Solving
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                Collaboration & Teamwork
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                Time Management
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                Clean Documentation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
