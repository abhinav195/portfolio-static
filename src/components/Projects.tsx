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
        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">
          Architectural <span className="text-accent">Case Studies</span>
        </h2>

        {/* GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => {
            // LAYOUT LOGIC MATCHING IMAGE1B8D2C
            // Index 0 (TicketBlitz): Spans 2 cols, 2 rows → Big Left Block
            // Index 1 (Library) + 2 (Parking): Will naturally stack in Col 3 Row 1 & 2
            // Index 3, 4, 5: Will naturally flow to Row 3
            let gridClass = "";
            if (index === 0) {
              gridClass = "md:col-span-2 md:row-span-2 min-h-[500px]";
            } else {
              gridClass = "md:col-span-1 min-h-[250px]";
            }

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (project.hasDeepDive) setSelectedId(project.id);
                }}
                className={`group relative bg-card border border-card-border rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  project.hasDeepDive ? 'cursor-pointer hover:border-accent hover:shadow-lg hover:shadow-accent/5' : 'cursor-default'
                } ${gridClass}`}
              >
                {/* Hover Icon Top Right - Only for clickable projects */}
                {project.hasDeepDive && (
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="text-accent" size={32} />
                  </div>
                )}

                {/* TOP CONTENT */}
                <div>
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] md:text-xs font-mono border border-gray-700 rounded-full px-2 py-1 text-gray-400 group-hover:text-accent group-hover:border-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title + Category */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">
                    {project.category}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                    {project.shortDescription}
                  </p>

                  {/* ✅ DEMO GIFs - CENTERED VERTICALLY STACKED */}
                  {project.demoGifs && project.demoGifs.length > 0 && (
                    <div className="flex flex-col items-center justify-center gap-[0.2rem] my-6">
                      {project.demoGifs.map((gif, idx) => (
                        <img
                          key={idx}
                          src={gif}
                          alt={`${project.title} Demo ${idx + 1}`}
                          className="w-full max-w-[550px] h-auto rounded-lg border border-card-border shadow-lg"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* BOTTOM: Stats + Footer */}
                <div>
                  {/* STATS - Checkmarks */}
                  {/* ✅ FIXED: 2 rows × 5 columns for 10 items */}
                  <div className={`grid gap-2 border-t border-gray-800 pt-6 mb-6 ${
                    project.stats.length === 10 
                      ? 'grid-cols-5 grid-rows-2' 
                      : 'grid-cols-3'
                  }`}>
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-accent font-bold text-xs block mb-1">✓</span>
                        <span className="text-[10px] md:text-xs text-foreground font-medium leading-tight">
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* FOOTER: GitHub + View Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-card-border">
                    {/* GitHub Link */}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-500 hover:text-accent transition-colors"
                      >
                        <ExternalLink size={14} /> GITHUB
                      </a>
                    ) : (
                      <span className="text-xs font-mono uppercase tracking-widest text-gray-600 opacity-40">
                        PROPRIETARY
                      </span>
                    )}

                    {/* View Details (only for deep dive projects) */}
                    {project.hasDeepDive && (
                      <span className="text-xs font-mono uppercase tracking-widest text-accent">
                        VIEW DETAILS →
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
