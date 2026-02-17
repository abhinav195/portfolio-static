"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, CheckCircle2 } from "lucide-react";
import { TECH_CATEGORIES } from "@/data/techStack";

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechStackModal({ isOpen, onClose }: TechStackModalProps) {
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
            // THEME: Uses bg-card and border-card-border
            className="w-full max-w-4xl bg-card border border-card-border rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* --- HEADER --- */}
            <div className="p-6 border-b border-card-border flex justify-between items-center bg-card sticky top-0 z-20">
              <div>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Cpu className="text-accent" /> Technical Arsenal
                </h2>
                <p className="text-muted text-sm mt-1">
                  The tools and technologies I use to build scalable systems
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-muted hover:bg-foreground/10 hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* --- CONTENT --- */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {TECH_CATEGORIES.map((category) => (
                  <div 
                    key={category.id} 
                    // THEME: Slight background contrast for cards using foreground opacity
                    className="bg-foreground/5 border border-card-border rounded-xl p-5 hover:border-accent/50 transition-colors group"
                  >
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-card border border-card-border text-accent">
                        <category.icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          // THEME: Badges adapt to light/dark automatically
                          className="
                            inline-flex items-center gap-2 px-3 py-1.5 
                            bg-card border border-card-border rounded-md 
                            text-sm font-medium text-foreground/80
                            hover:text-accent hover:border-accent
                            transition-all duration-200 cursor-default
                            hover:shadow-[0_0_10px_-4px_var(--accent)]
                          "
                        >
                           {/* Render the specific icon for the skill */}
                           <skill.icon size={16} className="text-muted group-hover:text-accent transition-colors" />
                           {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
              
              {/* Footer Note */}
              <div className="mt-8 text-center border-t border-card-border pt-6">
                <p className="text-sm text-muted">
                  <CheckCircle2 size={14} className="inline mr-1 text-accent"/>
                  Always learning and exploring new technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}