import { C, D, BODY_FONT } from "../theme";
import Asterisk from "./Asterisk";
import WorkEntry from "./WorkEntry";
import Reveal from "./Reveal";

const ENTRIES = [
  {
    title: "Software Consulting Intern",
    company: "Jacaranda Flame Consulting (Chiefy.ai)",
    period: "Jun to Jul 2026",
    index: 1,
    bullets: [
      "Built core leaderboard, points, and wager mechanic systems for First on the Tools, designing scoring logic informed by user engagement data to drive daily retention.",
      "Implemented daily drop, mascot popup, and result card features using React and TypeScript.",
      "Built the supporting backend functionality using the Django framework and a Supabase database.",
      "Migrated the app's entire data layer from local storage to Supabase after 80% of development was already complete, improving scalability without disrupting existing features.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Teles Technological Services LLP",
    period: "Dec 2024 to Feb 2025",
    index: 2,
    bullets: [
      "Developed and launched two production-ready full-stack apps using React, Node.js, Express.js, and MySQL.",
      "Designed and implemented RESTful APIs from scratch to support core functionality and real-time data flow.",
      "Led feature development end-to-end alongside a teammate from design to production.",
    ],
  },
  {
    title: "Software Intern",
    company: "Silver Touch Technologies Ltd",
    period: "Dec 2023 to Jan 2024",
    index: 3,
    bullets: [
      "Built Java-based modules using OOP principles to support ongoing internal projects and tooling.",
      "Collaborated closely with senior developers in an agile environment.",
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden snap-stop" style={{ background: C.cream }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
        <span
          className="absolute right-0 top-8 select-none pointer-events-none leading-none"
          style={D({ fontWeight: 900, fontSize: "clamp(180px,30vw,440px)", color: C.creamDark, letterSpacing: "-0.05em", opacity: 0.7 })}
          aria-hidden
        >
          03
        </span>

        <div className="relative z-10">
          <Reveal className="flex items-end justify-between mb-14 md:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Asterisk size={18} color={C.pop} />
                <span className="text-xs uppercase tracking-[0.2em] opacity-70" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 11 })}>
                  Experience
                </span>
              </div>
              <h2 className="leading-none uppercase" style={D({ fontWeight: 900, fontSize: "clamp(48px,8vw,112px)", letterSpacing: "-0.04em" })}>
                Work<span style={{ color: C.pop }}>.</span>
              </h2>
            </div>
            <p className="hidden md:block text-xs opacity-50 pb-4" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 11 })}>
              click to expand
            </p>
          </Reveal>

          <div style={{ borderTop: `1px solid ${C.ink}` }}>
            {ENTRIES.map((e) => (
              <WorkEntry key={e.title} {...e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}