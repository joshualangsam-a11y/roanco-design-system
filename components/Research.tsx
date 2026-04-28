"use client";

import FadeIn from "./FadeIn";
import Float from "./Float";

const papers = [
  {
    title: "Bandwidth Expansion Model",
    venue: "Zenodo",
    doi: "10.5281/zenodo.15179553",
    description:
      "How AI agent orchestration expands cognitive bandwidth for neurodivergent founders. Information-theoretic framework with 18.4x measured throughput expansion.",
    year: "2026",
  },
  {
    title: "Token-Efficient Multi-Turn Orchestration",
    venue: "Zenodo",
    doi: "10.5281/zenodo.15179570",
    description:
      "Token optimization for multi-agent systems. Sliding-context windows, semantic compression, and priority-weighted allocation.",
    year: "2026",
  },
  {
    title: "Cognitive Extension Architecture",
    venue: "Zenodo",
    doi: "10.5281/zenodo.15179604",
    description:
      "Extends Clark & Chalmers\u2019 extended mind thesis to AI-human collaboration. Maps cognitive offloading patterns in production agent systems.",
    year: "2026",
  },
  {
    title: "Principal-Agent Dynamics in AI Orchestration",
    venue: "Zenodo",
    doi: "10.5281/zenodo.15179628",
    description:
      "Game-theoretic analysis of delegation in multi-agent architectures. Trust calibration, monitoring costs, and alignment incentives.",
    year: "2026",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36"
    >
      <div className="accent-line mb-20" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <Float amount={20}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                <span className="font-mono text-accent/30 mr-1.5">03</span>
                Research
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.02em]">
              Published Work
            </h2>
            <p className="mt-5 max-w-lg text-text-muted text-base leading-[1.7]">
              Open-access research on AI orchestration, cognitive science, and
              neurodivergent productivity.
            </p>
          </FadeIn>
        </Float>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {papers.map((paper, i) => (
            <Float key={paper.doi} amount={i % 2 === 0 ? 15 : 25}>
              <FadeIn delay={0.08 + i * 0.08}>
                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-8 flex flex-col h-full group"
                >
                  <div className="h-0.5 w-12 rounded-full mb-7 bg-accent/40 transition-all duration-500 group-hover:w-24 group-hover:bg-accent" />

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-accent/60 font-medium">
                      {paper.venue}
                    </span>
                    <span className="text-[10px] font-mono text-text-muted/30">
                      {paper.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif leading-snug group-hover:text-accent transition-colors duration-300">
                    {paper.title}
                  </h3>

                  <p className="mt-4 text-sm leading-[1.7] text-text-muted flex-grow">
                    {paper.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                    <span className="text-[11px] font-mono text-accent/30">
                      DOI: {paper.doi.split("/").pop()}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      fill="none"
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <path
                        d="M4 12L12 4M12 4H6M12 4v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </a>
              </FadeIn>
            </Float>
          ))}
        </div>
      </div>
    </section>
  );
}
