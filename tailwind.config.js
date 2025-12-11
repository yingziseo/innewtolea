/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Apple-style neutral grays
        cream: {
          50: '#FBFBFD',
          100: '#F5F5F7',
          200: '#E8E8ED',
          300: '#D2D2D7',
          400: '#AEAEB2',
          500: '#8E8E93',
        },
        // Accent purple (brand color)
        blush: {
          50: '#F9F5FA',
          100: '#F0E6F3',
          200: '#E1CCE7',
          300: '#CEADD8',
          400: '#B88BC5',
          500: '#9D6AAE',
          600: '#7D4E8C',
          700: '#5E3A69',
        },
        // Primary brand purple
        gold: {
          50: '#F7F3F9',
          100: '#EDE5F2',
          200: '#DBC9E4',
          300: '#C4A6D2',
          400: '#A87DBB',
          500: '#8B5A9B',
          600: '#6E4580',
          700: '#533465',
          800: '#3D264C',
        },
        // Text and UI grays
        warm: {
          50: '#FBFBFD',
          100: '#F5F5F7',
          200: '#E8E8ED',
          300: '#D2D2D7',
          400: '#86868B',
          500: '#6E6E73',
          600: '#48484A',
          700: '#2C2C2E',
          800: '#1D1D1F',
          900: '#0D0D0D',
        },
        // Secondary accent
        rose: {
          50: '#FBF5F7',
          100: '#F5E8EC',
          200: '#EBCFD8',
          300: '#DEB2C0',
          400: '#CE8FA3',
          500: '#B86B84',
          600: '#9A5269',
        },
        // Warm accent
        champagne: {
          50: '#FDFBF8',
          100: '#F8F4ED',
          200: '#F0E8DA',
          300: '#E4D6C0',
          400: '#D4C0A0',
          500: '#BFA67D',
          600: '#A08A5F',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Noto Serif SC',
          'Source Han Serif SC',
          'serif',
        ],
        display: [
          'Playfair Display',
          'Noto Serif SC',
          'Georgia',
          'serif',
        ],
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-slow': 'fadeIn 2s ease-out forwards',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out infinite 2s',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'spin-very-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.02)' },
        },
        scrollIndicator: {
          '0%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '50%': { opacity: '0.5', transform: 'translateX(-50%) translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-4px) rotate(3deg)' },
        },
      },
      boxShadow: {
        'premium': '0 4px 30px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 8px 50px rgba(0, 0, 0, 0.12)',
        'inner-soft': 'inset 0 2px 10px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 40px rgba(139, 90, 148, 0.2)',
        'glow-rose': '0 0 40px rgba(198, 107, 127, 0.15)',
      },
    },
  },
  plugins: [],
};
