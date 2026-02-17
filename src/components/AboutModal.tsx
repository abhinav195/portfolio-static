"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, User, Target, Zap, Server, Globe, Database } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
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
            {/* --- HEADER --- */}
            <div className="p-6 border-b border-card-border flex justify-between items-center bg-card sticky top-0 z-20">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <User className="text-accent" /> Professional Profile
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-muted hover:bg-foreground/10 hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* --- CONTENT --- */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-card space-y-8">
              
              {/* 1. INTRO / ROLE */}
              <div className="space-y-3">
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Backend Engineer with <span className="text-accent font-bold">4+ years</span> of experience building high-concurrency microservices. 
                </p>
                <p className="text-muted leading-relaxed">
                  I specialize in the <strong className="text-foreground">Spring Boot</strong> and <strong className="text-foreground">Python</strong> ecosystems, architecting systems that don't just work, but scale effortlessly under heavy load.
                </p>
              </div>

              {/* 2. CORE FOCUS AREAS (Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-foreground/5 p-4 rounded-xl border border-card-border">
                    <div className="flex items-center gap-2 mb-2 text-foreground font-bold">
                        <Database size={18} className="text-accent" /> Database Optimization
                    </div>
                    <p className="text-sm text-muted">Eliminating bottlenecks and resolving N+1 issues to ensure sub-second latency.</p>
                </div>
                <div className="bg-foreground/5 p-4 rounded-xl border border-card-border">
                    <div className="flex items-center gap-2 mb-2 text-foreground font-bold">
                        <Server size={18} className="text-accent" /> Distributed Systems
                    </div>
                    <p className="text-sm text-muted">Implementing robust patterns (Sagas, Circuit Breakers) for resilience.</p>
                </div>
              </div>

              {/* 3. IMPACT STATEMENT */}
              <div className="border-l-4 border-accent pl-4 py-1">
                 <h3 className="text-foreground font-bold flex items-center gap-2 mb-1">
                    <Zap size={18} className="text-yellow-500" /> Engineering Impact
                 </h3>
                 <p className="text-muted italic">
                    "Proven track record of reducing latency and operational overhead in production environments serving extensive user bases."
                 </p>
              </div>

              {/* 4. TESTING & QUALITY */}
              <div className="flex items-start gap-3 text-sm text-muted bg-card border border-card-border p-4 rounded-lg">
                 <Target className="text-accent mt-0.5 shrink-0" size={18} />
                 <span>
                    Commitment to <strong>Automated Testing Pipelines</strong> and <strong>CI/CD</strong> to ensure that code quality remains high while delivery speed accelerates.
                 </span>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}