/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },

      // backgroundImage: {
      //   aboutForme: "url('/assets/images/AboutUs/forme.svg')",
      // },

      colors: {
        "blue-primary": "#154987",
        pink: "#FA5689",
        red: "#E03F4F",
        green: "#9FB603",
        "dark-yellow": "#C8A000",
        "blue-header": "#003273",
        "primary-green": "#32E800",
        "secondary-blue": "#134888",
        "green-text": "#16AC11",
        brown: "#ab9682",
        customBlue1: "#001845",
        customBlue2: "#003566",
      },
      screens: {
        custom1: "1760px",
        custom1500: "1500px",
        custom1200: "1200px",
        custom1120: "1120px",
        custom400: "400px",
        custom900: "900px",
        custom800: "800px",
      },
      animation: {
        spin: "spin 2s linear infinite", // Rotation normale
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
