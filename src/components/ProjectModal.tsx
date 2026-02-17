"use client";

import { motion } from "framer-motion";
import { X, ShieldCheck, Zap, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const hasGallery = project.gallery && project.gallery.length > 0;
  const images = hasGallery ? project.gallery! : (project.image ? [project.image] : []);
  const totalSlides = images.length;

  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasGallery && totalSlides > 1) {
        if (e.key === "ArrowLeft") goToPrev();
        if (e.key === "ArrowRight") goToNext();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, hasGallery, totalSlides]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className={`relative bg-background border border-card-border w-full ${project.hasDeepDive ? 'max-w-6xl' : 'max-w-2xl'} max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-card border border-card-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors z-50"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
          
          {/* LEFT COLUMN */}
          <div className={`${project.hasDeepDive ? 'lg:col-span-5 border-r' : 'lg:col-span-12'} p-8 md:p-12 flex flex-col border-card-border`}>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-[0.9] text-foreground">
                {project.title}
              </h2>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"/>
                <p className="text-accent font-mono text-sm uppercase tracking-widest">
                  {project.category}
                </p>
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                  <ShieldCheck className="text-accent" size={20} />
                  The Engineering Challenge
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-4 flex items-center gap-2">
                  <Zap size={16} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-card border border-card-border rounded-md text-xs font-mono text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer: GitHub Link */}
            <div className="pt-8 mt-8 border-t border-card-border">
              {project.repoUrl ? (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-card border-2 border-card-border rounded-xl hover:border-accent hover:bg-accent/5 transition-all group"
                >
                  <Github size={20} className="text-foreground group-hover:text-accent transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                    View on GitHub
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-2 text-muted/60 text-sm font-mono uppercase tracking-widest cursor-help px-4 py-2 bg-card/50 border border-card-border rounded-xl" title="This is a proprietary project from my work at Cognizant">
                  <ShieldCheck size={16} /> Proprietary Asset
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Carousel */}
          {project.hasDeepDive && images.length > 0 && (
            <div className="lg:col-span-7 bg-gray-50 dark:bg-[#050505] relative overflow-hidden flex items-center justify-center group min-h-[400px] lg:min-h-auto">
                
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

              <div className="relative w-full h-full p-8 md:p-12 flex flex-col items-center justify-center">
                
                <div className="relative w-full flex-grow flex items-center justify-center">
                  <img 
                    src={images[currentSlide]} 
                    alt={`${project.title} - Slide ${currentSlide + 1}`} 
                    className="w-full h-auto max-h-[60vh] object-contain shadow-2xl rounded-lg border border-card-border transition-all duration-500 ease-out"
                  />
                </div>

                {totalSlides > 1 && (
                  <>
                    <button
                      onClick={goToPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/90 border border-card-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-all shadow-lg backdrop-blur-sm z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/90 border border-card-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-all shadow-lg backdrop-blur-sm z-10"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {totalSlides > 1 && (
                  <div className="flex gap-2 mt-6 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-accent w-8' : 'bg-card-border hover:bg-accent/50'
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div className="absolute bottom-6 right-6 bg-card/80 backdrop-blur border border-card-border px-4 py-2 rounded-full z-10">
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest">
                    {totalSlides > 1 ? `${currentSlide + 1} / ${totalSlides}` : 'Architecture V1.0'}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}
