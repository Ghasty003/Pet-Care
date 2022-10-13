/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dog: "url('./src/images/dog-1.jpg')",
      },
    },
  },
  plugins: [],
};
