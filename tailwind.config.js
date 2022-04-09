// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "launch-screen": "url('./src/assets/images/launch-screen.png')",
      },
    },
  },
  plugins: [],
};
