import { C, D } from "../theme";
import Asterisk from "./Asterisk";
import Wave from "./Wave";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    name: "Early Window Hit Predictor",
    tag: "ML · NLP",
    desc: "Forecasts Billboard Hot 100 performance from just the first 14 days after release, using matched sampling to adjust for artist popularity and an LLM to pull features out of lyrics. Merges data from Billboard, Spotify, Genius, and Reddit, with features designed to eliminate evaluation fraud.",
    tech: ["Python", "LLM Features", "Matched Sampling"],
    bg: C.soft,
    textColor: C.ink,
  },
  {
    name: "Agentic AI Medical Assistant",
    tag: "Honours Thesis · RAG",
    desc: "An agentic, retrieval-augmented LLM system for clinical decision support. It queries knowledge graphs and a vector database before answering, so responses stay grounded in real medical data and traceable back to their source. In progress at the University of Sydney.",
    tech: ["RAG", "Knowledge Graphs", "LLM Agents"],
    bg: C.pop,
    textColor: C.white,
  },
  {
    name: "Outfitted",
    tag: "Full-Stack · Cloud",
    desc: "Digital wardrobe app for uploading, styling, and organizing clothing items, deployed on AWS with infrastructure configured for reliable, scalable public access.",
    tech: ["React", "AWS", "Node.js", "Express"],
    bg: C.cream,
    textColor: C.ink,
  },
];

export default function Projects() {
  return (
    <>
      <Wave from={C.cream} to={C.ink} />
      <section id="projects" className="relative overflow-hidden snap-stop min-h-screen flex items-center" style={{ background: C.ink }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 w-full">
          <span
            className="absolute -left-8 bottom-0 select-none pointer-events-none leading-none"
            style={D({ fontWeight: 900, fontSize: "clamp(200px,34vw,500px)", color: C.white, opacity: 0.06, letterSpacing: "-0.05em" })}
            aria-hidden
          >
            04
          </span>

          <div className="relative z-10">
            <Reveal className="flex items-end justify-between mb-14 md:mb-16">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Asterisk size={18} color={C.pop} />
                  <span className="text-xs uppercase tracking-[0.2em] opacity-50" style={D({ fontWeight: 700, fontSize: 10, color: C.white })}>
                    Selected Work
                  </span>
                </div>
                <h2
                  className="leading-none uppercase"
                  style={D({
                    fontWeight: 900,
                    fontSize: "clamp(48px,8vw,112px)",
                    letterSpacing: "-0.04em",
                    color: "transparent",
                    WebkitTextStroke: `2.5px ${C.white}`,
                  })}
                >
                  Built.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROJECTS.map((p, i) => (
                <Reveal
                  key={p.name}
                  delay={i * 0.1}
                  y={36}
                  className="group flex flex-col p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2"
                  style={{
                    background: p.bg,
                    border: p.bg === C.cream ? `2px solid ${C.ink}` : "2px solid transparent",
                  }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="text-xs uppercase tracking-widest px-3 py-1.5"
                      style={D({
                        fontWeight: 700,
                        fontSize: 9,
                        letterSpacing: "0.14em",
                        border: `1px solid ${p.textColor === C.white ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)"}`,
                        color: p.textColor,
                      })}
                    >
                      {p.tag}
                    </span>
                    <span style={D({ fontWeight: 900, fontSize: 42, color: p.textColor, opacity: 0.15, lineHeight: 1 })}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className="leading-tight uppercase mb-4 flex-1"
                    style={D({ fontWeight: 900, fontSize: "clamp(22px,2.8vw,34px)", letterSpacing: "-0.03em", color: p.textColor })}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: p.textColor, opacity: 0.75 }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: p.textColor, opacity: 0.45 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Wave from={C.ink} to={C.cream} />
    </>
  );
}