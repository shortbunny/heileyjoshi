import { C, D, DI, BODY_FONT } from "../theme";
import Asterisk from "./Asterisk";
import Wave from "./Wave";
import Reveal from "./Reveal";

const PIPELINE = [
  { n: "01", label: "Query", caption: "Clinician input" },
  { n: "02", label: "Knowledge Graph + Vector DB", caption: "Structured & semantic retrieval" },
  { n: "03", label: "Grounded Answer", caption: "Traceable to source data" },
];

export default function Thesis() {
  return (
    <>
      <Wave from={C.soft} to={C.pop} />
      <section id="thesis" className="relative overflow-hidden snap-stop" style={{ background: C.pop }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
          <span
            className="absolute right-0 -top-4 select-none pointer-events-none leading-none opacity-10"
            style={D({ fontWeight: 900, fontSize: "clamp(180px,30vw,440px)", color: C.white, letterSpacing: "-0.05em" })}
            aria-hidden
          >
            03
          </span>

          <div className="relative z-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <Asterisk size={18} color={C.white} />
                <span className="text-xs uppercase tracking-[0.2em] opacity-60" style={D({ fontWeight: 700, fontSize: 10, color: C.white })}>
                  Honours Thesis
                </span>
              </div>

              <h2
                className="leading-[0.9] uppercase mb-3"
                style={D({ fontWeight: 900, fontSize: "clamp(44px,8vw,108px)", letterSpacing: "-0.04em" })}
              >
                <span style={{ color: "transparent", WebkitTextStroke: `2.5px ${C.white}` }}>Thesis</span>
                <span style={{ color: C.ink }}>.</span>
              </h2>
              <p className="mb-14 text-xs uppercase tracking-widest opacity-50" style={D({ fontWeight: 700, fontSize: 10, color: C.white })}>
                Agentic AI Medical Assistant · University of Sydney · 2026 · In Progress
              </p>
            </Reveal>

            <Reveal delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
              <p className="text-xl md:text-2xl leading-snug" style={DI({ color: C.ink })}>
                "Clinicians need trustworthy AI support for medical decision-making without compromising factual accuracy."
              </p>
              <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: BODY_FONT, color: C.white }}>
                Building an agentic, retrieval-augmented LLM system that queries knowledge graphs and a
                vector database before answering, so every response stays grounded in actual clinical data,
                with a retrieval and reasoning pipeline designed to keep outputs traceable back to source
                medical data.
              </p>
            </Reveal>

            {/* Pipeline diagram — the signature element */}
            <div className="flex flex-col md:flex-row items-stretch">
              {PIPELINE.map((step, i) => (
                <Reveal key={step.n} delay={0.15 + i * 0.12} className="flex items-center flex-1">
                  <div className="flex-1 py-2">
                    <span
                      className="block leading-none mb-3"
                      style={D({ fontWeight: 900, fontSize: 13, color: C.ink, letterSpacing: "0.1em" })}
                    >
                      {step.n}
                    </span>
                    <h3
                      className="leading-tight uppercase mb-2"
                      style={D({ fontWeight: 800, fontSize: "clamp(17px,2vw,24px)", letterSpacing: "-0.01em", color: C.white })}
                    >
                      {step.label}
                    </h3>
                    <p className="text-xs opacity-60" style={{ fontFamily: BODY_FONT, color: C.white }}>
                      {step.caption}
                    </p>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <span
                      className="hidden md:block mx-6 shrink-0 opacity-40"
                      style={{ color: C.white, fontSize: 22 }}
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                  {i < PIPELINE.length - 1 && (
                    <span
                      className="md:hidden block my-4 opacity-40"
                      style={{ color: C.white, fontSize: 18 }}
                      aria-hidden
                    >
                      ↓
                    </span>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Wave from={C.pop} to={C.cream} />
    </>
  );
}