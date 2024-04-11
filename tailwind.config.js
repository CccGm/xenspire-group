/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      app: {
        gray: "#D1D1D1",
        lightGreen: "#7B964A",
        green: "#53783B",
        cycle: "#7F56D9",
      },
    },
  },
  plugins: [],
};
