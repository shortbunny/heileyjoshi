import { C, D, DI, BODY_FONT } from "../theme";
import Asterisk from "./Asterisk";
import Wave from "./Wave";
import Reveal from "./Reveal";

const SKILL_GROUPS = [
  { label: "Data & AI/ML", items: ["NumPy · Pandas", "scikit-learn", "RAG Systems", "Knowledge Graphs", "LLM Agents", "Neural Networks", "Search Algorithms", "EDA", "Power BI"] },
  { label: "Programming", items: ["Python", "TypeScript", "JavaScript", "Java", "C · C++", "SQL", "HTML · CSS"] },
  { label: "Frameworks & Tools", items: ["React", "Node.js", "Django", "Express.js", "AWS · Supabase", "Git · Docker", "JIRA · Notion"] },
];

export default function About() {
  return (
    <>
      <Wave from={C.cream} to={C.soft} />
      <section id="about" className="relative overflow-hidden snap-stop" style={{ background: C.soft }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
          <span
            className="absolute left-4 top-0 select-none pointer-events-none leading-none"
            style={D({ fontWeight: 900, fontSize: "clamp(180px,32vw,480px)", color: C.pop, opacity: 0.08, letterSpacing: "-0.05em" })}
            aria-hidden
          >
            02
          </span>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <Asterisk size={20} color={C.pop} />
                <span className="text-xs uppercase tracking-[0.2em] opacity-60" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 11, color: C.ink })}>
                  About
                </span>
              </div>
              <h2 className="leading-none" style={D({ fontWeight: 900, fontSize: "clamp(52px,8.5vw,122px)", letterSpacing: "-0.03em", color: C.ink })}>
                Who
                <br />
                I
                <br />
                <span style={{ color: C.pop }}>Am.</span>
              </h2>
              <p className="mt-8 text-xs uppercase tracking-widest opacity-70" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 11, color: C.ink })}>
                Bachelor of Software Engineering (Hons)
                <br />Spec. Engineering Data Science · USYD
              </p>
            </Reveal>

            <div className="md:pt-14">
              <Reveal delay={0.1}>
                <p className="text-xl md:text-2xl leading-snug mb-6" style={DI({ color: C.pop })}>
                  "Building AI systems that stay grounded in real data, and running events that end up on the news."
                </p>
                <p className="text-sm leading-relaxed mb-10 opacity-70" style={{ fontFamily: BODY_FONT, color: C.ink }}>
                  I'm a software engineering student specialising in Data Science, with experience spanning
                  machine learning, RAG systems, and full-stack development across startup and enterprise
                  internships. My Honours thesis builds an agentic medical assistant that queries knowledge
                  graphs and a vector database so AI responses stay traceable to actual clinical data.
                </p>
              </Reveal>

              <div className="flex flex-col gap-7">
                {SKILL_GROUPS.map((g, i) => (
                  <Reveal key={g.label} delay={0.15 + i * 0.08}>
                    <p className="text-xs uppercase tracking-[0.16em] mb-3" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 10, color: C.ink, opacity: 0.75 })}>
                      {g.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1.5"
                          style={{ fontFamily: BODY_FONT, fontWeight: 700, letterSpacing: "0.02em", color: "#4A4A47", border: "1px solid #4A4A47" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Wave from={C.soft} to={C.cream} />
    </>
  );
}