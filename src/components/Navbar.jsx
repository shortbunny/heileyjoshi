import { useState, useEffect } from "react";
import { C, D } from "../theme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["About", "Work", "Projects", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12"
      style={{
        background: scrolled ? C.cream : "transparent",
        borderBottom: scrolled ? `1px solid ${C.ink}` : "none",
        paddingTop: scrolled ? 10 : 20,
        paddingBottom: scrolled ? 10 : 20,
      }}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <a href="#top" style={D({ fontWeight: 900, fontSize: 15, letterSpacing: "0.05em" })}>
          HJ
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs uppercase tracking-widest transition-colors hover:opacity-60"
              style={D({ fontWeight: 700, letterSpacing: "0.14em", fontSize: 11 })}
            >
              {l}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-xl"
          style={D({ fontWeight: 900 })}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div style={{ background: C.cream, borderTop: `1px solid ${C.ink}`, marginTop: 10 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 md:px-12 py-4 text-base uppercase border-b"
              style={D({ fontWeight: 800, letterSpacing: "0.08em", borderColor: C.ink })}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}