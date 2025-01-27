/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#46c8f8',
        'cream-white':'#ebeaef',
    },
    backgroundColor: {
      'bg-color': '#161b1e',
      "line-color": '#1b2125',
    },
    fontFamily: {
      main: ['Poppins', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
      libre: ['"Libre Baskerville"', 'serif'],
    },
  },
  plugins: [],
}
}

