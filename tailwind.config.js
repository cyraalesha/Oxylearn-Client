module.exports = {
  purge: ["src/**/*.{tsx,html}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        secondary: "#181921",
        white: "#ffffff",
        muted: "#afafaf",
        blue: "#4A46FF",
        seperator: "#181921",
        overlay: "#00000075",
      },
      maxHeight: {
        128: "32rem",
      },
      minHeight: { 24: "6rem" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
