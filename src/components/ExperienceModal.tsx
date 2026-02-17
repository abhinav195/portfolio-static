"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, Trophy, Star, Award, Bot, Zap, ScrollText } from "lucide-react";
import { EXPERIENCE_DATA } from "@/data/experience";

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper: Auto-selects icon based on achievement text
const getAchievementIcon = (text: string) => {
  const lower = text.toLowerCase();
  if (lower.includes("award") || lower.includes("winner") || lower.includes("top gun")) 
    return <Trophy className="text-yellow-500" size={18} />;
  
  if (lower.includes("appreciation") || lower.includes("star")) 
    return <Star className="text-orange-500" size={18} />;
  
  if (lower.includes("certified") || lower.includes("certification")) 
    return <Award className="text-blue-400" size={18} />;
    
  if (lower.includes("prompt") || lower.includes("ai") || lower.includes("gpt")) 
    return <Bot className="text-pink-500" size={18} />;
    
  return <Zap className="text-zinc-400" size={18} />; // Default fallback
};

export default function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            // CHANGED: Uses bg-card and border-card-border for theme adaptation
            className="w-full max-w-4xl bg-card border border-card-border rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* --- MODAL HEADER --- */}
            {/* CHANGED: Removed hardcoded bg-[#0f0f0f], uses bg-card/bg-card-border */}
            <div className="p-6 md:p-8 border-b border-card-border flex justify-between items-start bg-card sticky top-0 z-20">
              <div>
                {/* CHANGED: text-white -> text-foreground, text-neon-green -> text-accent */}
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Briefcase className="text-accent" /> Professional Experience
                </h2>
                {/* CHANGED: text-zinc-400 -> text-muted */}
                <p className="text-muted text-sm mt-1">
                  Detailed career timeline and key achievements
                </p>
              </div>
              <button
                onClick={onClose}
                // CHANGED: Hover states and base colors adapted to theme
                className="p-2 rounded-full text-muted hover:bg-foreground/10 hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* --- SCROLLABLE CONTENT --- */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-card">
              <div className="space-y-12">
                
                {/* 1. JOB TIMELINE */}
                {EXPERIENCE_DATA.map((job, index) => (
                  <div key={index} className="relative pl-8 md:pl-0">
                    {/* Vertical Timeline Line (Desktop) */}
                    {/* CHANGED: bg-zinc-800 -> bg-card-border */}
                    <div className="hidden md:block absolute left-[150px] top-0 bottom-0 w-[1px] bg-card-border"></div>

                    <div className="md:flex gap-12">
                      {/* Left Column: Date */}
                      <div className="md:w-[150px] flex-shrink-0 flex flex-col items-start text-left mb-4 md:mb-0">
                        {/* CHANGED: bg-neon-green/10 -> bg-accent/10, text-neon-green -> text-accent */}
                        <span className="text-sm font-bold font-mono text-accent bg-accent/10 px-2 py-1 rounded mb-2 inline-block">
                          {job.period.split("–")[0]}
                        </span>
                        {/* CRITICAL FIX: text-muted ensures visibility in both modes */}
                        <span className="text-xs text-muted font-mono font-semibold">
                          to {job.period.split("–")[1]}
                        </span>
                      </div>

                      {/* Right Column: Content */}
                      <div className="flex-grow relative">
                        {/* Timeline Dot */}
                        {/* CHANGED: bg-neon-green -> bg-accent, ring color to bg-card */}
                        <div className="hidden md:block absolute -left-[54px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-card shadow-[0_0_10px_var(--accent)]"></div>

                        {/* --- COMPANY HEADER --- */}
                        <div className="flex items-center gap-4 mb-6">
                            {/* Logo Container */}
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm shrink-0 border border-card-border">
                                <img 
                                  src={job.logo} 
                                  alt={job.company} 
                                  className="w-full h-full object-contain" 
                                />
                            </div>
                            
                            {/* Text Details */}
                            <div>
                                {/* CHANGED: text-white -> text-foreground */}
                                <h3 className="text-2xl font-bold text-foreground leading-tight">
                                    {job.company}
                                </h3>
                                {/* CHANGED: text-neon-green -> text-accent */}
                                <div className="text-accent font-medium text-lg">
                                    {job.role}
                                </div>
                            </div>
                        </div>

                        {/* SECTION 1: ENGINEERING IMPACT */}
                        <div className="mb-6">
                           {/* CHANGED: text-zinc-500 -> text-muted, border-zinc-800 -> border-card-border */}
                           <h4 className="text-xs uppercase tracking-widest text-muted font-bold mb-4 border-b border-card-border pb-2">
                             Engineering Impact
                           </h4>
                           <ul className="space-y-3">
                              {job.responsibilities.map((point, i) => (
                                // CHANGED: text-zinc-300 -> text-foreground/90 for high readability
                                <li key={i} className="flex gap-3 text-foreground/90 text-sm leading-relaxed">
                                  {/* CHANGED: Dot color to accent for consistency */}
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-muted" />
                                  <span>{point}</span>
                                </li>
                              ))}
                           </ul>
                        </div>

                        {/* SECTION 2: AWARDS & RECOGNITION (Dynamic Icons) */}
                        {/* CHANGED: bg-zinc-900/50 -> bg-foreground/5 (generic transparency), border-card-border */}
                        <div className="bg-foreground/5 border border-card-border rounded-xl p-5">
                            <h4 className="text-xs uppercase tracking-widest text-accent font-bold mb-3 flex items-center gap-2">
                                <Award size={16} /> Key Achievements
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                {job.achievements.map((achievement, i) => (
                                    // CHANGED: text-zinc-300 -> text-foreground
                                    <div key={i} className="flex gap-3 text-foreground/90 text-sm items-start">
                                        {/* Auto-selected Icon */}
                                        <div className="mt-0.5 shrink-0">
                                          {getAchievementIcon(achievement)}
                                        </div>
                                        <span className="leading-relaxed">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}

                

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}