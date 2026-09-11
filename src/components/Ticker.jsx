import { C, D, BODY_FONT } from "../theme";

const SKILLS = [
  "Python", "React", "TypeScript", "Machine Learning", "RAG Systems", "Node.js",
  "PostgreSQL", "Docker", "AWS", "Knowledge Graphs", "Django", "Supabase",
  "REST APIs", "C/C++",
];

export default function Ticker() {
  return (
    <div style={{ background: C.ink, overflow: "hidden", padding: "14px 0" }}>
      <div className="flex whitespace-nowrap" style={{ animation: "ticker 28s linear infinite" }}>
        {[...SKILLS, ...SKILLS, ...SKILLS].map((s, i) => (
          <span key={i} className="flex items-center gap-4">
            <span style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", color: C.cream, textTransform: "uppercase" })}>
              {s}
            </span>
            <span style={{ color: C.pop, fontSize: 18, margin: "0 8px" }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-33.333%)} }`}</style>
    </div>
  );
}