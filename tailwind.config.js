/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: '350px ',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage:{
        banner: "url('/src/assets/images/banner.jpg')"
      }
    },
  },

  // add custom theme from daisyui
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#002141",
          secondary: "#19D3AE",
          accent: "#0c90ab",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
