/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // ...
      animation: {
        loader: 'loader 1.5s infinite ease'
      },
      keyframes: {
        loader: {
          '0%': { left: '-50%' },
          '100%': { left: '130%' }
        }
      },
      boxShadow: {
        load: '0 0 70px 20px rgba(255, 255, 255, 0.77)'
      }
    }

  },
  plugins: []
}
