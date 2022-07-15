/** @type {import('tailwindcss').Config} */

//
// https://unpkg.com/browse/tailwindcss@3.1.6/stubs/defaultConfig.stub.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
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
