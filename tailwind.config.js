/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        graphite: "#171a1f",
        steel: "#68717d",
        signal: "#f97316"
      },
      boxShadow: {
        industrial: "0 20px 50px rgba(23, 26, 31, 0.10)"
      }
    }
  },
  plugins: []
};
