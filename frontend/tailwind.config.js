/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Theme - Dynamic Mixed Palette
        'pastel-blue': '#A8D8EA',
        'mint-green': '#B8E6B8',
        'peach-tone': '#FFD3A5',
        'subtle-lavender': '#D4A5FF',
        'soft-coral': '#FFB3BA',
        'cream-white': '#FFF8F0',
        'warm-gray': '#F5F5F5',
        'light-accent': '#87CEEB',
        
        // Dark Theme - Deep Elegant Palette
        'deep-charcoal': '#1A1A1A',
        'dark-slate': '#2D2D2D',
        'midnight-blue': '#0F1419',
        'teal-glow': '#00D4AA',
        'neon-purple': '#BB86FC',
        'amber-glow': '#FFC947',
        'electric-blue': '#03DAC6',
        'dark-surface': '#121212',
        'dark-elevated': '#1E1E1E',
        
        // Gradient Colors
        'gradient-light-start': '#A8D8EA',
        'gradient-light-end': '#FFD3A5',
        'gradient-dark-start': '#BB86FC',
        'gradient-dark-end': '#00D4AA',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(135deg, #A8D8EA 0%, #B8E6B8 25%, #FFD3A5 50%, #D4A5FF 75%, #FFB3BA 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 25%, #BB86FC 50%, #00D4AA 75%, #FFC947 100%)',
        'card-light': 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8))',
        'card-dark': 'linear-gradient(145deg, rgba(30, 30, 30, 0.9), rgba(45, 45, 45, 0.8))',
        'button-light': 'linear-gradient(135deg, #A8D8EA, #B8E6B8)',
        'button-dark': 'linear-gradient(135deg, #BB86FC, #00D4AA)',
      },
      boxShadow: {
        'light-soft': '0 4px 20px rgba(168, 216, 234, 0.3)',
        'light-hover': '0 8px 30px rgba(168, 216, 234, 0.4)',
        'dark-glow': '0 4px 20px rgba(187, 134, 252, 0.3)',
        'dark-hover': '0 8px 30px rgba(0, 212, 170, 0.4)',
        'neon-purple': '0 0 20px rgba(187, 134, 252, 0.5)',
        'teal-glow': '0 0 20px rgba(0, 212, 170, 0.5)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(187, 134, 252, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(187, 134, 252, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}