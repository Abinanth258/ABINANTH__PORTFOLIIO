"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a12] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full bg-[#070a12] rounded-[10px] flex items-center justify-center font-bold text-white text-sm font-mono">
                AK
              </div>
            </div>
            <div>
              <p className="font-bold text-white tracking-tight">Abinanth K S</p>
              <p className="text-xs text-slate-400 font-mono">
                Full-Stack Developer • .NET & Modern Web
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/Abinanth258"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abinanth-k-s-8036a0342"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-blue-400 hover:bg-slate-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:abinanh258@gmail.com"
              className="p-2 rounded-lg hover:text-rose-400 hover:bg-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:text-cyan-400 hover:bg-slate-800 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Abinanth K S. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <span className="text-slate-400">Deployed on Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
