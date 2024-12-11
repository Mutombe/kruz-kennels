/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A2F4F",
        secondary: "#917FB3",
        accent: "#E5BEEC",
        background: "#FDE2F3",
      },
      fontFamily: {
        roboto: ["Hind Mysuru", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
