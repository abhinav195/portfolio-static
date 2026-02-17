"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background flex flex-col pb-0">
      
      {/* Wrapped Hero in ID for "About" scrolling */}
      <div id="about">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
      </div>
      
      {/* Wrapped Projects in ID for "Projects" scrolling */}
      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>
      
      {/* Passed onOpenContact to Footer for "Hire Me" button */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <AnimatePresence>
        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}