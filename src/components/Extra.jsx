import { C, D, DI, BODY_FONT } from "../theme";
import Asterisk from "./Asterisk";
import Reveal from "./Reveal";

const LEADERSHIP = [
  "Advanced through four executive roles, including Internal Vice-President and Secretary",
  "Directed event strategy and internal operations across a large, active student organization",
  "Led the events team on major events, including Bracelets and Bonds, featured on 7NEWS and Sydney Morning Herald",
  "Directed a scavenger hunt that won Best Small Event at the USU Awards",
];

export default function Extra() {
  return (
    <section
  className="relative overflow-hidden snap-stop flex items-center"
  style={{ background: C.cream, minHeight: "85vh" }}
>
      <span
        className="absolute right-0 top-8 select-none pointer-events-none leading-none"
        style={D({ fontWeight: 900, fontSize: "clamp(180px,30vw,440px)", color: C.creamDark, letterSpacing: "-0.05em", opacity: 0.7 })}
        aria-hidden
      >
        05
      </span>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: C.ink }}>
          <Reveal className="pb-12 md:pb-0 md:pr-16">
            <div className="flex items-center gap-3 mb-7">
              <Asterisk size={16} color={C.pop} />
              <span className="text-xs uppercase tracking-[0.2em] opacity-50" style={D({ fontWeight: 700, fontSize: 10 })}>
                Education
              </span>
            </div>
            <p className="mb-2 leading-none" style={DI({ fontSize: "clamp(14px,2vw,22px)", color: C.pop })}>
              July 2023 to June 2027
            </p>
            <h3 className="leading-tight uppercase mb-4" style={D({ fontWeight: 900, fontSize: "clamp(22px,3vw,38px)", letterSpacing: "-0.025em" })}>
              University of Sydney
            </h3>
            <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: BODY_FONT }}>
              Bachelor of Software Engineering (Honours)
              <br />Specialisation in Engineering Data Science
            </p>
          </Reveal>

          <Reveal delay={0.1} className="pt-12 md:pt-0 md:pl-16">
            <div className="flex items-center gap-3 mb-7">
              <Asterisk size={16} color={C.pop} />
              <span className="text-xs uppercase tracking-[0.2em] opacity-50" style={D({ fontWeight: 700, fontSize: 10 })}>
                Beyond the Code
              </span>
            </div>
            <p className="mb-2 leading-none" style={DI({ fontSize: "clamp(14px,2vw,22px)", color: C.pop })}>
              March 2024 to Present
            </p>
            <h3 className="leading-tight uppercase mb-5" style={D({ fontWeight: 900, fontSize: "clamp(22px,3vw,38px)", letterSpacing: "-0.025em" })}>
              Taylor Swift Society
            </h3>
            <ul className="space-y-2.5">
              {LEADERSHIP.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed opacity-80" style={{ fontFamily: BODY_FONT }}>
                  <span style={{ color: C.pop, flexShrink: 0, marginTop: 2 }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}