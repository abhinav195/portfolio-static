"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <>
      <section className="max-w-7xl mx-auto p-4 md:p-8 mt-0 pt-0 mb-24">
        {/* HEADER */}
        <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase text-foreground">
          Architectural <span className="text-accent">Case Studies</span>
        </h2>

        {/* GRID SYSTEM */}
        {/* Removed 'auto-rows-fr' so small cards don't stretch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            
            // --- LAYOUT LOGIC ---
            let gridClass = "";
            if (index === 0) {
              // TicketBlitz: Big on Mobile & Desktop (Restored Original)
              gridClass = "md:col-span-2 md:row-span-2 min-h-[500px]";
            } else {
              // Others: Compact (h-fit) on Mobile, Standard on Desktop
              // This fixes the "empty black space" issue
              gridClass = "md:col-span-1 h-fit md:h-full md:min-h-[250px]";
            }

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (project.hasDeepDive) setSelectedId(project.id);
                }}
                className={`group relative bg-card border border-card-border rounded-[2rem] p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  project.hasDeepDive ? 'cursor-pointer hover:border-accent hover:shadow-[0_0_30px_-5px_rgba(208,245,0,0.1)]' : 'cursor-default'
                } ${gridClass}`}
              >
                {/* Hover Icon Top Right */}
                {project.hasDeepDive && (
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10">
                    <ArrowUpRight className="text-accent" size={32} />
                  </div>
                )}

                {/* --- TOP CONTENT --- */}
                <div className="relative z-10">
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] md:text-xs font-mono border border-card-border bg-background/50 backdrop-blur-sm rounded-full px-3 py-1 text-muted group-hover:text-accent group-hover:border-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title + Category */}
                  <h3 className="text-2xl md:text-3xl font-black mb-2 text-foreground group-hover:text-accent transition-colors leading-none tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                    {project.category}
                  </p>

                  {/* Description */}
                  <p className="text-muted text-sm md:text-base leading-relaxed mb-6 max-w-lg font-medium">
                    {project.shortDescription}
                  </p>

                  {/* ✅ RESTORED: VERTICALLY STACKED GIFs FOR TICKETBLITZ */}
                  {project.demoGifs && project.demoGifs.length > 0 && (
                    <div className="flex flex-col items-center justify-center gap-[0.5rem] my-6">
                      {project.demoGifs.map((gif, idx) => (
                        <img
                          key={idx}
                          src={gif}
                          alt={`${project.title} Demo ${idx + 1}`}
                          className="w-full max-w-[550px] h-auto rounded-lg border border-card-border shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* --- BOTTOM CONTENT --- */}
                <div className="mt-auto relative z-10">
                  {/* STATS GRID - Restored Original Logic */}
                  <div className={`grid gap-2 border-t border-card-border pt-6 mb-6 ${
                    project.stats.length === 10 
                      ? 'grid-cols-5 grid-rows-2' // TicketBlitz specific layout
                      : 'grid-cols-3'
                  }`}>
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-accent font-bold text-xs block mb-1">✓</span>
                        <span className="text-[10px] md:text-xs text-muted group-hover:text-foreground transition-colors font-medium leading-tight">
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* FOOTER: GitHub + View Details */}
                  <div className="flex items-center justify-between pt-2">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-muted hover:text-accent transition-colors z-20"
                      >
                        <ExternalLink size={14} /> GITHUB
                      </a>
                    ) : (
                      <span className="text-xs font-mono uppercase tracking-widest text-muted/40">
                        PROPRIETARY
                      </span>
                    )}

                    {project.hasDeepDive && (
                      <span className="text-xs font-bold font-mono uppercase tracking-widest text-accent flex items-center gap-1">
                        VIEW DETAILS <ArrowUpRight size={14} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}