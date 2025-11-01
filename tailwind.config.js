/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hogwarts: {
          green: '#1A472A',
          red: '#740001',
          gold: '#FFD700',
          silver: '#C0C0C0',
          blue: '#0E1A40',
          bronze: '#CD7F32',
          yellow: '#FFB11B',
          black: '#000000',
        },
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'snake': 'snake 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-5deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(15deg)' },
        },
        'twinkle': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1) rotate(0deg)',
          },
          '50%': { 
            opacity: '0.3',
            transform: 'scale(0.5) rotate(180deg)',
          },
        },
        'snake': {
          '0%, 100%': { 
            transform: 'translateY(0px)',
          },
          '50%': { 
            transform: 'translateY(-20px)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      scale: {
        '125': '1.25',
      },
    },
  },
  plugins: [],
}