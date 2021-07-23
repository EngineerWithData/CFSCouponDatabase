module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '26': '6.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
