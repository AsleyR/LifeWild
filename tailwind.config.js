/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray1: "#BEBEBE",
        lwgreen: "#40632F",
        bgColor: "#F7F4F4"
      },
      margin: {
        mobilex: '1.5rem'
      },
      padding: {
        mobilex: '1.5rem',
        mobilex2: '2.5rem',
        mdx: '6rem',
        lgx: '8rem',
      }
    },
  },
  plugins: [],
}
