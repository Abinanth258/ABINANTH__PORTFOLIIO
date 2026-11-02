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
  Sparkles,
  Phone,
  CheckCircle2,
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Development Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">
                Hello World, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Abinanth{" "}
                <span className="gradient-text">K S</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight pt-1">
                Full-Stack Developer & Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Engineering graduate specializing in architecting resilient backends with{" "}
              <span className="text-slate-200 font-semibold">.NET & SQL Server</span>, 
              and crafting dynamic, responsive user experiences with{" "}
              <span className="text-slate-200 font-semibold">React, Angular & TypeScript</span>.
            </p>

            {/* Quick Highlights / Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800 px-3 py-1.5 rounded-lg">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Nagercoil / Thuckalay, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>B.E. Computer Science (2021-2025)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Techno Park Experience</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Get In Touch</span>
              </a>

              <button
                type="button"
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-900/70 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
                title="View Resume in Modal"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social / Contact Quick Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-5 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <a
                href="https://github.com/Abinanth258"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abinanth-k-s-8036a0342"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abinanh258@gmail.com"
                className="hover:text-rose-400 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919444685963"
                className="hover:text-emerald-400 transition-colors"
                title="Phone: 9444685963"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo & Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse-slow"></div>

              {/* Image Frame Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 p-2 shadow-2xl max-w-sm sm:max-w-md">
                <div className="relative aspect-[3/4] w-72 sm:w-80 rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/abinanth.jpg"
                    alt="Abinanth K S - Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 288px, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle overlay gradient at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Tech Stack Overlay Pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">Abinanth K S</p>
                        <p className="text-[11px] text-blue-400 font-mono">B.E. CSE | .NET & React</p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        2025 Grad
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Badges */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-medium text-slate-200">ASP.NET Core & Angular</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-3 -left-4 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
                <span className="text-xs font-medium text-slate-200">SQL Server & REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
