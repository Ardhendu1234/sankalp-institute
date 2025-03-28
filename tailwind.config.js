/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1e3a8a', // Indigo for light mode background
          dark: '#111827',  // Dark gray for dark mode background
        },
        text: {
          light: '#1f2937', // Dark text for light mode
          dark: '#e5e7eb',  // Light text for dark mode
        },
        accent: '#facc15', // Yellow accent color (used in both modes)
      },
    },
  },
  plugins: [],
};