// Shared design tokens for the site.
export const C = {
  cream: "#F5F0E6",
  creamDark: "#EDE5D3",
  ink: "#0F0F0F",
  soft: "#F5D5E0",
  pop: "#D4265C",
  white: "#FDFAF4",
};

// Display (Playfair Display) style helper
export const D = (style = {}) => ({
  fontFamily: "'Playfair Display', serif",
  ...style,
});

// Italic display style helper
export const DI = (style = {}) => ({
  fontFamily: "'Playfair Display', serif",
  fontStyle: "italic",
  ...style,
});

export const BODY_FONT = "'DM Sans', sans-serif";