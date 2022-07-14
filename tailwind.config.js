/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "596px",
        laptop: "1024px",
        desktop: "1280px", 
        huge: "1580px",
      }
    },
  },
  // https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  darkMode: "class",
  //
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
