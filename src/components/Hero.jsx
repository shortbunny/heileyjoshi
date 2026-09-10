import { C, D, DI, BODY_FONT } from "../theme";
import Asterisk from "./Asterisk";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden pt-28 pb-12 px-8 md:px-14 snap-stop"
      style={{ background: C.cream }}
    >
      <span
        className="absolute -right-10 top-10 select-none pointer-events-none leading-none"
        style={D({ fontWeight: 900, fontSize: "clamp(220px,38vw,560px)", color: C.creamDark, letterSpacing: "-0.05em" })}
        aria-hidden
      >
        01
      </span>

      <div className="flex items-center justify-between relative z-10">
        <span className="text-xs uppercase tracking-[0.18em] opacity-50" style={D({ fontWeight: 700, fontSize: 10 })}>
          Portfolio, 2026
        </span>
        <div className="flex items-center gap-2">
          <Asterisk size={14} color={C.pop} />
          <span className="text-xs uppercase tracking-[0.18em] opacity-50" style={D({ fontWeight: 700, fontSize: 10 })}>
            Sydney, AU
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-8 md:mt-0">
        <p className="mb-2 leading-none" style={DI({ fontSize: "clamp(20px,3.2vw,46px)", color: C.pop })}>
          Software Engineer &amp; Data Scientist
        </p>
        <div className="overflow-hidden">
          <h1
            className="leading-[0.85] uppercase"
            style={D({ fontWeight: 900, fontSize: "clamp(60px,14vw,208px)", letterSpacing: "-0.04em" })}
          >
            Heiley
          </h1>
        </div>
        <div className="flex items-end gap-4" style={{ paddingBottom: "0.1em" }}>
          <h1
            className="leading-[0.85] uppercase"
            style={D({
              fontWeight: 900,
              fontSize: "clamp(60px,17vw,252px)",
              letterSpacing: "-0.01em",
              WebkitTextStroke: "2.5px " + C.ink,
              color: "transparent",
            })}
          >
            Joshi
          </h1>
          <span
            className="hidden md:block pb-3 text-xs uppercase tracking-[0.3em] opacity-40"
            style={D({ fontWeight: 700, writingMode: "vertical-rl", fontSize: 9, letterSpacing: "0.3em" })}
          >
            Univ. of Sydney · 2026
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-6">
        <p className="text-sm leading-relaxed opacity-60 max-w-sm mt-14" style={{ fontFamily: BODY_FONT }}>
          Building agentic AI systems and full-stack products.
          <br />Honours thesis in progress: RAG and knowledge graphs.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#work"
            className="text-xs uppercase tracking-widest px-7 py-3 transition-all"
            style={D({
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: "0.12em",
              background: C.pop,
              color: C.white,
              border: `2px solid ${C.ink}`,
            })}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.ink; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = C.pop; }}
          >
            View Work ↓
          </a>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest px-7 py-3 border-2 transition-all"
            style={D({ fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", borderColor: C.ink })}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.ink; e.currentTarget.style.color = C.cream; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = ""; e.currentTarget.style.color = ""; }}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}