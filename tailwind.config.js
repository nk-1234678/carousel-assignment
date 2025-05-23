/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {animation: {
      'spin-slow': 'spin 8s linear infinite',
      'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
    }},
  },
  plugins: [],
}