"use client";

import FadeIn from "./FadeIn";
import Float from "./Float";

const stack = [
  "Elixir / Phoenix",
  "TypeScript",
  "Next.js",
  "React",
  "Python",
  "PostgreSQL",
  "Claude API",
  "Tailwind",
  "Supabase",
  "Stripe",
  "Fly.io",
  "Vercel",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36"
    >
      <div className="accent-line mb-20" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <Float amount={20}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                <span className="font-mono text-accent/30 mr-1.5">02</span>
                About
              </span>
            </div>
          </FadeIn>
        </Float>

        <div className="mt-6 grid md:grid-cols-5 gap-16 md:gap-20">
          <div className="md:col-span-3">
            <Float amount={25}>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-[-0.01em]">
                  I build AI systems for industries that move slow.
                </h2>
              </FadeIn>

              <FadeIn delay={0.18}>
                <p className="mt-10 text-base leading-[1.85] text-text-muted">
                  I&apos;m 21. I&apos;ve shipped 15 products across legal tech,
                  SaaS, fintech, and AI infrastructure. I didn&apos;t learn to
                  code in a classroom — I learned by shipping things people pay
                  for, breaking them, and fixing them before anyone noticed.
                </p>
                <p className="mt-6 text-base leading-[1.85] text-text-muted">
                  As co-founder and CTO of{" "}
                  <span className="text-accent font-medium">Roan Co.</span>, I
                  built a 47-agent orchestration system that handles sales,
                  enrichment, deployments, and QA across every product we run. I
                  also published 4 research papers on AI-human collaboration and
                  cognitive bandwidth expansion.
                </p>
              </FadeIn>
            </Float>
          </div>

          <div className="md:col-span-2">
            <Float amount={35}>
              <FadeIn delay={0.25}>
                <div className="card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-5 bg-accent/40" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted">
                      Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-4 py-2.5 text-xs tracking-wide text-text-muted transition-colors duration-300 hover:border-border-hover hover:text-accent rounded-[8px] cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
