"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Phone,
  Briefcase,
} from "lucide-react";

interface HeroProps {
  onResumeClick?: () => void;
}

export default function Hero({ onResumeClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <p className="text-blue-700 font-mono text-sm tracking-wider uppercase font-semibold">
                Software Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Hi, I'm <span className="gradient-text">Abinanth K S</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 tracking-tight pt-1">
                Full-Stack Developer • .NET, SQL, React & Angular
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build scalable backend services with{" "}
              <span className="text-slate-900 font-semibold">C#, ASP.NET Core & SQL Server</span>, 
              and build responsive, accessible web interfaces with{" "}
              <span className="text-slate-900 font-semibold">React, TypeScript & Angular</span>. 
              Engineering graduate from Anna University with hands-on enterprise internship experience at Techno Park.
            </p>

            {/* Quick Highlights / Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Nagercoil / Thuckalay, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>B.E. Computer Science (2021-2025)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>Techno Park Intern</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Get In Touch</span>
              </a>

              <button
                type="button"
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-blue-700 bg-blue-50/80 hover:bg-blue-100 border border-blue-200/80 transition-all cursor-pointer"
                title="View Resume in Modal"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social / Contact Quick Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-slate-600">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Connect:
              </span>
              <a
                href="https://github.com/Abinanth258"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-slate-900 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abinanth-k-s-8036a0342"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-blue-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abinanh258@gmail.com"
                className="p-1.5 hover:text-rose-600 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919444685963"
                className="p-1.5 hover:text-emerald-600 transition-colors"
                title="Phone: +91 9444685963"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Vibrant Decorative Border Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500 via-indigo-400 to-sky-400 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Image Frame Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-slate-200/80 p-2.5 shadow-xl max-w-sm sm:max-w-md">
                <div className="relative aspect-[3/4] w-72 sm:w-80 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/abinanth.jpg"
                    alt="Abinanth K S - Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 288px, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle clean bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Tech Stack Overlay Pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Abinanth K S</p>
                        <p className="text-[11px] text-blue-700 font-medium">Full-Stack Engineer</p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                        Anna Univ '25
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badges */}
              <div className="hidden sm:flex absolute -top-3 -right-3 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-md items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                <span className="text-xs font-semibold text-slate-800">ASP.NET Core & Angular</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-3 -left-3 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-md items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                <span className="text-xs font-semibold text-slate-800">SQL Server & REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
