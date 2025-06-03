/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'reveal': 'reveal 0.7s cubic-bezier(0.24, 0.21, 0.05, 0.99) forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.24, 0.21, 0.05, 0.99) forwards',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.24, 0.21, 0.05, 0.99) forwards',
      },
      keyframes: {
        reveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      transitionTimingFunction: {
        'reveal-ease': 'cubic-bezier(0.24, 0.21, 0.05, 0.99)',
      },
    },
  },
  plugins: [],
} 