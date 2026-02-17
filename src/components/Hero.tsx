"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail, Briefcase, GraduationCap, Code2, Terminal, ChevronRight } from "lucide-react";
import ExperienceModal from "./ExperienceModal"; 
import TechStackModal from "./TechStackModal";
import AboutModal from "./AboutModal"; // <--- 1. IMPORT ADDED

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false); // <--- 2. STATE ADDED

  return (
    <>
      <section className="w-full max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 min-h-fit content-center pb-12">
        
        {/* 1. PROFILE CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 bg-card border border-card-border rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative min-h-[400px]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[60px] rounded-full pointer-events-none" />

          <div>
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full mb-6 border-4 border-accent shadow-xl overflow-hidden relative">
              <img src="/avatar.png" alt="Abhinav Pathak" className="w-full h-full object-cover" />
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Abhinav Pathak</h1>
            <p className="text-accent font-mono mt-2 text-lg">@BackendArchitect</p>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm">
              Backend Engineer with 4.5+ years designing fault-tolerant, event-driven architectures using Java 21, Spring Boot 3, and Kafka. Highly skilled in deploying scalable clusters on Kubernetes (AKS) and extending traditional microservices capabilities through the integration of Generative AI and RAG (Agentic Workflows) pipelines.
            </p>
          </div>

          <div className="flex gap-3 mt-8 flex-wrap">
            <a href="https://github.com/abhinav195" target="_blank" className="p-3 bg-background rounded-full hover:text-accent transition-colors border border-card-border">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/abhinav195" target="_blank" className="p-3 bg-background rounded-full hover:text-accent transition-colors border border-card-border">
              <Linkedin size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" className="p-3 bg-background rounded-full hover:text-accent transition-colors border border-card-border" title="Download Resume">
              <FileText size={20} />
            </a>
            <button onClick={onOpenContact} className="flex-grow px-6 py-3 bg-accent text-accent-foreground rounded-full font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2">
              <Mail size={18} /> Hire Me
            </button>
          </div>
        </motion.div>

        {/* 2. RIGHT COLUMN CONTAINER */}
        <div className="md:col-span-8 flex flex-col gap-6">
          
          {/* A. TITLE CARD (NOW CLICKABLE) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            onClick={() => setIsAboutModalOpen(true)} // <--- 3. CLICK HANDLER ADDED
            className="bg-card border border-card-border rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden min-h-[200px] cursor-pointer hover:border-accent transition-colors group" // Added interactive classes
          >
            {/* Added Chevron for UI consistency */}
            <div className="absolute top-6 right-6 text-gray-600 group-hover:text-accent transition-colors">
               <ChevronRight />
            </div>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-foreground">
              BACKEND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-600">ARCHITECT</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-lg">
              Building systems that handle millions of requests, not just websites that look pretty.
            </p>
          </motion.div>

          {/* B. BENTO GRID FOR DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              
              {/* Experience Card (Trigger) */}
              <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  onClick={() => setIsExpModalOpen(true)}
                  className="bg-card border border-card-border p-6 rounded-[2rem] hover:border-accent transition-colors group flex flex-col justify-between cursor-pointer relative"
              >
                  <div className="absolute top-6 right-6 text-gray-600 group-hover:text-accent transition-colors">
                    <ChevronRight />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-background rounded-lg text-accent"><Briefcase size={24} /></div>
                      <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Experience</span>
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">Cognizant</h3>
                      <p className="text-accent font-medium">Associate Software Developer</p>
                      <p className="text-gray-500 text-sm mt-1">2021 - Present (4+ Years)</p>
                  </div>
              </motion.div>

              {/* Tech Stack Card (Trigger) */}
              <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  onClick={() => setIsTechModalOpen(true)}
                  className="bg-card border border-card-border p-6 rounded-[2rem] hover:border-accent transition-colors group cursor-pointer relative"
              >
                  <div className="absolute top-6 right-6 text-gray-600 group-hover:text-accent transition-colors">
                    <ChevronRight />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-background rounded-lg text-accent"><Code2 size={24} /></div>
                      <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Tech Arsenal</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                      {["Java 21", "Spring Boot", "Kafka", "Redis", "K8s", "Docker", "PostgreSQL", "AWS"].map(tech => (
                          <span key={tech} className="px-3 py-1 bg-background border border-card-border rounded-full text-xs font-mono text-gray-400 group-hover:text-foreground group-hover:border-accent/50 transition-colors">
                              {tech}
                          </span>
                      ))}
                  </div>
              </motion.div>

               {/* Education Card */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  className="md:col-span-2 bg-card border border-card-border p-6 rounded-[2rem] hover:border-accent transition-colors group flex items-center justify-between"
              >
                  <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-background rounded-lg text-accent"><GraduationCap size={24} /></div>
                          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Education</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Bachelor of Technology</h3>
                      <p className="text-gray-500 text-sm">Computer Science & Engineering</p>
                  </div>
                  <div className="hidden md:block">
                        <Terminal className="text-gray-700 group-hover:text-accent transition-colors opacity-20" size={64} />
                  </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* MODAL COMPONENTS */}
      <ExperienceModal isOpen={isExpModalOpen} onClose={() => setIsExpModalOpen(false)} />
      <TechStackModal isOpen={isTechModalOpen} onClose={() => setIsTechModalOpen(false)} />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} /> {/* <--- 4. RENDER ADDED */}
    </>
  );
}