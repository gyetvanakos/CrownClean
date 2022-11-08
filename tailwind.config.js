/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'landbingbackground': "url('../src/assets/landingbg.jpg')"
          }
      },
    },
    plugins: [],
  }