import { C } from "../theme";

export default function Asterisk({ size = 24, color = C.pop }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="6" fill={color} />
    </svg>
  );
}