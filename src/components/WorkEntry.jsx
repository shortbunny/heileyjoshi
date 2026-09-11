import { useState } from "react";
import { C, D, BODY_FONT } from "../theme";
import Reveal from "./Reveal";

export default function WorkEntry({ title, company, period, bullets, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={(index - 1) * 0.08}>
      <div onClick={() => setOpen(!open)} className="border-b cursor-pointer group transition-all" style={{ borderColor: C.ink }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-6 md:py-8">
          <div className="flex items-start md:items-center gap-5 md:gap-8">
            <span className="leading-none shrink-0 mt-1 md:mt-0 opacity-20" style={D({ fontWeight: 900, fontSize: "clamp(28px,4vw,52px)" })}>
              {String(index).padStart(2, "0")}
            </span>
            <div>
              <h3
                className="leading-tight uppercase transition-colors duration-200 group-hover:text-[#D4265C]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(16px,2.2vw,28px)", letterSpacing: "-0.02em" }}
              >
                {title}
              </h3>
              <p className="text-xs uppercase tracking-widest opacity-70 mt-1" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 11 })}>
                {company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 pl-[52px] md:pl-0">
            <span className="text-xs opacity-60" style={{ fontFamily: BODY_FONT }}>{period}</span>
            <span className="text-lg font-bold transition-transform duration-300 block" style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}>
              +
            </span>
          </div>
        </div>
        {open && (
          <div className="pb-8 pl-[52px] md:pl-[80px] pr-4 md:pr-20 border-l-4" style={{ borderColor: C.pop }}>
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ fontFamily: BODY_FONT, opacity: 0.8 }}>
                  <span style={{ color: C.pop, flexShrink: 0, marginTop: 3 }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Reveal>
  );
}