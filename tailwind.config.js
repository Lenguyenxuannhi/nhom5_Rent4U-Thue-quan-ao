/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    './app/**/*.{js,ts,jsx,tsx,html}',
    './pages/**/*.{js,ts,jsx,tsx,html}',
    './components/**/*.{js,ts,jsx,tsx,html}',
    './public/**/*.html',
  ],
  theme: {
    screens: {
      // Mobile breakpoint (min-width: 375px)
      sm: '375px',
      // Tablet breakpoint (min-width: 768px)
      md: '768px',
      // Desktop breakpoint (min-width: 1280px)
      lg: '1280px',
    },
    extend: {},
  },
  plugins: [],
}
