/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#816c65",
        "primary-light": "#daa48a",
        "primary-lighter": "#EDDACD",
        "secondary-dark-grey": "#222222",
        "secondary-alternate-grey": "#3f3f3f",
        "secondary-medium-grey": "#888888",
        "secondary-dark-border-grey": "#444444",
        "secondary-light-grey": "#cccccc",
        "secondary-faded-text": "#aaaaaa",
        "secondary-pink": "#e95095",
        "input-border": "#e8e8e8",
        "input-background": "#f2f2f2",
        "warm-brown": "#796E65",
        "beige": "#E0C09F",
        "white": "#ffffff",
        "black": "#000000",
        "gold": "#debaa7",
        "aloha-primary": "#5c463e",
        "choco-primary": "#cfb8a3",
        "mango-primary": "#fc8d46",
        "citro-primary": "#f6555a",
        "ananas-primary": "#ffac4d",
        "monoi-primary": "#87675c",
        "uomo-primary": "#334166",
        "uomo-secondary": "#c4fd00",
        "spf-primary": "#f1d9d7",
        "skin-primary": "#eddacd",
        "glow-primary": "#f2d3c1",
        "cool-primary": "#5c463e",
        "scrub-primary": "#f1d9d7",
        "grow-primary": "#fff5f3",
        "hair-primary": "#f1d9d7",
      },

      fontFamily: {
        'Montserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
}