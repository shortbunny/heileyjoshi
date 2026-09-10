import { C } from "../theme";

export default function Asterisk({ size = 24, color = C.pop }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
