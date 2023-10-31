/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'dark' : '#0c4a6e',
        'dark-paragraph' : '#64748b',
        'second-dark' : '#0f172a',
        'light' : '#fafafa',
        'light-paragraph' : '#cbd5e1',
        'primary' : '#0284c7',
        'secondary' : '#0ea5e9',
      },

      fontFamily: {
        'poppins' : 'poppins',
        'roboto' : 'roboto'
      }
    },
  },
  plugins: [],
}

