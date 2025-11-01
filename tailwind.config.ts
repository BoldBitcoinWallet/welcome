import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#34495e",
        secondary: "#149077",
        accent: "#f1c40f",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'scroll-fade': 'scrollFade 0.8s ease-out forwards',
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'line-flow': 'line-flow 1.2s ease-in-out forwards',
        'glow-pulse': 'glowPulse 1.2s ease-out forwards',
        'ring-pop': 'ringPop 1.2s ease-out forwards',
        'stroke-draw': 'strokeDraw var(--line-duration,3s) linear forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollFade: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        twinkle: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
          '100%': { opacity: '0', transform: 'scale(0.8)' },
        },
        'line-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%': { opacity: '0.3', transform: 'scale(1)' },
          '40%': { opacity: '0.9', transform: 'scale(1.08)' },
          '100%': { opacity: '0.3', transform: 'scale(1)' },
        },
        ringPop: {
          '0%': { opacity: '0', transform: 'scale(1)' },
          '30%': { opacity: '0.7', transform: 'scale(1.1)' },
          '100%': { opacity: '0', transform: 'scale(1.6)' },
        },
        strokeDraw: {
          '0%': {},
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
