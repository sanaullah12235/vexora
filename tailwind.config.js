/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        secondary: "#111827",
        primary: "#6C5CE7",
        accent: "#00D4FF",
        whiteText: "#FFFFFF",
        grayText: "#BFC8D6",
      },
      backgroundImage: {
        'glow-purple': 'radial-gradient(circle, rgba(108,92,231,0.3) 0%, rgba(108,92,231,0) 70%)',
        'glow-cyan': 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(0,212,255,0) 70%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
