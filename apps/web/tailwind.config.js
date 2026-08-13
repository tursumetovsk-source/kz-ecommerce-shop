/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f9eb',
          100: '#e4f3d2',
          500: '#76BC21',
          600: '#67a71b',
          700: '#528614',
        },
        slateAccent: {
          500: '#405469',
          600: '#344557',
        },
        surface: '#F7F7F7',
        elevated: '#EDEDED',
        textMain: '#333333',
        textMuted: '#999999',
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '8px',
        xl: '8px',
        '2xl': '8px',
      },
      boxShadow: {
        subtle: 'rgba(0, 0, 0, 0.08) 0px 10px 20px -10px',
      },
    },
  },
  plugins: [],
};
