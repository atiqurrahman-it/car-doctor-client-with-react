/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffc97a",

          secondary: "#1bc139",

          accent: "#92f3fc",

          neutral: "#1D151E",

          "base-100": "#F7F7F8",

          info: "#8295E3",

          success: "#16887E",

          warning: "#F0B270",

          error: "#F55847",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
