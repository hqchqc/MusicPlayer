// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "launch-screen": "url('./src/assets/images/launch-screen.png')",
        "background-image": "url('./src/assets/images/background.jpeg')",
      },
      height: {
        720: "45rem",
      },
    },
  },
  plugins: [],
};
