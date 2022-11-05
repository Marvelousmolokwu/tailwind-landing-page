/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        lightMagenta: "hsl(293, 100%, 63%)",
        lightViolet: "hsl(264, 100%, 61%)",
        white: "hsl(0, 0%, 100%)",
        grayishViolet: "hsl(270, 20%, 96%)",
        darkDesaturatedViolet: "hsl(271, 36%, 24%)",
        lightMagenta: "hsl(289, 100%, 72%)",
        PaleViolet: "hsl(276, 100%, 81%)",
        moderateViolet: "hsl(276, 55%, 52%)",
        desaturateddarkViolet: "hsl(271, 15%, 43%)",
        grayishBlue: "hsl(206, 6%, 79%)",
        veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
        darkGrayishViolet: "hsl(270, 7%, 64%)",
      },
      fontFamily: {
        body: ["Rubik"],
      },
    },
  },
  plugins: [],
};
