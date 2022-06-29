/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "indigo-1000": "rgb(3, 18, 34)",
      },
    
      backgroundImage: {
        bgBtn:
          "linear-gradient(90deg, #46A273 -0.2%, #46A273 0.36%, #133641 100.2%)",
        bgLight: 'url("./Assets/Images/bg-light.svg")',
        bgLightXl: 'url("./Assets/Images/bg-light-1024.png"',
        bgDark: 'url("./Assets/Images/bg.svg"',
        bgDarkXl: 'url("./Assets/Images/bg-1024.png"',
        bgCoin: 'url("./Assets/Images/img65.png")',
      },
    },
  },
  plugins: [],
};
