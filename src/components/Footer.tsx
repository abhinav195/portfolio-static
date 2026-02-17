"use client";

import { useState } from "react";
import UsesModal from "./UsesModal";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const [isUsesOpen, setIsUsesOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-card-border mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-mono uppercase tracking-widest text-gray-500">
          
          {/* Left: Navigation Links */}
          <div className="flex gap-8">
            <button 
              onClick={() => scrollToSection("about")} 
              className="hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")} 
              className="hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={onOpenContact} 
              className="hover:text-accent transition-colors"
            >
              Hire Me
            </button>
            <button 
              onClick={() => setIsUsesOpen(true)} 
              className="hover:text-accent transition-colors"
            >
              Uses
            </button>
          </div>

          {/* Right: Copyright */}
          <div className="text-muted text-sm font-mono uppercase tracking-widest text-right">
             © 2021 — <span className="text-foreground font-bold">ABHINAV PATHAK</span>
          </div>
        </div>
      </footer>

      <UsesModal isOpen={isUsesOpen} onClose={() => setIsUsesOpen(false)} />
    </>
  );
}