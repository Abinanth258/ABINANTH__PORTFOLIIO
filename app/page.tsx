"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />
      <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {/* Interactive Resume Modal Dialog */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
}
