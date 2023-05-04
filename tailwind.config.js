/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: 8,
        sm: 10,
        md: 12,
        lg: 14,
        xl: 16,
      },
    },
  },
  plugins: [],
};
