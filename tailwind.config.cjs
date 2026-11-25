/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        estate: {
          950: '#060911',
          900: '#0B0F19',
          850: '#101726',
          800: '#172033',
          700: '#24324D',
          600: '#384B6F',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#E2CEB5',
          dark: '#9E7E56',
          shimmer: '#F7EFE5',
        },
        sapphire: {
          DEFAULT: '#1044A5',
          light: '#3B82F6',
          dark: '#0A2558',
          vivid: '#1D4ED8',
        },
        violet: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#5B21B6',
          electric: '#9333EA',
        },
        lavender: {
          DEFAULT: '#E6E6FA',
          dark: '#c5c5f0',
        },
        botanical: {
          DEFAULT: '#1F5E3B',
          light: '#2E8B57',
          dark: '#133E26',
        },
        parchment: {
          DEFAULT: '#F7F4EE',
          light: '#FCFBF8',
          dark: '#EDE7DC',
        },
        cream: {
          DEFAULT: '#F5F5DC',
          dark: '#e8e8c8',
        },
        offwhite: {
          DEFAULT: '#FAF8F5',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-estate':
          'radial-gradient(circle at 50% 20%, #172033 0%, #0B0F19 60%, #060911 100%)',
        'gradient-gold':
          'linear-gradient(135deg, #E2CEB5 0%, #C5A880 50%, #9E7E56 100%)',
        'gradient-sapphire-violet':
          'linear-gradient(135deg, #1044A5 0%, #7C3AED 100%)',
        'gradient-card-dark':
          'linear-gradient(135deg, rgba(23,32,51,0.7) 0%, rgba(11,15,25,0.85) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 25px rgba(197, 168, 128, 0.25)',
        'sapphire-glow': '0 0 40px rgba(16, 68, 165, 0.35)',
        'violet-glow': '0 0 40px rgba(124, 58, 237, 0.35)',
        'estate': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
