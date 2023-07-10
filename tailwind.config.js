/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      red: "hsl(var(--red))",
    },
    fontSize: {
      "body-xs": [
        "9px",
        {
          letterSpacing: "1.286px",
        },
      ],
      "body-small": "12px",
      "body-medium": [
        "12px",
        {
          letterSpacing: "2px",
        },
      ],
      "body-large": [
        "14px",
        {
          letterSpacing: "2px",
        },
      ],
      "heading-large": "18px",
      "heading-xl": [
        "28px",
        {
          letterSpacing: "3.422px",
        },
      ],
    },
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "cursive"],
      },
      colors: {
        "gradient-blue": "hsl(var(--gradient-blue))",
        "gradient-violet": "hsl(var(--gradient-violet))",

        /* neutral */
        "light-grayish-violet": "hsl(var(--light-grayish-violet))",
        "dark-grayish-violet": "hsl(var(--dark-grayish-violet))",
        "very-dark-violet": "hsl(var(--very-dark-violet))",
      },
      backgroundImage: {
        "main-mobile": "url('./assets/images/bg-main-mobile.png')",
        "main-desktop": "url('./assets/images/bg-main-desktop.png')",
        "card-front": "url('./assets/images/bg-card-front.png')",
        "card-back": "url('./assets/images/bg-card-back.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
