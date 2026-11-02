"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1.5px] shadow-xs">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-bold text-blue-700 text-sm font-mono">
                AK
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-900 tracking-tight">Abinanth K S</p>
              <p className="text-xs text-slate-500 font-medium">
                Full-Stack Developer • .NET & Modern Web
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-slate-600">
            <a
              href="https://github.com/Abinanth258"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abinanth-k-s-8036a0342"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:abinanh258@gmail.com"
              className="p-2 rounded-lg hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Abinanth K S. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <span className="text-slate-700 font-semibold">Deployed on Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
