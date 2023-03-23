/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,vue}',
    './components/**/*.{ts,vue}',
    './layouts/**/*.{ts,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '708px',
        md: '800px',
        lg: '1016px',
        xl: '1160px',
        '2xl': '1160px',
      },
    },
    boxShadow: {
      sm: '0px 1.5px 1.5px rgba(0, 0, 0, 0.07)',
      md: '0px 2.5px 1.5px rgba(0, 0, 0, 0.07)',
      inner: 'inset 0px 0px 2px rgba(34, 34, 34, 0.15)',
      reverse: '0px -2px 5px rgba(55, 79, 96, 0.08)',
      round: '0 1px 8px rgba(0, 0, 0, 0.23)',
    },
    colors: {
      pale: '#F7F8F9',
      white: '#FFFFFF',
      black: '#222222',
      blue: '#2A8BE7',
      red: '#FF4444',
      green: '#27B83E',
      'green-pale': '#E8F7EB',
      grey: {
        50: '#F4F6F7',
        100: '#E3E8EA',
        200: '#CAD1D7',
        300: '#A5B1BB',
        400: '#788998',
        500: '#5D6D7D',
        600: '#505C6A',
        700: '#505C6A',
        800: '#3D434D',
        900: '#24272C',
      },
      yellow: {
        50: '#FFF3D7',
        100: '#FFEDC2',
        200: '#FFE299',
        300: '#FFD671',
        400: '#FFCA48',
        500: '#FFBE1F',
        600: '#E6A300',
        700: '#AE7B00',
        800: '#765400',
        900: '#3E2C00',
      },
      primary: '#5358CF',
      transparent: 'transparent;',
    },
    fontSize: {
      '2xs': ['10px', { lineHeight: '12px' }],
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      md: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['48px', { lineHeight: '48px' }],
      '6xl': ['60px', { lineHeight: '60px' }],
      '7xl': ['72px', { lineHeight: '72px' }],
      '8xl': ['96px', { lineHeight: '96px' }],
      '9xl': ['128px', { lineHeight: '128px' }],
    },
    fontWeight: {
      light: 200,
      normal: 400,
      medium: 550,
    },
    extend: {
      fontFamily: {
        sans: ['ALS Hauss VF'],
      },
      flexBasis: {
        '1/7': '15.249%',
      },

      width: {
        13: '3.25rem',
        18: '4.5rem',
        68: '17rem',
        82: '20.5rem',
      },

      height: {
        13: '3.25rem',
        18: '4.5rem',
        68: '17rem',
      },

      keyframes: {
        skeleton: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
      animation: {
        skeleton: 'skeleton 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
