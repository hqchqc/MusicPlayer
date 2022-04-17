// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "launch-screen": "url('./src/assets/images/launchScreen.png')",
        "background-image": "url('./src/assets/images/background.jpeg')",
        "login-mode": "url(./src/assets/images/loginBg.png)",
      },
      height: {
        812: "50.75rem",
      },
      width: {
        375: "23.4375rem",
      },
    },
  },
  plugins: [],
};
