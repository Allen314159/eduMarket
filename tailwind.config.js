/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Simplified color palette - remove unused colors
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#0f172a',
        },
        // Keep only used secondary colors
        secondary: {
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          900: '#581c87',
        },
        // Keep only used accent colors
        accent: {
          500: '#ec4899',
        },
        // Hero colors for consistency
        hero: {
          dark: '#0f172a',
          purple: '#581c87',
          blue: '#60a5fa',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'slide-right': 'slide-right 15s linear infinite',
        'slide-left': 'slide-left 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
        'hero-text': 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)',
        'hero-button': 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)',
      }
    },
  },
  plugins: [],
}
