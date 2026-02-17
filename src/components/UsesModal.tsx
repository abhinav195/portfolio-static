"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Laptop, Smartphone, Terminal, Coffee, Settings, Monitor } from "lucide-react";

interface UsesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UsesModal({ isOpen, onClose }: UsesModalProps) {
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
            className="w-full max-w-2xl bg-card border border-card-border rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="p-6 border-b border-card-border flex justify-between items-center bg-card sticky top-0 z-20">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <Settings className="text-accent" /> /uses
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-muted hover:bg-foreground/10 hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-card space-y-8">
              
              {/* Hardware */}
              <section className="space-y-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Monitor size={18} className="text-accent"/> Hardware
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-muted">
                        <Laptop size={16} className="mt-1 text-foreground/50"/>
                        <span>
                            <strong className="text-foreground">Asus Zenbook 14 OLED:</strong> Sharp OLED contrast for long coding sessions, with enough thermal headroom to compile heavy Spring microservices locally.
                        </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted">
                        <Smartphone size={16} className="mt-1 text-foreground/50"/>
                        <span>
                            <strong className="text-foreground">Mobile Ecosystem:</strong> iPhone 16 & Moto Tab 60 Pro for seamless documentation reading and triage.
                        </span>
                    </li>
                </ul>
              </section>

              {/* Software */}
              <section className="space-y-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Terminal size={18} className="text-accent"/> Software & Dev Tools
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="bg-foreground/5 p-3 rounded border border-card-border text-sm text-foreground">
                        <strong>IntelliJ IDEA Ultimate</strong> <br/> <span className="text-muted text-xs">Java/Spring Development.</span>
                    </li>
                    <li className="bg-foreground/5 p-3 rounded border border-card-border text-sm text-foreground">
                        <strong>Postman</strong> <br/> <span className="text-muted text-xs">API Testing.</span>
                    </li>
                    <li className="bg-foreground/5 p-3 rounded border border-card-border text-sm text-foreground">
                        <strong>Docker Desktop</strong> <br/> <span className="text-muted text-xs">Container management.</span>
                    </li>
                    <li className="bg-foreground/5 p-3 rounded border border-card-border text-sm text-foreground">
                        <strong>Obsidian</strong> <br/> <span className="text-muted text-xs">Knowledge base.</span>
                    </li>
                </ul>
              </section>

               {/* Productivity */}
               <section className="space-y-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Coffee size={18} className="text-accent"/> Productivity
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                    Minimalist setup. <strong>Dark Mode</strong> everywhere. <strong>JetBrains Mono</strong> font.
                </p>
              </section>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}