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
    },
    colors: {
      'primary-100': '#1E2022',
      'accent-100': '#788189',
      'accent-200': '#e1e4e6',
      'text-100': '#1E2022',
      'text-200': '#52616B',
      'bg-100': '#F0F5F9',
      'bg-modal': '#f0f5f9f5',
      '--dark-bg-100': '#1E2022',
      '--dark-accent-200': '#1b1c1d',
      '--dark-bg-modal': '#1f2123fa',
      '--dark-text-100': '#F0F5F9',
      '--dark-text-200': '#C9D6DF',
      '--dark-primary-100': '#F0F5F9'
    }

  },
  darkMode: 'class',
  plugins: []
}
