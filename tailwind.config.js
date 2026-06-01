/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050506", // Near-black deep background tones 
        surface: "#0c0c0e",    // Matte dark gray grid surface 
        borderMuted: "#1a1a1e", // Subtle layout borders 
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 65%)', // Accent glow shift setup [cite: 8, 50]
      }
    },
  },
  plugins: [],
}