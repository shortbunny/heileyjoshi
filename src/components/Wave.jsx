export default function Wave({ from, to }) {
  return (
    <div style={{ background: from, lineHeight: 0, display: "block" }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" width="100%" height="80">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={to} />
      </svg>
    </div>
  );
}
