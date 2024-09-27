/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'verdana': ['Verdana', 'Geneva', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8333rem',
      f: '0.6667rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '3': '3px',
    },
  },
  plugins: [],
}
