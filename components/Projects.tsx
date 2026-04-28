"use client";

import FadeIn from "./FadeIn";
import Float from "./Float";

type Project = {
  name: string;
  category: string;
  description: string;
  url?: string;
  metrics?: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: "Litigation Juris",
    category: "Legal Tech",
    description:
      "AI case management for PI law firms. Document analysis, demand letter generation, medical record parsing. Full-stack Elixir/Phoenix with Claude API integration.",
    url: "https://app.roanco.law",
    metrics: "469 tests passing",
    tech: ["Elixir", "Phoenix", "Claude API", "PostgreSQL"],
  },
  {
    name: "Agent Command Center",
    category: "AI Orchestration",
    description:
      "47-agent system orchestrating sales, enrichment, outreach, deploys, and content across 15 products.",
    metrics: "47 agents \u00b7 15 products",
    tech: ["Claude API", "TypeScript", "Multi-agent"],
  },
  {
    name: "Cortex",
    category: "Dev Tools",
    description:
      "Terminal orchestrator in Elixir. Concurrent PTY sessions with intelligent routing and process supervision.",
    metrics: "8 concurrent PTYs",
    tech: ["Elixir", "Phoenix LiveView", "xterm.js"],
  },
  {
    name: "AlphaSwarm",
    category: "AI Trading",
    description:
      "Multi-agent trading system. Eight GenServer agents analyze markets, manage risk, and execute trades autonomously.",
    metrics: "8 GenServer agents",
    tech: ["Elixir", "GenServer", "Polymarket API"],
  },
  {
    name: "FanForge",
    category: "SaaS",
    description:
      "AI music marketing platform. Artists connect socials, generate content strategies, and schedule posts.",
    metrics: "TypeScript monorepo",
    tech: ["Next.js", "Prisma", "Stripe", "OAuth"],
  },
  {
    name: "StreamSnip",
    category: "AI Video",
    description:
      "Paste a YouTube URL. AI detects viral moments, cuts vertical clips with burned-in captions.",
    metrics: "Organic demand",
    tech: ["FastAPI", "Vite", "FFmpeg", "Whisper"],
  },
];

const featured = projects[0];
const rest = projects.slice(1);

export default function Projects() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <Float amount={20}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                <span className="font-mono text-accent/30 mr-1.5">01</span>
                Selected Work
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.02em]">
              What I&apos;ve built
            </h2>
          </FadeIn>
        </Float>

        {/* Featured project — LitJuris */}
        <div className="mt-14">
          <Float amount={15}>
            <FadeIn delay={0.1}>
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-8 md:p-10 flex flex-col group cursor-pointer"
              >
                <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                  <div className="md:col-span-3">
                    <div className="h-0.5 w-16 rounded-full mb-7 bg-accent/50 transition-all duration-500 group-hover:w-32 group-hover:bg-accent" />

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-accent/60 font-medium">
                        Featured
                      </span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted/40">
                        {featured.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
                      {featured.name}
                    </h3>

                    <p className="mt-4 text-sm leading-[1.8] text-text-muted max-w-md">
                      {featured.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {featured.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] tracking-wide text-text-muted/50 border border-border px-2.5 py-1 rounded-[6px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {featured.metrics && (
                      <div className="mt-6 flex items-center gap-3">
                        <span className="text-xs font-mono text-accent/60">
                          {featured.metrics}
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
                    )}
                  </div>

                  {/* Screenshot placeholder */}
                  <div className="md:col-span-2 flex items-center">
                    <div className="w-full aspect-[4/3] rounded-[8px] bg-bg border border-border/50 flex items-center justify-center overflow-hidden">
                      <div className="text-center">
                        <span className="block text-xs font-mono text-accent/20">
                          app.roanco.law
                        </span>
                        <span className="block mt-1 text-[10px] text-text-muted/20">
                          Live product
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          </Float>
        </div>

        {/* Remaining projects */}
        <div className="mt-5 grid md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <Float key={project.name} amount={i % 2 === 0 ? 15 : 25}>
              <FadeIn delay={0.08 + i * 0.06}>
                <a
                  href={project.url}
                  target={project.url ? "_blank" : undefined}
                  rel={project.url ? "noopener noreferrer" : undefined}
                  className={`card p-8 flex flex-col h-full group ${
                    project.url ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="h-0.5 w-12 rounded-full mb-7 bg-accent/40 transition-all duration-500 group-hover:w-24 group-hover:bg-accent" />

                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted/60 mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-serif tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.7] text-text-muted flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-wide text-text-muted/50 border border-border px-2.5 py-1 rounded-[6px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.metrics && (
                    <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-mono text-accent/60">
                        {project.metrics}
                      </span>
                      {project.url && (
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
                      )}
                    </div>
                  )}
                </a>
              </FadeIn>
            </Float>
          ))}
        </div>
      </div>
    </section>
  );
}
