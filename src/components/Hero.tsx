"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail, Briefcase, GraduationCap, Code2, Terminal, ChevronRight } from "lucide-react";
import ExperienceModal from "./ExperienceModal"; 
import TechStackModal from "./TechStackModal";
import AboutModal from "./AboutModal";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  return (
    <>
      <section className="w-full max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 pt-12 md:pt-24">
        
        {/* 1. PROFILE CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 bg-card border border-card-border rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden min-h-[500px]"
        >
          {/* Glow Effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

          <div>
            <div className="w-28 h-28 md:w-32 md:h-32 bg-gray-800 rounded-full mb-8 border-4 border-accent shadow-xl overflow-hidden relative">
               <img src="/avatar.png" alt="Abhinav Pathak" className="w-full h-full object-cover" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-2">Abhinav Pathak</h1>
            <p className="text-accent font-mono text-lg font-bold">@BackendArchitect</p>
            
            <div className="mt-6 space-y-4 text-muted text-sm leading-relaxed font-medium">
                <p>
                  Backend Engineer with <span className="text-foreground font-bold">4.5+ years</span> designing fault-tolerant, event-driven architectures.
                </p>
                <p>
                  Specialized in <span className="text-foreground">Java 21</span>, <span className="text-foreground">Spring Boot 3</span>, and <span className="text-foreground">Kafka</span> ecosystems on Kubernetes.
                </p>
            </div>
          </div>

          <div className="flex gap-3 mt-8 flex-wrap">
            <a href="https://github.com/abhinav195" target="_blank" className="p-3 bg-background rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors border border-card-border">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/abhinav195" target="_blank" className="p-3 bg-background rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors border border-card-border">
              <Linkedin size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" className="p-3 bg-background rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors border border-card-border" title="Download Resume">
              <FileText size={20} />
            </a>
            <button onClick={onOpenContact} className="flex-grow px-6 py-3 bg-accent text-black rounded-full font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_var(--accent)]">
              <Mail size={18} /> Hire Me
            </button>
          </div>
        </motion.div>

        {/* 2. RIGHT COLUMN CONTAINER */}
        <div className="md:col-span-8 flex flex-col gap-6">
          
          {/* A. TITLE CARD (NOW CLICKABLE) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            onClick={() => setIsAboutModalOpen(true)}
            className="bg-card border border-card-border rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden min-h-[280px] cursor-pointer hover:border-accent transition-colors group"
          >
            <div className="absolute top-8 right-8 text-muted group-hover:text-accent transition-colors">
               <ChevronRight size={28} />
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-foreground">
              BACKEND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-500">ARCHITECT</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted font-medium max-w-lg">
              Building systems that handle <span className="text-foreground">millions of requests</span>, not just websites that look pretty.
            </p>
          </motion.div>

          {/* B. BENTO GRID FOR DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              
              {/* Experience Card */}
              <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  onClick={() => setIsExpModalOpen(true)}
                  className="bg-card border border-card-border p-8 rounded-[2rem] hover:border-accent transition-colors group flex flex-col justify-between cursor-pointer relative min-h-[220px]"
              >
                  <div className="absolute top-8 right-8 text-muted group-hover:text-accent transition-colors">
                    <ChevronRight />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-background rounded-lg text-accent"><Briefcase size={24} /></div>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted">Experience</span>
                  </div>
                  <div>
                      <h3 className="text-3xl font-bold text-foreground group-hover:text-accent transition-colors">Cognizant</h3>
                      <p className="text-accent font-bold mt-1">Associate Software Developer</p>
                      <p className="text-muted text-sm mt-2 font-mono">2021 - Present (4+ Years)</p>
                  </div>
              </motion.div>

              {/* Tech Stack Card */}
              <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  onClick={() => setIsTechModalOpen(true)}
                  className="bg-card border border-card-border p-8 rounded-[2rem] hover:border-accent transition-colors group cursor-pointer relative min-h-[220px]"
              >
                  <div className="absolute top-8 right-8 text-muted group-hover:text-accent transition-colors">
                    <ChevronRight />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-background rounded-lg text-accent"><Code2 size={24} /></div>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted">Tech Arsenal</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                     {["Java 21", "Spring Boot", "Kafka", "Redis", "K8s", "Docker"].map(tech => (
                          <span key={tech} className="px-3 py-1.5 bg-background border border-card-border rounded-full text-xs font-bold text-muted group-hover:text-foreground group-hover:border-accent/50 transition-colors">
                              {tech}
                          </span>
                      ))}
                      <span className="px-3 py-1.5 text-xs text-muted">+12 more</span>
                  </div>
              </motion.div>

               {/* Education Card */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  className="md:col-span-2 bg-card border border-card-border p-8 rounded-[2rem] hover:border-accent transition-colors group flex items-center justify-between"
              >
                  <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-background rounded-lg text-accent"><GraduationCap size={24} /></div>
                          <span className="font-mono text-xs uppercase tracking-widest text-muted">Education</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Bachelor of Technology</h3>
                      <p className="text-muted font-medium">Computer Science & Engineering</p>
                  </div>
                  <div className="hidden md:block">
                      <Terminal className="text-muted/20 group-hover:text-accent transition-colors" size={64} />
                  </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* MODAL COMPONENTS */}
      <ExperienceModal isOpen={isExpModalOpen} onClose={() => setIsExpModalOpen(false)} />
      <TechStackModal isOpen={isTechModalOpen} onClose={() => setIsTechModalOpen(false)} />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </>
  );
}