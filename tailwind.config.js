/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "all-around": "0 0 12px 0.5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
