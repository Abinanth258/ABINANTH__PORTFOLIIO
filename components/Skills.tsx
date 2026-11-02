"use client";

import React, { useState } from "react";
import {
  Server,
  Layout,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillGroups = [
    {
      id: "backend",
      title: "Backend & Languages",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      tagColor: "bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100",
      skills: [
        { name: "C#", level: "Proficient", highlight: true },
        { name: "ASP.NET Core Web API", level: "Proficient", highlight: true },
        { name: "ASP.NET Core MVC", level: "Intermediate", highlight: false },
        { name: "ADO.NET", level: "Proficient", highlight: true },
        { name: "Entity Framework Core", level: "Proficient", highlight: true },
        { name: "RESTful APIs", level: "Proficient", highlight: true },
        { name: "Python", level: "Intermediate", highlight: false },
        { name: "OOP & Model Binding", level: "Proficient", highlight: false },
      ],
    },
    {
      id: "frontend",
      title: "Frontend & Mobile",
      icon: <Layout className="w-5 h-5 text-indigo-600" />,
      tagColor: "bg-indigo-50 text-indigo-900 border-indigo-200 hover:bg-indigo-100",
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
      title: "Databases & Cloud",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      tagColor: "bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100",
      skills: [
        { name: "SQL Server (SSMS)", level: "Proficient", highlight: true },
        { name: "Stored Procedures", level: "Proficient", highlight: true },
        { name: "MySQL", level: "Intermediate", highlight: false },
        { name: "Firebase Firestore", level: "Intermediate", highlight: true },
        { name: "Firebase Realtime DB", level: "Intermediate", highlight: false },
        { name: "Schema Architecture", level: "Proficient", highlight: false },
      ],
    },
    {
      id: "tools",
      title: "Tools & Methodologies",
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      tagColor: "bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100",
      skills: [
        { name: "Visual Studio", level: "Advanced", highlight: true },
        { name: "VS Code", level: "Advanced", highlight: true },
        { name: "Git & GitHub", level: "Proficient", highlight: true },
        { name: "Postman", level: "Proficient", highlight: true },
        { name: "JWT Authentication", level: "Proficient", highlight: true },
        { name: "Role-Based Access (RBAC)", level: "Proficient", highlight: true },
        { name: "Layered Architecture", level: "Proficient", highlight: false },
        { name: "Vercel Deployment", level: "Proficient", highlight: false },
      ],
    },
  ];

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative border-t border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <p className="text-blue-600 font-mono text-sm tracking-wider uppercase font-semibold">
            Technical Repertoire
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A comprehensive look at the languages, frameworks, and developer tools
            I leverage to build production applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:text-blue-600 border border-slate-200 shadow-xs"
            }`}
          >
            All Skills
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveCategory(group.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === group.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:text-blue-600 border border-slate-200 shadow-xs"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <span className="text-xs font-mono font-medium text-slate-500">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 ${group.tagColor}`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    )}
                    <span className="font-mono">{skill.name}</span>
                    <span className="text-[11px] opacity-75">
                      • {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Professional Traits */}
        <div className="mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Soft Skills & Engineering Mindset
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Professional qualities that drive consistency, code quality, and smooth team collaboration
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Problem-Solving
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Team Collaboration
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Time Management
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Documentation & Clean Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
