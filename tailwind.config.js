/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        "primary-dark-gray": "#5D5C61",
        "primary-light-gray": "#379683",
        "primary-light-blue": "#7395AE",
        "primary-dark-blue": "#557A95",
        "primary-light-brown": "#B1A296",
      },
      gridTemplateColumns: {
        history: "10% 50% 20% 20%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
