import { C, D, BODY_FONT } from "../theme";
import Asterisk from "./Asterisk";
import Wave from "./Wave";
import Reveal from "./Reveal";

const CONTACT_ITEMS = [
  { label: "Email", value: "heileyvjoshi@gmail.com", href: "mailto:heileyvjoshi@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/heiley-joshi", href: "https://www.linkedin.com/in/heiley-joshi" },
];

export default function Contact() {
  return (
    <>
      <Wave from={C.cream} to={C.pop} />
      <section id="contact" className="relative overflow-hidden snap-stop" style={{ background: C.pop }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
          <span
            className="absolute right-0 top-8 select-none pointer-events-none leading-none opacity-10"
            style={D({ fontWeight: 900, fontSize: "clamp(180px,30vw,440px)", color: C.white, letterSpacing: "-0.05em" })}
            aria-hidden
          >
            06
          </span>

          <div className="relative z-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <Asterisk size={18} color={C.white} />
                <span className="text-xs uppercase tracking-[0.2em] opacity-70" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 11, color: C.white })}>
                  Get In Touch
                </span>
              </div>
              <h2 className="leading-none uppercase mb-14" style={D({ fontWeight: 900, fontSize: "clamp(46px,9.5vw,140px)", letterSpacing: "-0.04em", color: C.white })}>
                Let's<br />
                <span style={{ color: C.ink }}>Work.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.18em] mb-2 opacity-60" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 11, color: C.white })}>
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="transition-colors"
                    style={D({ fontWeight: 800, fontSize: "clamp(13px,1.5vw,18px)", color: C.white, letterSpacing: "-0.01em" })}
                    onMouseEnter={(e) => { e.currentTarget.style.color = C.ink; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = C.white; }}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.18} className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t" style={{ borderColor: "rgba(253,250,244,0.25)" }}>
              <p className="opacity-70 text-xs uppercase tracking-widest" style={D({ fontFamily: BODY_FONT, fontWeight: 700, fontSize: 11, color: C.white })}>
                Heiley Joshi, 2026
              </p>
              <a
                href="mailto:heileyvjoshi@gmail.com"
                className="mt-5 md:mt-0 text-xs uppercase tracking-widest px-8 py-3 transition-all"
                style={D({ fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", background: C.ink, color: C.white })}
                onMouseEnter={(e) => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.ink; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = C.ink; e.currentTarget.style.color = C.white; }}
              >
                Email Me →
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}