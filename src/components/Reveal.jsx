import { useEffect, useRef, useState } from "react";

/**
 * Wraps any block in a fade + slide-up animation that fires once,
 * the first time it scrolls into view. This is what drives the
 * "scroll animation" across every section — each heading, block of
 * copy, and card reveals itself as you scroll down the page.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  as: Tag = "div",
  className = "",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}